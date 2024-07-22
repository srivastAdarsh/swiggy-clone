import { useState, useEffect } from "react";
import { RES_IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../store/Cart/cartSlice";

const ResMenu = ({ itemCard, isRendered }) => {
    const { id, name, price, defaultPrice, itemAttribute, ratings, description, imageId} = itemCard.card.info;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    // To write to/update the store, we need to
    // 1. dispatch an action (execute some action to update the cart)
    // 2. call the reducer function (execute the function based on the action)
    const countInCart = useSelector((store)=>{
        // If the item is in the cart, return its quantity, otherwise return 0
        const item = store.cart.items.find(item => item?.card?.info?.id == id);
        return item ? item.quantity : 0;
    });

    useEffect(()=>{
        !isAdded && countInCart && setIsAdded(true);
        !countInCart && setIsAdded(false);
    },[countInCart])

    const expandDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const dispatch = useDispatch();

    const addItemToCart = (itemCard) => {
        dispatch(addItems(itemCard));
        //This is also wrong way of updating isAdded because of the same reasons.
        // !isAdded && setIsAdded(true);
    };

    const removeItemFromCart = (itemCard) => {
        dispatch(removeItems(itemCard.card.info.id));
        // This isn't working because dispatch is an async call and before it removes the item from the cart, 
        // the execution of this function gets executed and since the element wasn't removed yet,
        // countInCart will still show the previous number of items in the cart

        // console.log("count after removal : ", countInCart);
        // !countInCart && setIsAdded(false);
    }

    return (
        <div className="flex h-auto mb-4 pb-4 border-b-2">
            <div className="w-9/12 pr-10">
                <span className="text-xs">{itemAttribute?.vegClassifier == "NONVEG" ? "🔴" : "🟢"}</span>
                <div className="font-semibold mb-2">
                    <p>{name}</p>
                    <span>Rs.{Math.floor((price || defaultPrice) / 100)}</span>
                </div>
                {ratings?.aggregatedRating?.rating && ratings?.aggregatedRating?.ratingCountV2 ? (
                    <div className="text-sm mb-2">
                        <span className="text-green-500 font-bold">⭐{ratings?.aggregatedRating?.rating}</span>
                        <span className="font-semibold">({ratings?.aggregatedRating?.ratingCountV2})</span>
                    </div>
                ) : (
                    ""
                )}
                <div className="relative">
                    <p className={`w-11/12 ${isExpanded ? "" : "truncated"}`}>{description}</p>
                    {description && description.length > 156 ? (
                        <button
                            className="absolute z-1 bottom-1 -right-1 text-gray-600 font-bold text-md"
                            onClick={expandDescription}
                        >
                            {isExpanded ? "less" : "more"}
                        </button>
                    ) : null}
                </div>
            </div>
            <div className="relative flex flex-col items-center w-3/12 p-4">
                {imageId ? (
                    <img
                        src={RES_IMAGE_URL + imageId}
                        className="w-full object-cover rounded-2xl h-32"
                        alt="menu-img"
                    />
                ) : (
                    ""
                )}
                <button
                    type="button"
                    className="mx-auto w-36 h-10 absolute bottom-0 bg-white text-green-700 font-bold text-lg rounded-lg border-2 tracking-tighter"
                    onClick={() => addItemToCart(itemCard)}
                >
                    {!isAdded ? "ADD" : (
                        <div className="h-full flex items-center">
                            <button className="w-1/3 h-full font-extrabold text-lg text-center content-center" onClick={(e)=>{
                                e.stopPropagation(); 
                                return removeItemFromCart(itemCard);
                            }}>-</button>
                            <span className="w-1/3 h-full text-center content-center">{countInCart}</span>
                            <button className="w-1/3 h-full font-extrabold text-lg text-center content-center" onClick={(e)=>{
                                e.stopPropagation(); 
                                return addItemToCart(itemCard);
                            }}>+</button>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ResMenu;
