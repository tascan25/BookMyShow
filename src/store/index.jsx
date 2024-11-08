 import { createContext,useState,useEffect } from "react";

 export const webContext = createContext()

 export default function WebContextProvider({children}){
    const [tag,setTag] = useState("Movies")
    const [showQuery,setShowQuery] = useState(null)
    const [show,setShow] = useState([])
    const [search,setSearch] = useState('');
    const [Loading, setLoading] = useState(false)
    const [query,setQuery] = useState("comedy")
    const [error,setError] = useState(null)
    const [Movies,setMovies] = useState([])
     const [open,setOpen] = useState(false)
     useEffect(()=>{
        const fetchShows = async()=>{
            setLoading(true)
            const response = await fetch(`https://www.omdbapi.com/?apikey=c3fbec08&s=${showQuery}&type=series`)
            if(!response.ok){
                setError("Something went wrong")
            }
            const data = await response.json()
            setShow(data.Search)
            setLoading(false)

        }

        fetchShows()
     },[showQuery])


     useEffect(()=>{
        const fetchMovies = async()=>{
            setLoading(true)
            const response = await fetch(`https://www.omdbapi.com/?apikey=c3fbec08&s=${query}`)
            
            if(!response.ok){
                setError("Something went wrong")
            }
            const data = await response.json()
            setMovies(data.Search)
            setLoading(false)
        }
        fetchMovies()
     },[query])

     function openModal(){
         setOpen(true)
     }

     function onChangeSearch(e){
         setSearch(e.target.value)
     }

     function handelSearch(){
        setQuery(search)
        setSearch('')
     }
     
    
     return (
         <webContext.Provider value={{open,setOpen,openModal,Loading,Movies,error,onChangeSearch,search,handelSearch
            ,setShowQuery,setQuery,showQuery,show,tag,setTag
         }}>
             {children}
         </webContext.Provider>
     )
 }