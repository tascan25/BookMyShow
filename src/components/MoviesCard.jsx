

import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function MoviesCard({ title,  poster, genre, rating }) {
    return (
        <div className="w-[15em] bg-transparent rounded-lg shadow-lg  flex flex-col">
            {/* Movie Poster */}
            <div className="relative w-full h-[19em]">
                <img src={poster} alt={title} className="object-cover h-full w-full" />
                
                {/* Rating Tab */}
                <div className="absolute bottom-0 w-full bg-black bg-opacity-90 p-2 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <FaStar color="red" />
                        <span className="text-white text-sm font-medium">{rating}/10</span>
                    </div>
                    <span className="text-white text-xs">11.8k Votes</span>
                </div>
            </div>

            {/* Movie Details */}
            <div className="p-3">
                <h3 className="text-black font-semibold text-lg">{title}</h3>
                <p className="text-slate-500 text-sm">{genre}/Drama</p>
            </div>
        </div>
    );
}

export default MoviesCard;
