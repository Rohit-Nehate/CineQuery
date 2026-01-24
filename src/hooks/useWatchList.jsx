
import { collection, deleteDoc, getDocs } from "firebase/firestore"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../utils/firebase"
import { auth } from "../utils/firebase"
import {setWatchlist} from "../utils/moviesSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

    
export const addToWatchlist = async (movie, type) => {
const user = auth.currentUser
  if (!user) return

  const ref = doc(
    db,
    "users",
    user.uid,
    "watchlist",
    movie.id.toString()
  )

  await setDoc(ref, {
    id: movie.id,
    title: movie.title || movie.name,
    poster_path: movie.poster_path,
    type: type,
    overview: movie.overview,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    release_date: movie.release_date|| movie.first_air_date,
    backdrop_path: movie.backdrop_path,
  })
}

export const removeFromWatchlist = async (movieId) => {
  const user = auth.currentUser
  if (!user) return

  const ref = doc(
    db,
    "users",
    user.uid,
    "watchlist",
    movieId.toString()
  )

  await deleteDoc(ref)
}

export const getWatchlist = async (dispatch) => {
  const user = auth.currentUser
  if (!user) return

  const snap = await getDocs(
    collection(db, "users", user.uid, "watchlist")
  )
const data = snap.docs.map(d => d.data())
// console.log(data)
  dispatch(setWatchlist(data))
}


export const clearWatchlistFromDB = async () => {
  const user = auth.currentUser;
  if (!user) return;

  const ref = collection(db, "users", user.uid, "watchlist");
  const snap = await getDocs(ref);

  const deletions = snap.docs.map(d =>
    deleteDoc(doc(db, "users", user.uid, "watchlist", d.id))
  );

  await Promise.all(deletions);
};