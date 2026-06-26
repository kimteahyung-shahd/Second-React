function Hire(){
    return(
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10 pb-10 bg-[#F5F9FD]">
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Inria Serif"}} className="text-[#06223F] text-2xl sm:text-3xl font-semibold">Hire Me</h1>
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Paprika"}} className="text-[#B7C5D3] text-3xl sm:text-4xl mt-2">FOR YOUR PROJECTS</h1>
            <div className="flex flex-col lg:flex-row items-center mt-10 gap-8">
                <img data-aos="fade-right" data-aos-duration="1000" data-aos-offsit="100" className="w-full max-w-[300px] sm:max-w-[380px] h-auto sm:h-[440px] object-contain" src="/person.a03fc27a.png" alt="" />
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-offsit="100" className="p-5 w-full max-w-md lg:w-[35%] h-fit mt-0 lg:mt-7 border-2 rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[130px] border border-[#06223F]">
                    <p className="text-[#06223F]">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
                    <button className="px-10 py-3 cursor-pointer font-semibold mt-7 bg-[#06223F] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[30px] border text-white">Hire Me</button>
                </div>
            </div>
        </section>
    )
}
export default Hire
