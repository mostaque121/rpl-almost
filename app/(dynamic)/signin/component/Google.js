'use client'
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignin = () => {
    return (
        <div>
            <button
                onClick={() => signIn('google')}  // Pass a function that calls signIn
                className="flex items-center shadow-md justify-center w-full h-14 md:h-12 bg-gray-100 hover:bg-light-gray-hover active:bg-light-gray-active rounded-lg hover:bg-gray-200 transition duration-300"
            >
                <FcGoogle className="mr-3 text-2xl" />
                <span className="font-medium">Continue with Google</span>
            </button>
        </div>
    );
};

export default GoogleSignin;
