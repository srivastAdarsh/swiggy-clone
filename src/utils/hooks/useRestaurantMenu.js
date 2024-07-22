import { useEffect, useState } from "react";
import { RES_DETAILS_API_URL_1, RES_DETAILS_API_URL_2 } from "../constants";

const useRestaurantMenu = (resId)=>{
    const [resMenu, setResMenu] = useState(null);
    useEffect(()=>{
        fetchResDetails();
    },[])

    const fetchResDetails = async ()=>{
        try{
            const data = await fetch(RES_DETAILS_API_URL_1 + resId + RES_DETAILS_API_URL_2);
            const json = await data.json();
            setResMenu(json.data.cards);
        }catch(error){
            setResMenu([]);
        }
    }
    return resMenu;
}

export default useRestaurantMenu;