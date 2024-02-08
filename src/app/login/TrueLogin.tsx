import Image from "next/image";
import MessageNotification from './MessageNotification'
import logo from '/src/img/logo.svg';
import Loginbanner from "@/app/login/LoginBanner";
import Login from "@/app/login/Login";






export default function TrueLogin() {
    return (
        <div className="flex w-full h-screen bg-white">
            <Loginbanner />
            <Login />
        </div>
    )
}