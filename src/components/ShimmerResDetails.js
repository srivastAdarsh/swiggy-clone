const ResDetailsShimmer = () => {
    return (
        <div className="mx-auto max-w-4xl animate-pulse">
            {/* Restaurant Info Shimmer */}
            <div className="mb-4 bg-gray-100 p-4">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>

            {/* Menu Categories Shimmer */}
            <div className="bg-gray-100">
                {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="mb-8 px-4 py-4 bg-white">
                        <div className="flex justify-between mb-4">
                            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                            <div className="h-6 bg-gray-300 rounded w-8"></div>
                        </div>

                        {/* Menu Items Shimmer */}
                        {[1, 2, 3].map((_, itemIndex) => (
                            <div key={itemIndex} className="flex h-auto mb-4 pb-4 border-b-2">
                                <div className="w-9/12 pr-10">
                                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                </div>
                                <div className="relative flex flex-col items-center w-3/12 p-4">
                                    <div className="w-full h-32 bg-gray-300 rounded-2xl mb-2"></div>
                                    <div className="absolute bottom-2 w-36 h-10 bg-gray-400 rounded-lg"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResDetailsShimmer;