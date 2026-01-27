import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, toggleShowProfile } from "../utils/slices";
import { getWatchlist } from "../hooks/useWatchList";
import { setWatchlist } from "../utils/moviesSlice";
import ProfilePopup from "./ProfilePopup";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userSlice.user);
  const showProfile = useSelector((store) => store.userSlice.showProfile);

  //handelers

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
    dispatch(toggleShowProfile());
  };

  const handleShowProfile = () => {
    dispatch(toggleShowProfile());
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;

        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        getWatchlist(dispatch);
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unsub;
  }, []);

  return (
    <>
      <div className="z-60 absolute bg-gradient-to-b flex p-10! items-center justify-between from-black h-15 w-full top-0 left-0">
        <img src="/images/logo.png" alt="logo" className="w-60 " />

        {user && (
          <ul className="text-white flex gap-15 text-xl">
            <Link to="/browse">
              {" "}
              <li className="hover:text-[#707AFE] cursor-pointer">Movies</li>
            </Link>

            <Link to="/browse/shows">
              <li className="hover:text-[#707AFE] cursor-pointer">Series</li>
            </Link>
          </ul>
        )}

        {user && (
          <div className="flex justify-between gap-5 items-center">
            <span
              onClick={handleShowProfile}
              className=" text-[#dadfff] flex  items-center cursor-pointer hover:text-white"
            >
              <i className="ri-user-2-fill text-[#dadfff] text-2xl"></i>{" "}
              {user.displayName}
              <i
                className={`${showProfile ? "ri-arrow-up-s-fill" : "ri-arrow-down-s-fill"} text-2xl`}
              ></i>
            </span>
            {showProfile && <ProfilePopup handleLogout={handleLogout} />}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
