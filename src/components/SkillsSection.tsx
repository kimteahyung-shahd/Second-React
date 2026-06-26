import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


function SkillsSection(){
    const Title = [{title:"Figma",img:"/figma.png"},{title:"Node js",img:"/node.png"},{title:"Adobe Photoshop",img:"/ps.png"},{title:"React",img:"/react.png"},{title:"Sketch",img:"/sketch.png"},{title:"Python",img:"/python.png"}]
    const [Open,SetOpen]= useState(false);
    const [select, setSelect] = useState<number | null>(null);
    return(
        <section id="skills" className="bg-[#F5F9FD] px-4 sm:px-8 md:px-16 lg:px-24 py-10">
            {Open && select !== null && (
            <div className="fixed flex inset-0 z-50 items-center justify-center bg-[#FCFDFE]/70 px-4">
                <div className="border border-[#E6EBF2] w-full max-w-[380px] border-2 rounded-[7px] bg-white p-5">
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
                    <button onClick={()=>SetOpen(false)} className="bg-white cursor-pointer text-md font-semibold px-[36px] mt-3 ml-auto block py-1.5 border-2 text-[#06223F] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[30px] border border-[#06223F]">Close</button>
                </div>
            </div>           

)}
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Inria Serif"}} className="text-[#06223F] text-2xl sm:text-3xl font-semibold">Skills</h1>
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Paprika"}} className="text-[#B7C5D3] text-3xl sm:text-4xl mt-2">MY TOP SKILLS</h1>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offsit="100" className="flex flex-col md:flex-row justify-center items-stretch md:items-center mt-5 gap-2 md:gap-0">
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-4 md:p-5 w-full md:w-auto max-w-md mx-auto md:mx-0 items-center justify-between">
                    <div className="flex items-center min-w-0">
                        <img src="/figma.png" className="w-[40px] h-[40px] shrink-0 transition duration-150" alt="" />
                        <div className="ml-3 sm:ml-5 min-w-0">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Figma</h3>
                            <p className="italic mt-1 text-sm sm:text-base truncate sm:whitespace-normal">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(0);
                    }} className="text-[#06223F] font-semibold ml-3 shrink-0" />
                </div>
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-4 md:p-5 w-full md:w-auto max-w-md mx-auto md:mx-0 items-center justify-between">
                    <div className="flex items-center min-w-0">
                        <img src="/node.png" className="w-[40px] h-[40px] shrink-0 transition duration-150" alt="" />
                        <div className="ml-3 sm:ml-5 min-w-0">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Node js</h3>
                            <p className="italic mt-1 text-sm sm:text-base truncate sm:whitespace-normal">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(1);}} className="text-[#06223F] font-semibold ml-3 shrink-0" />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offsit="100" className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-2 md:gap-0">
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-4 md:p-5 w-full md:w-auto max-w-md mx-auto md:mx-0 items-center justify-between">
                    <div className="flex items-center min-w-0">
                        <img src="/ps.png" className="w-[40px] h-[40px] shrink-0 transition duration-150" alt="" />
                        <div className="ml-3 sm:ml-5 min-w-0">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Adobe Photoshop</h3>
                            <p className="italic mt-1 text-sm sm:text-base truncate sm:whitespace-normal">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(2);}}  className="text-[#06223F] font-semibold ml-3 shrink-0" />
                </div>
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-4 md:p-5 w-full md:w-auto max-w-md mx-auto md:mx-0 items-center justify-between">
                    <div className="flex items-center min-w-0">
                        <img src="/react.png" className="w-[40px] h-[40px] shrink-0 transition duration-150" alt="" />
                        <div className="ml-3 sm:ml-5 min-w-0">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">React js</h3>
                            <p className="italic mt-1 text-sm sm:text-base truncate sm:whitespace-normal">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(3);}}  className="text-[#06223F] font-semibold ml-3 shrink-0" />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offsit="100" className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-2 md:gap-0">
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-4 md:p-5 w-full md:w-auto max-w-md mx-auto md:mx-0 items-center justify-between">
                    <div className="flex items-center min-w-0">
                        <img src="/sketch.png" className="w-[40px] h-[40px] shrink-0 transition duration-150" alt="" />
                        <div className="ml-3 sm:ml-5 min-w-0">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Sketch</h3>
                            <p className="italic mt-1 text-sm sm:text-base truncate sm:whitespace-normal">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(4);}}  className="text-[#06223F] font-semibold ml-3 shrink-0" />
                </div>
                <div className="border hover m-2 border-[#E6EBF2] flex border-2 cursor-pointer rounded-[7px] bg-white p-4 md:p-5 w-full md:w-auto max-w-md mx-auto md:mx-0 items-center justify-between">
                    <div className="flex items-center min-w-0">
                        <img src="/python.png" className="w-[40px] h-[40px] shrink-0 transition duration-150" alt="" />
                        <div className="ml-3 sm:ml-5 min-w-0">
                            <h3 style={{fontFamily:"Paprika"}} className="text-[#06223F] font-semibold">Python</h3>
                            <p className="italic mt-1 text-sm sm:text-base truncate sm:whitespace-normal">Lorem ipsum text dummy</p>
                        </div>
                    </div>
                    <FaArrowRight onClick={()=>{SetOpen(true);
                                                setSelect(5);}}  className="text-[#06223F] font-semibold ml-3 shrink-0" />
                </div>
            </div>
        </section>
    )
}
export default SkillsSection
