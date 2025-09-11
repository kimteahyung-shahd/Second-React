import { LuAlignLeft,LuContact } from "react-icons/lu";
import { RiHomeSmile2Line,RiServiceLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { MdOutlineMovieCreation } from "react-icons/md";
import { useState } from "react";


function Navbar (){
    const [openMenu,setOpenMenu] = useState(false);
    const [active,setActive]=useState("home")
    const linkClasses = (name: string) =>
        `p-2.5 rounded-full transition-all duration-300 ${
          active === name ? "bg-[#06223F] text-white" : "text-[#06223F]"
        }`;
    return(
        <nav>
            <div className="bg-white/40 cursor-pointer rounded-[5px] p-2 w-[50px] text-center fixed top-10 left-10 z-111">
                <LuAlignLeft onClick={()=>setOpenMenu(!openMenu)} className="text-3xl font-extrabold" />
            </div>
            {openMenu && (<div  data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full duration-100 fixed bottom-10 inset-x-0 mx-auto justify-center w-fit">
                <a href="#home" className={linkClasses("home")} onClick={()=>setActive("home")}>
                    <RiHomeSmile2Line className="text-xl" />
                </a>
                <a href="#skills" onClick={() => setActive("skills")} className={linkClasses("skills")}>
                    <CiUser className="text-xl" />
                </a>
                <a href="#Service" className={linkClasses("Service")} onClick={()=>setActive("Service")}>
                    <RiServiceLine  className="text-xl" />
                </a>
                <a href="#Projects" className={linkClasses("Projects")} onClick={()=>setActive("Projects")}>
                    <MdOutlineMovieCreation className="text-xl" />
                </a>
                <a className={linkClasses("Contect")} onClick={()=>setActive("Contect")} href="#Contect">
                    <LuContact className="text-xl" />
                </a>
            </div>)}

        </nav>
    )
}
export default Navbar