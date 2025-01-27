import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    // Footer for better page routing
    <footer className = " w-screen h-14 flex gap-32 justify-center bg-background_chat ">
        <Link href = " /pages/main " className = " flex flex-col justify-center items-center ">
        <Image
            src = {"/image/button/chatbtn.png"}
            alt = " chatbtn "
            width = {30}
            height = {30}
        />
        <h1 className = " text-sm text-Text_Primary font-semibold ">
            Chats
        </h1>
        </Link>
        <Link href = " main/globalchat " className = " flex flex-col justify-center items-center ">
        <Image
            src = {"/image/button/globalbtn.png"}
            alt = " /globalbtn "
            width = {30}
            height = {30}
        />
        <h1 className = " text-Text_Primary text-sm font-semibold ">
            Group
        </h1>
        </Link>

    </footer>
    )
}

export default Footer