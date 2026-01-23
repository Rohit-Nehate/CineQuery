import { useEffect } from "react"
import { TMDB_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { setOnTheAirShows, setPopularShows } from "../utils/moviesSlice"


const useGetOnTheAirShows =  ()=>{

const dispatch = useDispatch()



useEffect(()=>{
  const fetchShows = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/discover/tv?with_networks=213|1024|2739|453|2552&language=en-US&sort_by=popularity.desc&page=1', TMDB_OPTIONS)
    const data = await res.json()
   dispatch(setOnTheAirShows(data.results))

  }
fetchShows()

},[])


}

export default useGetOnTheAirShows;

//