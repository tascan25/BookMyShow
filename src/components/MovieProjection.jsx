import { useContext } from "react";
import { webContext } from "../store";
import MoviesCard from "./MoviesCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useRef } from "react";
import { FiCommand } from "react-icons/fi";
function MovieProjection() {
  const leftButtonRef = useRef();
  const rightButtonRef = useRef();
  const { Movies, error, Loading,show,showQuery,tag } = useContext(webContext);
  const [startIndex, setStartIndex] = useState(0);
  let data = [];
  if(showQuery){
    data = show;
  }
  else{
    data = Movies;
  }
  const sliceSize = 5;
  const currentSlice = data.slice(startIndex, startIndex + sliceSize);

  function handelNextSlice() {
    if (startIndex + sliceSize < data.length) {
      setStartIndex(startIndex + sliceSize);
    }
    if (rightButtonRef.current.disabled) {
      rightButtonRef.current.style.visiblity = "hidden";
    }
  }
  function handelPrevSlice() {
    if (startIndex - sliceSize >= 0) {
      setStartIndex(startIndex - sliceSize);
    }
    if (leftButtonRef.current.disabled) {
      leftButtonRef.current.style.visiblity = "hidden";
    }
  }
  return (
    <div className="flex-1 flex flex-col w-full px-[6em] mt-10 justify-start center gap-2 relative">
     
      {error && <h1>{error}</h1>}
      <h4 className="text-2xl text-slate-800 font-bold">Recommended {tag}</h4>
      <div className="flex items-center w-full gap-5 justify-center ">
        {startIndex > 0 && (
          <button
            ref={leftButtonRef}
            className="bg-transparent absolute left-10"
            onClick={handelPrevSlice}
          >
            {<IoIosArrowBack fontSize={40} />}
          </button>
        )}
        <div className="w-full  flex flex-wrap md:min-w-full md:flex-nowrap  scrollbar-hidden gap-10 justify-start  ">
          {Loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <FiCommand fontSize={50} className="animate-spin" />
            </div>
          ) : (
            currentSlice.map((item) => (
              <MoviesCard
                key={item.Title}
                title={item.Title}
                genre={"Action"}
                poster={item.Poster}
                rating={9.8}
              />
            ))
          )}
        </div>
        {startIndex + sliceSize < data.length && (
          <button
            ref={rightButtonRef}
            className=" bg-transparent absolute right-10"
            onClick={handelNextSlice}
          >
            {<IoIosArrowForward fontSize={40} color="grey" />}
          </button>
        )}
      </div>
    </div>
  );
}
export default MovieProjection;
