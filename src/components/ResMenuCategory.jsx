import React from "react";
import ResMenu from "./ResMenu";

const RestaurantCategory = ({ category, currentIndex, showIndex, setShowIndex }) => {
    // const [showMenu, setShowMenu] = useState(category.title=="Recommended");

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div key={category?.title} className="mb-8 px-4 py-4 bg-white">
            <div className="font-bold text-lg flex justify-between cursor-pointer" onClick={handleClick}>
                <p>
                    {category?.title} ({category?.itemCards.length})
                </p>
                <span>🔻</span>
            </div>
            <div>
                {currentIndex == showIndex
                    ? category.itemCards.map((itemCard) => {
                          return <ResMenu key={itemCard.card.info.id} itemCard={itemCard} />;
                      })
                    : null}
            </div>
        </div>
    );
};

export default RestaurantCategory;
