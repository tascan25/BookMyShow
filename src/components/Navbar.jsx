import { useContext } from "react"
import { MdExpandMore } from 'react-icons/md';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { webContext } from "../store";
import logo from "../assets/Logo.svg";

function Navbar() {
  const {openModal,onChangeSearch,search,handelSearch} = useContext(webContext)
  return (
    <header className="w-full  p-4 bg-[#ffffff] ">
      <nav className="flex flex-row justify-between items-center w-full h-full px-[6em]">
        <div className="flex justify-center items-center gap-5">
          <img src = {logo} alt="logo" className="text-red-400 text-lg cursor-pointer "/>
          <div className="relative">
          <input type="text" className="w-[30em] focus:border-slate-400 outline-none  px-2 py-1 text-slate-500 rounded-lg text-sm" 
          placeholder="Search for Movies, Plays, Events and Activites" onChange={(e)=>onChangeSearch(e)} value={search} />
          <button className="absoltue  translate-x-[-25px] translate-y-[1px]" onClick={handelSearch}>{<FaSearch color="black" fontSize={15}/>}</button>
          </div>
         
        </div>
          <ul className="list-none flex justify-center items-center gap-4">
            <li >
              <button onClick={openModal} className="bg-transparent text-slate-500  p-2 rounded-lg
              w-[8em] flex flex-row justify-between items-center text-sm outline-none">Delhi-NCR
              <span>{<MdExpandMore/>}</span>
              </button>
            </li>
            <li >
              <button className="bg-red-500 text-white rounded-md px-2 py-1 text-sm cursor-pointer"> Sign in</button>
              </li>
            <li className="cursor-pointer">{<RxHamburgerMenu/>}</li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar


// import { useContext } from "react";
// import { MdExpandMore } from 'react-icons/md';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaSearch } from "react-icons/fa";
// import { webContext } from "../store";
// import logo from "../assets/Logo.svg";

// function Navbar() {
//   const { openModal, onChangeSearch, search, handelSearch } = useContext(webContext);

//   return (
//     <header className="w-full p-4 bg-white px-1 md:px-[6em]">
//       <nav className="flex flex-row justify-between items-center w-full h-full">
//         <div className="flex justify-center items-center gap-5">
//           <img src={logo} alt="logo" className="text-red-400 text-lg cursor-pointer w-16" />
//           <div className="relative w-full max-w-md">
//             <input 
//               type="text" 
//               className="w-32 focus:border-slate-400 outline-none px-1 py-1 text-slate-300 rounded-lg text-[10px] md:text-sm overflow-hidden" 
//               placeholder="Search for Movies, Plays, Events and Activities" 
//               onChange={onChangeSearch} 
//               value={search} 
//             />
//             <button className="absolute right-2 top-1" onClick={handelSearch}>
//               <FaSearch color="black" fontSize={15} />
//             </button>
//           </div>
//         </div>
//         <ul className="list-none flex justify-center items-center gap-4">
//           <li>
//             <button 
//               onClick={openModal} 
//               className="bg-transparent text-slate-500 p-2 rounded-lg w-[0.2em]  md:w-[8em] flex flex-row justify-between items-center text-sm outline-none">
//               Delhi-NCR
//               <span>{<MdExpandMore />}</span>
//             </button>
//           </li>
//           <li>
//             <button className="bg-red-500 text-white rounded-md px-[2px] py-1 text-xs cursor-pointer  md:text-xs ms:px-2 md:py-1">Sign in</button>
//           </li>
//           <li className="cursor-pointer md:hidden">{<RxHamburgerMenu />}</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;