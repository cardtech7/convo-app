import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    // Header Component for menu and search
    <nav className = " w-screen h-20 flex justify-center items-end pb-4 gap-3 pl-1 pr-1  bg-background_main ">
        {/* menu button */}
        <button className = "  ">
        <Image 
        src={"/image/button/menu.png"} 
        alt="menu" 
        width={35} 
        height={35}
        />
        </button>

        {/* search input */}
        <input 
        type = " text " 
        name = " Searchbar " 
        id = " searchBar " 
        placeholder = " Search " 
        className = " w-72 text-Text_Secondary rounded-full pl-2 relative left-2 "
        />
        <Image
        src = {"/image/button/searchbtn.png"}
        alt = " Search "
        width = {20}
        height = {10}
        className = " h-5 relative right-12 "
        />
        
        {/* Add chat button */}
        <button className = " relative right-5  ">
        <Image
        src = {"/image/button/Addbutton.png"}
        alt = " addButton "
        width = {35}
        height = {35}
        />
        </button>
    </nav>
    )
}

export default Header