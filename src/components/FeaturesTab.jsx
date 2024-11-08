import { useContext } from "react"
import { webContext } from "../store"



function FeaturesTab() {

  const {setShowQuery,setQuery,setTag} = useContext(webContext);
  function onClickEvents(e){
    setTag(e.target.textContent)  
    setShowQuery("Action")
  }
  function onClickMovies(e){
    setTag(e.target.textContent)
    setQuery("thriller")
    setShowQuery(null)
  }
function onClickShows(e){
  setTag(e.target.textContent)
  setShowQuery("comedy")
}
  return (
    <div className='w-full px-[6em] mt-4 md:flex items-center justify-between bg-[#f5f5f5] hidden '>
      <div className='flex flex-row justify-evenly items-center gap-4 '>
        <span className='text-zinc-500 text-sm cursor-pointer' onClick={onClickMovies}>Movies</span>
        <span className='text-zinc-500 text-sm cursor-pointer' onClick={onClickShows}>Shows</span>
        <span className='text-zinc-500 text-sm cursor-pointer' onClick={onClickEvents}>Events</span>
        <span className='text-zinc-500 text-sm cursor-pointer'>Plays</span>
        <span className='text-zinc-500 text-sm cursor-pointer'>Sports</span>
        <span className='text-zinc-500 text-sm cursor-pointer'>Activites</span>
      </div>
      <div className='flex flex-row justify-evenly items-center gap-4'>
        <span className='text-zinc-500 text-sm cursor-pointer'>ListYourShows</span>
        <span className='text-zinc-500 text-sm cursor-pointer'>Corporates</span>
        <span className='text-zinc-500 text-sm cursor-pointer'>Offers</span>
        <span className='text-zinc-500 text-sm cursor-pointer'>Gift Cards</span>
      </div>
    </div>
  )
}

export default FeaturesTab
