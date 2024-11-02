import React from 'react'
import bannerr from "../assets/banner.png"

const Banner = () => {
  return (
    <section className=' pt-[150px]'>
        <div className="relative ">
        <img src={bannerr} alt="" />
     <div className=" after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099]">
        
     </div>
       <div className=" absolute lg:top-[30%] top-[15%] lg:left-[15%] left-[5%]">
       <h1 className=' lg:w-[60%] font-sans font-bold lg:text-[60px] text-[#fff] lg:pb-[30px] pb-[10px]'>We exist since 1975 on the oil and gas industry.</h1>
       <a href="#" className=' lg:px-[30px] px-[10px] lg:py-[10px] border-2 bg-[red] inline-block rounded-lg hover:bg-black duration-500 ease-in-out font-sans font-bold lg:text-[20px] text-[12px] text-[#fff]'> Larn More</a>
       </div>
        </div>
    
   
    </section>
  )
}

export default Banner
