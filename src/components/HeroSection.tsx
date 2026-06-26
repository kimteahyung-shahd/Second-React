function HeroSection(){
    return(
        <main id="home" className="flex flex-col items-center px-4 pb-10 overflow-hidden sm:px-8 lg:flex-row lg:justify-between lg:items-end lg:px-0 lg:pb-0 lg:overflow-visible">
        <div className="order-2 mt-8 w-full flex items-end relative bottom-0 left-0 lg:order-none lg:mt-0 lg:w-auto lg:bottom-20 lg:left-[280px]">
            <div>
            <div data-aos="fade-down" data-aos-duration="500" data-aos-offsit="100">
                <h1 style={{fontFamily:"Inria Serif"}} className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Web Developer</h1>
                <button className="bg-white cursor-pointer text-md font-semibold px-[36px] mt-7 py-1.5 border-2 text-[#06223F] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[30px] border border-[#06223F] sm:ml-16 lg:ml-0 lg:translate-x-[200px]">Hire Me</button>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" data-aos-offsit="100" className="flex items-center text-[#06223F] my-6 sm:my-10">
                <h1 style={{fontFamily:"Paprika"}} className="text-3xl sm:text-4xl lg:text-5xl">8+</h1>
                <p className="ml-3 text-sm sm:ml-5 sm:text-base">Years of Experinse in Web <br />development</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="1500" data-aos-offsit="100" className="flex items-center text-[#06223F] lg:ml-7">
                <p className="text-right text-sm sm:text-base">Projects Worked in my<br /> career</p>
                <h1 style={{fontFamily:"Paprika"}} className="text-3xl ml-3 sm:text-4xl sm:ml-5 lg:text-5xl">20+</h1>
            </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offsit="1000" className="order-1 lg:order-none">
            <img className="relative z-100 mx-auto w-full max-w-[280px] h-auto max-h-[400px] object-contain sm:max-w-[350px] lg:mx-0 lg:max-w-none xl:w-[450px] lg:h-[590px] lg:left-[260px]" src="/person.png" alt="" />
        </div>
        <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-offsit="1000" className="hidden lg:block bg-[#BBD0F5] relative right-0 z-[-10] px-10">
            <h1 className="rotate-90 text-6xl font-bold top-[200px] left-[100px] relative text-[#EAF2FA]">JOHN <span className="text-[#06223F]">ALEX</span></h1>
        </div>
        </main>
    )
}
export default HeroSection
