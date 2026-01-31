import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowProfile } from "../utils/slices";
const ProfilePopup = ({ handleLogout }) => {
  const dispatch = useDispatch();

  const handlePofilePopup = () => {
    dispatch(toggleShowProfile());
  };

  return (
    <div className=" gap-5 z-9999  p-6! flex flex-col bg-[#1a1a1a80] backdrop-blur-md absolute top-15 right-2 w-40 rounded shadow-lg">
      <Link to="/browse/watchlist">
        <span>
          <button
            onClick={handlePofilePopup}
            className="p-1! cursor-pointer w-full text-center hover:bg-[#6c006e] bg-[#8b0098] text-[#ffffff] border rounded"
          >
            <i className="ri-bookmark-line text-2xl"></i>
            Watchlist
          </button>
        </span>
      </Link>

      <span>
        <button
          onClick={handleLogout}
          className="p-1! w-full text-center cursor-pointer hover:bg-[#6e0000] bg-[#890000] text-[#ffffff] border rounded"
        >
          <i className="ri-logout-box-line text-2xl"></i>
          LogOut
        </button>
      </span>
    </div>
  );
};

export default ProfilePopup;
