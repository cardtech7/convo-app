import Link from "next/link"
import Image from "next/image"

const Main = () => {
  return (
    <main className="  pt-10 bg-background_chat h-screen w-screen">
      
        <div className = " grid justify-center ">
          <Image
            src="/image/logo.png"
            alt=""
            width={300}
            height={300}
            className = "  "
          />
        </div>

        <div className="   ">
          <h1 className=" justify-center flex font-sans text-2xl font-bold text-Text_Primary ">
            Welcome To Convo App
          </h1>
          <p className = " flex justify-center w-screen text-Text_Secondary text-sm p-3 ">
          &quot;Convo is a simple, reliable messaging app 
            that makes staying connected effortless and 
            seamless - Chat smarter with Convo, share it 
            with friends and keep the conversation flowing 
            effortlessly!&quot;
          </p>
        </div>

        <div className=" flex justify-center mt-20 ">
          <div className = " w-48 h-10 rounded-full flex justify-center items-center bg-background_main  ">
            <Link href = "/pages/login " className = " text-Text_Primary ">
              Let&apos;s Get Started
            </Link>
          </div>
        </div>
    </main>
  )
}

export default Main