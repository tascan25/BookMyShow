import { useEffect,useRef } from "react"
import { useContext } from "react"
import { webContext } from "../store"
import { locations } from "../data/locations"
import LocationsComp from "./LocationsComp"

function LocationDilaog() {
    const {open,setOpen}  = useContext(webContext)
    const dialogRef = useRef()
    useEffect(()=>{
        if(open){
            dialogRef.current.showModal()
        }
    },[open])
    function onClose(){
        setOpen(false)
    }
  return (
    <dialog ref={dialogRef} className="bg-stone-400/80 w-[60vw] h-[40vh] relative top-[15%] left-[20%] rounded-lg outline-none" onClose={onClose}>
        <div className="bg-white w-full h-full flex flex-row items-center justify-center gap-5 ">
            {
                locations.map((item)=>(<LocationsComp key={item.location} icon={item.icon} location={item.location}/>))
            }         
        </div>
    </dialog>
  )
}

export default LocationDilaog
