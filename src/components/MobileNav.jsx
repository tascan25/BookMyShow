function MobileNav() {
  return (
    <div className="w-full p-4 bg-[#ffff] flex justify-evenly items-center relative bottom-0 top-0 mt-10 md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col justify-center items-center gap-1">
            <img src={"https://assets-in.bmscdn.com/discovery-catalog/collections/home-selected-collection-202302270255.png"} alt="home.svg" className="w-10 h-10"/>
            <span className="text-[#DC354B] text-sm">Home</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
            <img src={"https://assets-in.bmscdn.com/discovery-catalog/collections/movies-default-collection-202303031120.png"} alt="home.svg" className="w-10 h-10"/>
            <span className="text-slate-400 text-sm">Movies</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
            <img src={"https://assets-in.bmscdn.com/discovery-catalog/collections/le-icon-grey-collection-202405100122.png"} alt="home.svg" className="w-10 h-10"/>
            <span className="text-slate-400 text-sm">Events</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
            <img src={"https://assets-in.bmscdn.com/discovery-catalog/collections/profile-default-collection-202302270255.png"} alt="home.svg" className="w-10 h-10"/>
            <span className="text-slate-400 text-sm">Profile</span>
        </div>
    </div>
  )
}

export default MobileNav

