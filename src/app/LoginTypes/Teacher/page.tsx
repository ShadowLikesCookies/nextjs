import Image from "next/image";
import logo from '/src/img/logo.svg';

interface HomeProps {
    message: string;
    // Add types for other props here, if needed
}

export default function MessageNotification(props: HomeProps) {
    return (
        <div>Im a hobbyist developer. You think iv got time to make usefull login pages. Nah just go into the program <button className="border-white border-8 rounded-3xl text-white"> Button</button></div>
    )
}