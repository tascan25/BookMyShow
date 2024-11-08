// eslint-disable-next-line react/prop-types
function LocationsComp({icon,location}) {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
        <img src={icon} alt={location} />
        <span className="text-slate-400  cursor-pointer text-lg " >{location}</span>
    </div>
  )
}

export default LocationsComp
