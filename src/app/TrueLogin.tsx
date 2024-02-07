import Image from "next/image";
import MessageNotification from './MessageNotification'
import logo from '/src/img/logo.svg';
import Loginbanner from "@/app/LoginBanner";
import Login from "@/app/Login";






export default function TrueLogin() {
    return (
        <div className="flex w-full h-screen bg-white">
            <Loginbanner />
            <Login />
        </div>
    )
}