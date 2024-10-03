import { IoIosArrowRoundForward } from "react-icons/io";
import GoogleSignin from "./component/Google";
import Logo from "./component/logo";
export default function Login() {
    return (
        <div className="flex h-screen w-full">
            <div className="md:w-96 w-full h-screen overflow-y-scroll scrollbar-hidden md:px-8 px-5 pt-8 pb-10">
                <Logo />
                <h1 className="text-3xl mt-12 md:mt-8">Sign in to your account</h1>

                <div className="md:w-80 w-full mt-6 ">
                    <GoogleSignin />
                </div>


            </div>
            <div className="flex-1 hidden md:block relative">
                <img className="w-full h-screen object-cover" src="/signinbg.webp" alt="Background" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                {/* Text Overlay */}
                <div className="absolute ml-20 max-w-96 inset-0 flex flex-col items-start justify-center">
                    <h1 className="text-4xl text-white font-bold">Recognize Your Skills and Experience Through RPL</h1>
                    <p className="text-light-gray text-lg mt-7">Unlock new opportunities by showcasing your existing knowledge and competencies, allowing you to gain recognition for what you’ve learned outside traditional education.</p>
                    <div className="flex items-center cursor-pointer text-blue-300  hover:text-blue-200 duration-200 ease-in transition-all mt-12">
                        <p className="text-xl underline text font-semibold">Home</p>
                        <IoIosArrowRoundForward className="w-8 h-8" />
                    </div>

                </div>
            </div>


        </div>
    )
}