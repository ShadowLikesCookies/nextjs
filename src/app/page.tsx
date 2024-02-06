import Image from "next/image";
import logo from '/src/img/logo.svg';

export default function Home() {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="rounded-[300px] w-12" src="/img/logo.png" alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>

    )
}
