import { Link } from "react-router-dom";
import { RES_IMAGE_URL } from "../utils/constants";

const ResCard = (props) => {
    const { resInfo,topRated } = props;
    const {name, areaName, avgRating, cuisines, cloudinaryImageId, sla, id} = resInfo?.info;

    return (
        <div className={topRated ? "" :'w-64 mx-2 px-2 mb-8 transform transition duration-200 hover:scale-95'}>
            <Link to={"/restaurant/"+id}>
                <div className=''>
                    <img src={RES_IMAGE_URL + cloudinaryImageId} className="w-full h-40 object-cover rounded-xl" alt="restaurant"></img>
                </div>
                <div className='pl-3 pt-2'>
                    <div className='font-bold text-lg'>
                        <p>{name}</p>
                    </div>
                    <div className=''>
                        <span className="mr-2 font-semibold">⭐{avgRating}</span>
                        <span className="font-semibold">{sla.slaString}</span>
                    </div> 
                    <div className=''>
                        <span className="text-gray-500 block truncate">{cuisines.join(', ')}</span>
                    </div>
                    <div className=''>
                        <span className="text-gray-500">{areaName}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ResCard;