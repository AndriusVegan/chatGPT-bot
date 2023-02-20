"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37f]  h-screen flex flex-col items-center justify-center text-center">
      <Image
        className="rounded-full"
        src="https://imgs.search.brave.com/mz5tC-GFHG4Gb5H-kNsEL-tFB_GFoW4TfL9oMvFkl5M/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JRi5L/UHB4S0Nybkw0dWpZ/cEpHU3I2d0FBJnBp/ZD1BcGk"
        // src="https://links.papareact.com/216"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">Sign In to use ChatGPT</button>
    </div>
  );
}

export default Login;
