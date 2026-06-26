import { FaCircle } from "react-icons/fa";
import {useRef , useState} from "react"

function Project (){
    const ItemRef = useRef<HTMLDivElement | null>(null); //typescipt
    const [activeIndex, setActiveIndex] = useState(0); 

    const GoToSlide = (index: number) => { //typescript
        if (ItemRef.current) {
            const fixedWidth = ItemRef.current.offsetWidth || 320;
            ItemRef.current.scrollTo({ left: index * fixedWidth, behavior: 'smooth' });
        }
      };
    return(
        <section id="Projects" className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10 pb-10 bg-[#F5F9FD]">
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Inria Serif"}} className="text-[#06223F] text-2xl sm:text-3xl font-semibold">Projects</h1>
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Paprika"}} className="text-[#B7C5D3] text-3xl sm:text-4xl mt-2">MY CREATION</h1>
            <div className="flex flex-col lg:flex-row mt-10 items-center lg:items-start gap-8">
                <img data-aos="fade-right" data-aos-duration="1000" data-aos-offsit="100" className="w-full max-w-[400px] lg:w-[600px] h-auto lg:h-[490px] object-contain" src="/person2.png" alt="" />
            <div className="w-full lg:w-auto">
                <div ref={ItemRef} className="ml-0 lg:ml-24 flex w-full max-w-[320px] mx-auto lg:mx-0 overflow-x-hidden">
                <div className="bg-white min-w-full sm:min-w-[320px] rounded-3xl p-5 border-b-8 border-[#f1f5f9] h-fit " data-aos="fade-left" data-aos-duration="1000" data-aos-offsit="100" >
                    <img className="w-full max-w-[280px] h-[160px] object-cover" src="/photo1.png" alt="" />
                    <h5 className="text-[#06223F] font-bold mt-3">Gym Website</h5>
                    <p className="font-bold text-[#B7C5D3] cursor-pointer text-right">Read More</p>
                </div>
                <div className="bg-white min-w-full sm:min-w-[320px] rounded-3xl p-5 border-b-8 border-[#f1f5f9] h-fit " data-aos="fade-left" data-aos-duration="1000" data-aos-offsit="100" >
                    <img className="w-full max-w-[280px] h-[160px] object-cover" src="/photo2.png" alt="" />
                    <h5 className="text-[#06223F] font-bold mt-3">Social Media web</h5>
                    <p className="font-bold text-[#B7C5D3] cursor-pointer text-right">Read More</p>
                </div>
                <div className="bg-white min-w-full sm:min-w-[320px] rounded-3xl p-5 border-b-8 border-[#f1f5f9] h-fit " data-aos="fade-left" data-aos-duration="1000" data-aos-offsit="100" >
                    <img className="w-full max-w-[280px] h-[160px] object-cover" src="/photo3.png" alt="" />
                    <h5 className="text-[#06223F] font-bold mt-3">Creative Website</h5>
                    <p className="font-bold text-[#B7C5D3] cursor-pointer text-right">Read More</p>
                </div>
                </div>
                <div className="flex justify-center space-x-2 mt-2 ml-0 lg:ml-24">
                    {[0, 1, 2].map((index) => (
                    <FaCircle key={index} onClick={() => { setActiveIndex(index); GoToSlide(index); }}
                                        className={`cursor-pointer text-sm ${
                                        activeIndex === index ? "text-[#06223F]" : "text-[#BFC8D3]"
                                }`}/>
                    ))}
                </div>
            </div>
            </div>
        </section>
)}
export default Project
