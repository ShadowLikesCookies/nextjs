import Image from "next/image";
import logo from '/src/img/logo.svg';

interface HomeProps {
    message: string;
    // Add types for other props here, if needed
}

export default function MessageNotification(props: HomeProps) {
    return (
        <div className = "bg-white flex justify-center items-center h-screen ">
            <div className = "p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <img className = "rounded-full h-12 w-12 flex-shrink-0" src="/img/logo.png" alt="ChitChat Logo"/>
                <div className = "ml-4">
                    <div className = "text-xl font-medium text-white">Messenger</div>
                    <p className = "white">{props.message}</p>
                </div>
            </div>
        </div>
    )
}