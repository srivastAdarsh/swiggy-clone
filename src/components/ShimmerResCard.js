import React from 'react'

const ShimmerResCard = () => {
  return (
    <div className="w-11/12 my-4 mx-auto flex flex-wrap justify-between">
        {Array(12).fill().map((_, index) => (
            <div key={index} className="w-64 mx-2 px-2 mb-8">
                <div className="w-full h-40 bg-gray-300 rounded-xl mb-2"></div>
                <div className="pl-3 pt-2">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ShimmerResCard;