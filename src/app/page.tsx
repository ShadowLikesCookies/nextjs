import Image from "next/image";
import MessageNotification from './MessageNotification'
import logo from '/src/img/logo.svg';


import TrueLogin from "@/app/TrueLogin";

export default function Home() {
    return (
        /**<MessageNotification message="You Have Mail, Make sure to read it"/> **\
         *
         */
        <>
            <TrueLogin/>
        </>

    )
}
