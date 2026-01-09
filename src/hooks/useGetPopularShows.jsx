import { useEffect } from "react"
import { TMDB_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { setPopularShows } from "../utils/moviesSlice"


const useGetPopularShows =  ()=>{

const dispatch = useDispatch()



useEffect(()=>{
  const fetchShows = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', TMDB_OPTIONS)
    const data = await res.json()
   dispatch(setPopularShows(data.results))

  }
fetchShows()

},[])


}

export default useGetPopularShows;