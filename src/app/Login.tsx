import Image from "next/image";
import MessageNotification from './MessageNotification'
import logo from '/src/img/logo.svg';
import LoginSections from "@/app/LoginSections";
import FullLoginSection from "@/app/FullLoginSection";

export default function Login() {
    return (
        <div className="flex w-[60%] h-screen bg-white">
            <div className="w-[65%] p-4  text-center ml-40 ">
                <div className="m-auto">
                    <h1 className="mt-[15vh] text-left text-black text-3xl font-bold font-sans">Welcome to Proton!</h1>
                    <h2 className=" text-left text-slate-700 text-1xl  font-sans">Choose an account type to continue!</h2>
                    <div className="bg-white">
                        <LoginSections/>
                    </div>
                </div>
            </div>
        </div>
    )
}