import { SlEnvolope } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";


function Contact(){
    return(
        <section id="Contect" className="px-24 py-10 bg-[#06223F]">
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Inria Serif"}} className="text-white text-3xl font-semibold">Contect Me</h1>
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Paprika"}} className="text-[#B7C5D3] text-4xl mt-2">GET IN TOUCH</h1>
            <div className="flex mt-10">
                <div data-aos="fade-up" data-aos-duration="800" data-aos-offsit="100" className="w-[50%]">
                    <input type="text" className="border focus:outline-none border-[#475569] w-[100%] my-2 bg-[#06223F] rounded-sm p-2 block text-white placeholder-[#475569]" placeholder="Name" />
                    <input type="email" className="border focus:outline-none border-[#475569] w-[100%] my-4 bg-[#06223F] rounded-sm p-2 block text-white placeholder-[#475569]" placeholder="Email Id" />
                    <textarea className="border focus:outline-none border-[#475569] w-[100%] my-2 bg-[#06223F] rounded-sm p-2 text-white placeholder-[#475569] block h-[200px]" placeholder="Message" ></textarea>
                    <button className="px-10 py-2 cursor-pointer font-semibold mt-4 bg-white rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[30px] border text-[#06223F]">Submit</button>
                </div>
                <div className="text-md ml-10">
                    <div data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" className="flex text-white items-center my-2">
                        <SlEnvolope className="text-4xl" />
                        <a className="ml-2" href="mailto:codeaprogram@gmail.com">codeaprogram@gmail.com</a>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="100" data-aos-duration="800" data-aos-offsit="100" className="flex text-white items-center my-3">
                        <MdOutlinePhone className="text-4xl" />
                        <a className="ml-2" href="https://wa.me/1234567890">+91 1234 56778</a>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="800" data-aos-offsit="100" className="flex text-white items-center my-2">
                        <IoLogoInstagram className="text-4xl" />
                        <a className="ml-2" href="https://www.instagram.com/codeaprogram/">codeaprogram</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact