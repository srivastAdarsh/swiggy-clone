import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { SWIGGY_API_URL } from "../utils/constants";
import topLabelledCard from "../hoc/ResCard";
import Shimmer from "./ShimmerResContainer";
import ShimmerResCard from "./ShimmerResCard";

const ResContainer = () => {
    const [allResList, setAllResList] = useState([]);
    const [RenderRestaurants, setRenderRestaurants] = useState(null);
    const [searchRestaurants, setSearchRestaurants] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const [resCount, setResCount] = useState(0);
    const TopResCard = topLabelledCard(ResCard);

    //useEffect hook (without dependency array) --> will be called everytime when the component is rendered
    //useEffect hook (with empty dependency array) --> will be called on first render of the component
    //useEffect hook (with non-empty dependency array) --> will be called everytime when the dependency array changes
    useEffect(()=>{
        fetchRealtimeData();
    },[]);

    useEffect(()=>{
        //if the user has scrolled to the bottom of the page,then fetch more data
        window.addEventListener("scroll", hasScolledToBottom);
        return () => window.removeEventListener("scroll", hasScolledToBottom);
    },[]);

    async function fetchRealtimeData() {
        try {
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();
            const { restaurants } = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;

            setAllResList(restaurants);
            setResCount(restaurants.length);
            setRenderRestaurants(restaurants);
        } catch (error) {
            setRenderRestaurants([]);
        } finally {
            setIsLoading(false);
        }
    }

    function hasScolledToBottom(){
        const visibleHeight = window.innerHeight;
        const scrolledHeight = document.documentElement.scrollTop;
        const totalHeight = document.documentElement.offsetHeight;

        if(Math.ceil(visibleHeight + scrolledHeight) >= Math.floor(totalHeight-1)) {
            setIsMoreLoading(true);
            fetchMoreData();
        }
    }

    async function fetchMoreData() {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        const { restaurants } = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;

        //To remove the same key warning, change the id of each restaurant
        setResCount(prevResCount=> {
            restaurants.forEach(restaurant => {
                restaurant.info.id = restaurant.info.id + prevResCount.toString();
            });
            return prevResCount + restaurants.length;
        });

        setAllResList(prevResList => {
            return  [...prevResList, ...restaurants];
        })

        setRenderRestaurants(prevRenderedRestaurants => {
            return  [...prevRenderedRestaurants, ...restaurants];
        })

        setIsMoreLoading(false);
    }

    //function to filter top rated restaurants 
    function filterTopRatedRes(){
        setRenderRestaurants(allResList.filter(res=>res?.info?.avgRating>4.2));
    }

    if(isLoading){
        return <Shimmer />;
    }

    return (
        <>
        {
            //JS things we can't use directly inside JSX : if/else, for/forEach, try/catch, switch
            RenderRestaurants.length==0 ? <h1>No res to display</h1>:
            (<div className="m-4 bg-gray-50">
                <div className="mt-2 mx-4">
                    <p className="text-black text-3xl font-bold">Top restaurants in Delhi</p>
                    <div className="">
                    </div>
                </div>

                <div className="mt-2 mx-4">
                    <div className="mb-2"> 
                        <p className="text-black text-3xl font-bold">Restaurants with online food delivery in Delhi</p>
                        <button className="bg-gray-300 rounded-lg px-2" onClick={()=>{
                            const filteredRestaurants = allResList.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchRestaurants.toLowerCase()))
                            setRenderRestaurants(filteredRestaurants);
                        }}>Enter text for Live Search</button>
                        <input type="text" className="border-black border-2 h-5 ml-2" onChange={(e)=>{
                            // setSearchRestaurants(e.target.value);
                            const filteredRestaurants = allResList.filter(restaurant=>restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase()))
                            setRenderRestaurants(filteredRestaurants);
                        }}/>
                        
                        <button className="ml-8 bg-gray-300 rounded-lg px-2" type="button" onClick={filterTopRatedRes}>
                            Top rated restaurants
                        </button>
                    </div>

                    <div className="w-11/12 my-4 mx-auto flex flex-wrap justify-between">
                        {RenderRestaurants.map(restaurant => 
                            restaurant?.info?.avgRating > 4.2 ? <TopResCard key={restaurant?.info?.id} resInfo={restaurant} topRated={true}/> :
                            <ResCard key={restaurant?.info?.id} resInfo={restaurant} />
                        )}
                    </div>
                </div>
                
                {isMoreLoading && <ShimmerResCard />}
            </div>)
        }
        </>
    )
}

export default ResContainer;