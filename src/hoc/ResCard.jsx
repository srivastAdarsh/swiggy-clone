//Higher order components => normal JS function -> takes a component as input -> returns a new component with enhanced features -> doesn't change the behaviour of the input component

const topLabelledCard = (ResCard) => {
    const TopResCard = (props) => {
        return (
            <div className="relative w-64 mx-2 px-2 mb-8 transform transition duration-200 hover:scale-95">
                <ResCard {...props} />
                <div className="absolute px-1 pt-1 bg-black opacity-80 text-white text-sm top-2 -left-1">Top rated</div>
            </div>
        )
    }
    return TopResCard;
}

export default topLabelledCard;