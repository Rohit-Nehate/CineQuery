import { useDispatch } from "react-redux";
import { setResultMovies } from "../utils/querySearchSlice";

function useGetQueryMovie() {
  const dispatch = useDispatch();
  const queryMovies = async (query) => {
    const res = await fetch("http://localhost:5000/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();
    return data.movies
  };
  return queryMovies;
}

export default useGetQueryMovie;
