function Service (){
    return(
        <section id="Service" className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Inria Serif"}} className="text-[#06223F] text-2xl sm:text-3xl font-semibold">Services</h1>
            <h1 data-aos="fade-down" data-aos-duration="800" data-aos-offsit="100" style={{fontFamily:"Paprika"}} className="text-[#B7C5D3] text-3xl sm:text-4xl mt-2">WHAT I OFFER</h1>
            <div className="flex flex-col lg:flex-row justify-center group mt-10 gap-5 lg:gap-0">
                <div data-aos="fade-up" data-aos-duration="800" data-aos-offsit="100" id="blur1" className="group-hover:blur-sm hover:!blur-none transition duration-300 border w-full xl:w-[33%] p-7 rounded-[10px] bg-[#F5F9FD] border-[#E6EBF2] border-2 text-center">
                    <img className="mx-auto" src="/webDevelopment.png" alt="" />
                    <h2 style={{fontFamily:"Paprika"}} className="my-3 font-semibold text-[#253D57] text-xl ">Web Development</h2>
                    <p className="leading-7 text-[#06223F] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-offsit="100" id="blur2" className="group-hover:blur-sm hover:!blur-none transition duration-300 border w-full xl:w-[33%] p-7 lg:mx-5 rounded-[10px] bg-[#F5F9FD] border-[#E6EBF2] border-2 text-center">
                    <img className="mx-auto" src="/ui.png" alt="" />
                    <h2 style={{fontFamily:"Paprika"}} className="my-3 font-semibold text-[#253D57] text-xl ">ui / ux DESIGNING                    </h2>
                    <p className="leading-7 text-[#06223F] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-offsit="100" id="blur3" className="group-hover:blur-sm hover:!blur-none transition duration-300 border w-full xl:w-[33%] p-7 rounded-[10px] bg-[#F5F9FD] border-[#E6EBF2] border-2 text-center">
                    <img className="mx-auto" src="/ph2.png" alt="" />
                    <h2 style={{fontFamily:"Paprika"}} className="my-3 font-semibold text-[#253D57] text-xl ">PhotoShop Editing                    </h2>
                    <p className="leading-7 text-[#06223F] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
                </div>
            </div>
        </section>
    )
}
export default Service
