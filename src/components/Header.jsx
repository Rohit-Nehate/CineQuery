import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, toggleShowProfile } from "../utils/slices";
import { getWatchlist } from "../hooks/useWatchList";
import { setWatchlist } from "../utils/moviesSlice";
import ProfilePopup from "./ProfilePopup";
import { CloudHail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userSlice.user);
  const showProfile = useSelector((store) => store.userSlice.showProfile);
  const path = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  const handleShowProfile = () => {
    dispatch(toggleShowProfile());
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path.pathname]);

  return (
    <>
      <motion.div
      initial={{opacity:0, y: -10}}
      animate={{opacity: 1, y:0}}
      transition={{duration: .5, ease: 'easeOut'}}
      
      className="z-60 absolute bg-gradient-to-b flex px-4! py-3! md:p-10! items-center justify-between from-black h-auto md:h-15 w-full top-0 left-0">
        <div className="flex justify-center items-center gap-4 md:gap-10">
          <Link to='/browse'>
         
          <img src="/images/logo.png" alt="logo" className="w-32 md:w-60 " />
 </Link>
          {user && (
            <ul className="text-white hidden md:flex gap-15 text-x">
              <Link to="/browse">
                {" "}
                <li className="hover:text-[#707AFE] cursor-pointer font-semibold tracking-wide">
                  MOVIES
                </li>
              </Link>

              <Link to="/browse/shows">
                <li className="hover:text-[#707AFE] cursor-pointer font-semibold tracking-wide">
                  SERIES
                </li>
              </Link>
            </ul>
          )}
        </div>

        {user && (
          <>
            {/* Desktop right side */}
            <div className="hidden md:flex justify-between gap-5 items-center">
              <Link to={`${path.pathname !== "/search" ? "/search" : "/browse"}`}>
                <span className="text-white  text-x">
                  <button
                    className="
      px-4! py-2!
      flex items-center gap-2
      rounded-full
      text-sm font-semibold tracking-wide
      text-white
      bg-gradient-to-r from-[#3392FB] to-[#1f6fe5]
      hover:from-[#1f6fe5] hover:to-[#00418b]
      active:scale-95
      transition-all duration-200
      shadow-md hover:shadow-lg
      cursor-pointer
    "
                  >
                    <i
                      className={`text-lg ${
                        path.pathname !== "/search"
                          ? "ri-search-ai-line"
                          : "ri-home-4-line"
                      }`}
                    />
                    {path.pathname !== "/search" ? "SEARCH" : "BROWSE"}
                  </button>
                </span>
              </Link>
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

            {/* Mobile hamburger button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white text-2xl cursor-pointer p-2!"
            >
              <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
            </button>
          </>
        )}
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && user && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-14 left-0 w-full z-[999] bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-5! gap-4">
              <Link to="/browse" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-white text-lg font-semibold tracking-wide hover:text-[#707AFE] flex items-center gap-3">
                  <i className="ri-movie-2-line text-xl"></i>
                  MOVIES
                </span>
              </Link>

              <Link to="/browse/shows" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-white text-lg font-semibold tracking-wide hover:text-[#707AFE] flex items-center gap-3">
                  <i className="ri-tv-line text-xl"></i>
                  SERIES
                </span>
              </Link>

              <div className="border-t border-white/10 my-1"></div>

              <Link
                to={`${path.pathname !== "/search" ? "/search" : "/browse"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-white text-lg font-semibold tracking-wide hover:text-[#3392FB] flex items-center gap-3">
                  <i
                    className={`text-xl ${
                      path.pathname !== "/search"
                        ? "ri-search-ai-line"
                        : "ri-home-4-line"
                    }`}
                  />
                  {path.pathname !== "/search" ? "SEARCH" : "BROWSE"}
                </span>
              </Link>

              <Link to="/browse/watchlist" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-white text-lg font-semibold tracking-wide hover:text-[#8b0098] flex items-center gap-3">
                  <i className="ri-bookmark-line text-xl"></i>
                  WATCHLIST
                </span>
              </Link>

              <div className="border-t border-white/10 my-1"></div>

              <div className="flex items-center justify-between">
                <span className="text-[#dadfff] flex items-center gap-2">
                  <i className="ri-user-2-fill text-xl"></i>
                  {user.displayName}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4! py-2! cursor-pointer text-sm font-semibold bg-[#890000] hover:bg-[#6e0000] text-white rounded-lg transition-colors"
                >
                  <i className="ri-logout-box-line mr-1!"></i>
                  LOGOUT
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
