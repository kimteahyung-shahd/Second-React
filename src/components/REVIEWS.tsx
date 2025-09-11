import { FaCircle } from "react-icons/fa";
import { useState , useRef } from "react";


function REVIEWS(){
    const reviews =[{title:"JOHN DOE",img:"/circleperson.png"},
                    {title:"Tom Alex",img:"/circleperson2.png"},
                    {title:"Johnny",img:"/circleperson3.png"},
                    {title:"ROBBIN",img:"/circleperson4.png"},
                    {title:"JOHN DOE",img:"/circleperson.png"}]
                    
    const [activeIndex,setActiveIndex]=useState(0);
    const MoveRef = useRef<(HTMLDivElement | null)[]>([]);
    return(
        <section className="px-24 pt-10 h-[520px] overflow-hidden">
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Inria Serif"}} className="text-[#06223F] text-3xl font-semibold">Testimonials</h1>
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Paprika"}} className="text-[#B7C5D3] text-4xl mt-2">MY CLIENT REVIEWS</h1>
            <div className="flex justify-center ">
            <div className="mt-10 overflow-y-hidden">

            {reviews.map((review, index) => (
                <div
                    key={index}
                     ref={(el) => { MoveRef.current[index] = el; }}
                    className={`duration-500 transition-transform mx-auto px-8 h-[200px] py-10 mb-10 rounded-2xl flex justify-center items-center 
                    ${activeIndex === index ? "bg-[#F5F9FD] blur-0 w-[70%]" : "bg-[#f1f5f9] blur-sm opacity-60 w-[60%]"}`
                    }
                    style={{
                        transform: `translateY(-${activeIndex * 230}px)`,
                    }}
                >
                    <img className="h-24 w-24 mr-5" src={review.img} alt="" />
                    <div>
                        <p className="text-md">“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”</p>
                        <h6 className="font-semibold mt-10" style={{fontFamily:"Paprika"}}>{review.title}</h6>
                    </div>
                </div>
            ))}
            </div>
            <div className="relative right-[130px] top-[200px]">
                    {[0, 1, 2,3].map((index) => (
                    <FaCircle key={index} onClick={() => { setActiveIndex(index);}}
                                        className={`cursor-pointer text-sm my-1 ${
                                        activeIndex === index ? "text-[#06223F]" : "text-[#BFC8D3]"
                                }`}/>
                    ))}
                </div>

            </div>
        </section>
    )
}
export default REVIEWS