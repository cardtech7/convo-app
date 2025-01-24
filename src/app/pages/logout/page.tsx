import { ArrowLeft } from "lucide-react"

const Logout = () => {
  return (
    <main className = " min-h-screen flex flex-col ">
        <header className = " w-screen h-16 p-3 flex justify-center items-center ">
          <a href="/pages/main">
            <ArrowLeft className = "  "/>
          </a>

          <h1 className = " flex justify-center w-screen font-semibold ">
            Logout
          </h1>
        </header>

        <section className = " flex-1 bg-background_chat p-5 ">
          <h1 className = " font-medium "> 
            Content Here
          </h1>
        </section>
    </main>
  )
}

export default Logout