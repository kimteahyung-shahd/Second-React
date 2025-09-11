function HeroSection(){
    return(
        <main id="home" className="flex justify-between">
        <div className="flex items-end relative bottom-20 left-[280px]">
            <div>
            <div  data-aos="fade-down" data-aos-duration="500" data-aos-offsit="100">
                <h1 style={{fontFamily:"Inria Serif"}} className="text-5xl font-semibold">Web Developer</h1>
                <button className="bg-white cursor-pointer text-md font-semibold px-[36px] mt-7 translate-x-[200px] py-1.5 border-2 text-[#06223F] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[30px] border border-[#06223F]">Hire Me</button>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" data-aos-offsit="100" className="flex items-center text-[#06223F] my-10">
                <h1 style={{fontFamily:"Paprika"}} className="text-5xl">8+</h1>
                <p className=" ml-5">Years of Experinse in Web <br />development</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="1500" data-aos-offsit="100" className="flex items-center text-[#06223F] ml-7">
                <p className=" text-right">Projects Worked in my<br /> career</p>
                <h1 style={{fontFamily:"Paprika"}} className="text-5xl ml-5">20+</h1>
            </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offsit="1000">
            <img className="xl:w-[450px] h-[590px] relative z-100 left-[260px]" src="public/person.png" alt="" />
        </div>
        <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-offsit="1000" className="bg-[#BBD0F5] relative right-0 z-[-10] px-10">
            <h1 className="rotate-90 text-6xl font-bold top-[200px] left-[100px] relative text-[#EAF2FA]">JOHN <span className="text-[#06223F]">ALEX</span></h1>
        </div>
        </main>
    )
}
export default HeroSection