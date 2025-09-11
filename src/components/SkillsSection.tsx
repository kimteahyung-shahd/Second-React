import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


function SkillsSection(){
    const Title = [{title:"Figma",img:"/public/figma.png"},{title:"Node js",img:"/public/node.png"},{title:"Adobe Photoshop",img:"/public/ps.png"},{title:"React",img:"/public/react.png"},{title:"Sketch",img:"/public/sketch.png"},{title:"Python",img:"/public/python.png"}]
    const [Open,SetOpen]= useState(false);
    const [select, setSelect] = useState<number | null>(null);
    return(
        <section id="skills" className="bg-[#F5F9FD] px-24 py-10">
            {Open && select !== null && (
            <div className="fixed flex inset-0 z-50 items-center bg-[#FCFDFE]/70">
                <div className="border border-[#E6EBF2] inset-0 mx-auto border-2 xl:w-[380px] rounded-[7px] bg-white p-5">
                        <div className="flex items-center">
                            <img src={Title[select].img} className="w-[40px] h-[40px]" alt="" />
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] ml-2 font-semibold">{Title[select].title}</h3>
                        </div>                                        
                    <ul className="list-decimal p-5 text-sm text-gray-700">
                        <li className="my-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li className="my-1">Lorem ipsum dolor sit, ame.</li>
                        <li className="my-1">Lorem ipsum dolor sit, amet consectetur</li>
                        <li className="my-1">Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
                        <li className="my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
                    </ul>
                    <button onClick={()=>SetOpen(false)} className="bg-white cursor-pointer text-md font-semibold px-[36px] mt-3 translate-x-[200px] py-1.5 border-2 text-[#06223F] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[30px] border border-[#06223F]">Close</button>
                </div>
            </div>           

)}
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Inria Serif"}} className="text-[#06223F] text-3xl font-semibold">Skills</h1>
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Paprika"}} className="text-[#B7C5D3] text-4xl mt-2">MY TOP SKILLS</h1>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offsit="100" className="flex justify-center mt-5">
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-5">
                    <div className="flex items-center">
                        <img src="/public/figma.png" className="w-[40px] h-[40px] transition duration-150" alt="" />
                        <div className="ml-5">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Figma</h3>
                            <p className="italic mt-1">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(0);
                    }} className="text-[#06223F] font-semibold ml-20" />
                </div>
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-5">
                    <div className="flex items-center">
                        <img src="/public/node.png" className="w-[40px] h-[40px] transition duration-150" alt="" />
                        <div className="ml-5">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Node js</h3>
                            <p className="italic mt-1">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(1);}} className="text-[#06223F] font-semibold ml-10" />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offsit="100" className="flex justify-center">
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-5">
                    <div className="flex items-center">
                        <img src="/public/ps.png" className="w-[40px] h-[40px] transition duration-150" alt="" />
                        <div className="ml-5">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Adobe Photoshop</h3>
                            <p className="italic mt-1">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(2);}}  className="text-[#06223F] font-semibold ml-20" />
                </div>
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-5">
                    <div className="flex items-center">
                        <img src="/public/react.png" className="w-[40px] h-[40px] transition duration-150" alt="" />
                        <div className="ml-5">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">React js</h3>
                            <p className="italic mt-1">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(3);}}  className="text-[#06223F] font-semibold ml-10" />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offsit="100" className="flex justify-center">
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-5">
                    <div className="flex items-center">
                        <img src="/public/sketch.png" className="w-[40px] h-[40px] transition duration-150" alt="" />
                        <div className="ml-5">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Sketch</h3>
                            <p className="italic mt-1">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(4);}}  className="text-[#06223F] font-semibold ml-20" />
                </div>
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-5">
                    <div className="flex items-center">
                        <img src="/public/python.png" className="w-[40px] h-[40px] transition duration-150" alt="" />
                        <div className="ml-5">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Python</h3>
                            <p className="italic mt-1">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(5);}}  className="text-[#06223F] font-semibold ml-10" />
                </div>
            </div>
        </section>
    )
}
export default SkillsSection