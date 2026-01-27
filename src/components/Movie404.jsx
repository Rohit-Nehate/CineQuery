import React from "react";
import { Film, Home, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Movie404 = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center text-white font-sans selection:bg-red-600 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 opacity-20 pointer-events-none animate-grain bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')]"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Icon */}
        <div className="mb-6 relative group">
          <div className="absolute inset-0 bg-red-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <Film className="w-24 h-24 text-red-600 animate-pulse-slow" />
        </div>

        {/* Glitchy 404 Text */}
        <h1 className="text-9xl font-black tracking-tighter mb-2 relative">
          <span className="relative inline-block animate-flicker">4</span>
          <span className="relative inline-block animate-flicker delay-75 text-red-600">
            0
          </span>
          <span className="relative inline-block animate-flicker delay-150">
            4
          </span>
        </h1>

        {/* Thematic Message */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-4">
          Plot Hole Detected
        </h2>

        <p className="text-gray-400 max-w-md text-lg mb-8 leading-relaxed">
          Cut! The scene you're looking for didn't make the final edit. It might
          have been deleted by the director.
        </p>
        <Link to="/browse">
          <div className="group flex items-center mt-5! justify-center gap-2 px-8! py-3! rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300">
            <Home className="w-4 h-4" />
            <span>GO TO BROWSE</span>
          </div>
        </Link>
      </div>

      {/* --- Footer Decoration --- */}
      <div className="absolute bottom-8 text-gray-600 text-xs tracking-[0.2em] animate-pulse">
        ERROR_CODE: MISSING_REEL
      </div>

      <style jsx>{`
        @keyframes grain {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -5%);
          }
          20% {
            transform: translate(-10%, 5%);
          }
          30% {
            transform: translate(5%, -10%);
          }
          40% {
            transform: translate(-5%, 15%);
          }
          50% {
            transform: translate(-10%, 5%);
          }
          60% {
            transform: translate(15%, 0);
          }
          70% {
            transform: translate(0, 10%);
          }
          80% {
            transform: translate(-15%, 0);
          }
          90% {
            transform: translate(10%, 5%);
          }
        }

        @keyframes flicker {
          0%,
          19.999%,
          22%,
          62.999%,
          64%,
          64.999%,
          70%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          20%,
          21.999%,
          63%,
          63.999%,
          65%,
          69.999% {
            opacity: 0.4;
            transform: scale(0.98);
          }
        }

        .animate-grain {
          animation: grain 8s steps(10) infinite;
        }

        .animate-flicker {
          animation: flicker 4s infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Movie404;
