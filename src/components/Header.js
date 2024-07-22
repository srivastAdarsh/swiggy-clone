import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import User from "../context/User";
import { useSelector } from "react-redux";

const Header = (props) => {
    const {onlineStatus} = props;
    const [loginButton, setLoginButton] = useState("Sign In");
    const {userName} = useContext(User);

    //To read from the store, we need to subscribe to the store using selector
    //useSelector hook takes a callback function where the store parameter contains all the slices of our appStore
    const cartItemsCount = useSelector((store)=>{
        // console.log(store.cart);
        const totalItems = store.cart.items.reduce((acc, item) => acc + item.quantity, 0);
        return totalItems;
    });

    return (
        <nav className="py-4 flex justify-between items-center bg-white sticky top-0 z-10">
            <div className="w-10">
                <a href="/" className="">
                    <img className="" src={LOGO_URL} alt="logo"></img>
                </a>
            </div>
            <ul className="flex justify-between items-center">
                <li className="w-28 hover:cursor-pointer hover:text-orange-500 font-semibold text-gray-700">Status : {onlineStatus ? "🟢" : "🔴"}</li>
                <li className='w-28 hover:cursor-pointer hover:text-orange-500 font-semibold text-gray-700'>Offers</li>
                <li className='w-28 hover:cursor-pointer hover:text-orange-500 font-semibold text-gray-700'>Help</li>
                <li className='w-28 hover:cursor-pointer hover:text-orange-500 font-semibold text-gray-700'>
                    <Link to='/cart'>Cart ({cartItemsCount})</Link>
                </li>
                <li className="w-28 hover:cursor-pointer hover:text-orange-500 font-semibold text-gray-700">
                    <Link className="" to="/login" onClick={() => {
                        loginButton == "Sign In" ? setLoginButton("Sign out") : setLoginButton("Sign In");
                    }}>{loginButton}</Link>
                </li>
                <li className='w-28 hover:cursor-pointer hover:text-orange-500 font-semibold text-gray-700'>{userName}</li>
                <li className='w-28 hover:cursor-pointer hover:text-orange-500 font-semibold text-gray-700'>
                    <Link to="/instamart">Instamart</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default Header;