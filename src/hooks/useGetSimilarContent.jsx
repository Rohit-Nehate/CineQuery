import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSimilarContent } from "../utils/moviesSlice";


const useGetSimilarContent = (type, id)=>{
    // console.log(id)
 const dispatch = useDispatch()

const fetchContent = async()=>{
    const res = await fetch(`https://api.themoviedb.org/3/${type=="movie"?"movie":"tv"}/${id}/similar?language=en-US&page=1`, TMDB_OPTIONS)
    const data = await res.json()
    dispatch(setSimilarContent(data.results))
}

useEffect(()=>{
fetchContent()
},[])

}

export default useGetSimilarContent;