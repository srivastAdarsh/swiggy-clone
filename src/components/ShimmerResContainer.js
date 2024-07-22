import ShimmerResCard from "./ShimmerResCard";

const ShimmerResContainer = () => {
    return (
        <div className="m-4 bg-gray-50 animate-pulse">
            <div className="mt-2 mx-4">
                <div className="h-8 bg-gray-300 w-1/2 rounded mb-4"></div>
            </div>

            <div className="mt-2 mx-4">
                <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="w-10/12 my-4 mx-auto flex flex-wrap justify-between">
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                    <div className="h-10 bg-gray-300 rounded w-24 mr-4"></div>
                </div>

                <ShimmerResCard />
            </div>
        </div>
    );
};

export default ShimmerResContainer;