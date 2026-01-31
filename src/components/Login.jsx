import { loginValidation } from "../utils/loginValidation";
import Header from "./Header";
import { useState, useRef } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useMemo } from "react";
import { motion } from "motion/react";

function Background() {
  const texture = useLoader(TextureLoader, "/images/bg-image2.png");
  const { camera, size } = useThree();

  const scale = useMemo(() => {
    const distance = Math.abs(camera.position.z); // assuming plane at z = 0
    const vFov = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFov / 2) * distance;
    const width = height * (size.width / size.height);

    return [width, height, 1];
  }, [camera, size]);

  return (
    <mesh position={[0, 0, 0]} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

const Login = () => {
  // use refs
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  //use states
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  //use effect for auth change handeler

  //handeler to show password

  const showPasswordHandeler = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    setIsLogin(!isLogin);
  };

  //login button handeler
  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = loginValidation(
      emailRef.current.value,
      passwordRef.current.value,
    );
    setErrMessage(message);

    if (message) return;

    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
  };

  return (
    <div className="login w-screen bg-[url(images/bg-image.png)] h-screen flex justify-center items-center bg-cover bg-center text-black">
      <Header />

      <motion.div
      
      initial={{opacity: 0, y:20}}
      animate={{opacity: 1, y:0}}
      transition={{duration: .5, ease: 'easeIn'}}
      
      className="z-50 login-container backdrop-blur-md  p-10! flex gap-10 flex-col text-white bg-[#000000bf] w-[80%] sm:w-[25%] rounded-lg h-auto">
        <h1 className="text-5xl font-bold">{isLogin ? "Login" : "Register"}</h1>

        <div className="login-section rounded-lg text-white">
          <form className="w-full flex gap-8 flex-col space-y-4">
            {!isLogin && (
              <input
                ref={nameRef}
                type="text"
                className="w-full block p-4! border bg-[#292929cf] text-white"
                placeholder="Full Name"
              />
            )}

            <input
              ref={emailRef}
              type="text"
              className="w-full block p-4! border bg-[#292929cf] text-white"
              placeholder="Email"
            />

            <span className="w-full block border bg-[#292929cf] text-white relative">
              <input
                autoComplete="password"
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                className="w-full block p-4! border bg-[#292929cf] text-white"
                placeholder="Password"
              />

              <i
                title={showPassword ? "Show Password" : "Hide Password"}
                onClick={showPasswordHandeler}
                className={`${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-2xl absolute right-5 top-[25%] cursor-pointer`}
              ></i>
            </span>
            {errMessage && (
              <p className="text-red-700 font-bold">{errMessage}</p>
            )}

            <button
              className="bg-[#147ff8] cursor-pointer hover:bg-[#045ec5] text-white p-4! rounded-lg"
              onClick={handleButtonClick}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div className="signupNow mt-5!">
            {isLogin ? "New to CineQuery? " : "Aready have an account? "}

            <b className="underline cursor-pointer" onClick={handleRegister}>
              {isLogin ? "Register" : "Login"}
            </b>
          </div>
        </div>
      </motion.div>

      <Canvas style={{ position: "fixed", inset: 0, zIndex: 10 }}>
        <Background />
        <EffectComposer>
          <Fluid
            strength={0.9}
            radius={0.18}
            rainbow={true}
            showBackground={true}
            blend={2}
            intensity={0.8}
            force={0.9}
            distortion={1.2}
            swirl={4}
            densityDissipation={0.85}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Login;
