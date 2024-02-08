import Image from "next/image";
import MessageNotification from './MessageNotification'
import logo from '/src/img/logo.svg';
import { GiAtom } from "react-icons/gi";

export default function Loginbanner() {
    return (
        <div className="flex-auto w-[40%] h-screen bg-gradient-to-br from-cyan-400 to-blue-500 relative flex">
            <img className="absolute bottom-0 h-full w-full" src="/img/backsvg.svg" alt="description"/>
            <div className="flex items-center h-1/6"> {/* Updated line */}
                <h2 className="p-20 text-3xl font-sans flex items-center"><GiAtom className="mr-5 scale-150"/>Proton School
                </h2>
            </div>
        </div>
    )
}