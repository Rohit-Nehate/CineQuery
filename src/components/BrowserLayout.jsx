import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import { useSelector } from "react-redux";
import useGetMovies from "../hooks/useGetMovies.jsx";
import useTopRated from "../hooks/useTopRated.jsx";
import useUpcomingMovies from "../hooks/useUpcomingMovies.jsx";
import useGetPopularShows from "../hooks/useGetPopularShows.jsx";
import useGetOnTheAirShows from "../hooks/useGetOnTheAirShows.jsx";
import useGetAiringToday from "../hooks/useGetAiringToday.jsx";
import useGetTopRatedshows from "../hooks/useGetTopRatedshows.jsx";

const BrowserLayout = () => {
  useGetMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useGetPopularShows();
  useGetOnTheAirShows();
  useGetAiringToday();
  useGetTopRatedshows();

  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default BrowserLayout;
