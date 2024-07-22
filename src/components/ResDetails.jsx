import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import Menu from "./ResMenu";
import { useState } from "react";
import RestaurantCategory from "./ResMenuCategory";
import ResDetailsShimmer from "./ShimmerResDetails";

const RestaurantDetails = () => {
    const { resId } = useParams();
    const resMenu = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    const [showMenu, setShowMenu] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    if (resMenu === null) {
        return <ResDetailsShimmer />;
    }

    const { name, avgRating, totalRatingsString, cuisines, sla, costForTwoMessage } = resMenu[2]?.card?.card?.info;
    const totalCards = resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    const categoryCards = totalCards
        .filter((card) => card.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        .map((card) => card.card.card);

    const handleCLick = (title) => {
        // if(currentCategory == title){
        //     setShowMenu(!showMenu);
        //     setCurrentCategory(null);
        // }else{
        //     setShowMenu(true);
        //     setCurrentCategory(title);
        // }
    };

    return (
        <>
            {resMenu.length == 0 ? <h1>No menu found</h1> : 
            <div className="mx-auto max-w-4xl">
                <div className="mb-4 bg-gray-100">
                    <p className="font-bold text-lg">{name}</p>
                    <div className="font-semibold">
                        <span>
                            ⭐ {avgRating} ({totalRatingsString})
                        </span>
                        <span className="ml-2">▪️ {costForTwoMessage}</span>
                    </div>
                    <p className="text-red-500 text-sm font-semibold">{cuisines.join(", ")}</p>
                    <p className="font-semibold text-sm">{sla?.slaString ? sla.slaString.toLowerCase() : null}</p>
                </div>

                <div className="bg-gray-100">
                    {
                        // categoryCards.map((category) => {
                        //     return (
                        //         <div key={category.title} className="mb-8 px-4 py-4 bg-white">
                        //             <div className="font-bold text-lg flex justify-between cursor-pointer" onClick={()=>handleCLick(category.title)}>
                        //                 <p>{category?.title} ({category?.itemCards.length})</p>
                        //                 <span>🔻</span>
                        //             </div>
                        //             {
                        //                 // showMenu && currentCategory == category.title ? (
                        //                     <div>
                        //                         {
                        //                             category.itemCards.map((itemCard) => {
                        //                                 return <Menu key={itemCard.card.info.id} itemCard = {itemCard} show={showMenu}/>
                        //                             })
                        //                         }
                        //                     </div>
                        //                 // ): ""
                        //             }
                        //         </div>
                        //     )
                        // })

                        categoryCards.map((category, index) => (
                            <RestaurantCategory
                                key={category.title}
                                category={category}
                                currentIndex={index}
                                showIndex={showIndex}
                                setShowIndex={() => {
                                    index != showIndex ? setShowIndex(index) : setShowIndex(null);
                                }}
                            />
                        ))
                    }
                </div>
            </div>}
        </>
    );
};

export default RestaurantDetails;
