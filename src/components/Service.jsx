import React from 'react'
import Container from './Container'
import Flex from './Flex'
import service1 from "../assets/service1.png"

const Service = () => {
    return (
        <section className=' lg:px-0 px-4 lg:py-0 py-[10px]'>
            
                <div className="w-[100%] lg:flex lg:pb-0 pb-[10px]">
                    <div className="lg:w-[50%]  lg:pt-[100px] lg:pl-[150px] pl-[50px] lg:pb-0 pb-[10px]">
                        <h2 className=' font-sans font-bold lg:text-[52px] text-[22px]'>Our Services</h2>
                        <p className=' w-[68%] font-sans font-medium lg:text-[20px] text-[14px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className=" lg:w-[50%] relative">
                        <img src={service1} alt="" />
                        <div className=" after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099]"></div>
                        <div className=" absolute lg:top-[140px] top-[50px] lg:left-[110px] left-[30px]">
                            <h3 className=' font-sans font-bold lg:text-[30px] text-[#fff] pb-[20px]'>Modern natural oil and gas refineries.</h3>
                            <a href="#" className=' lg:px-[30px] px-[8px] lg:py-[10px] py-[5px] border-2 bg-[red] inline-block rounded-lg hover:bg-black duration-500 ease-in-out font-sans font-bold lg:text-[20px] text-[12px] text-[#fff]'> Larn More</a>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] lg:flex">
                <div className=" lg:w-[50%] relative lg:pb-0 pb-[10px]">
                        <img src={service1} alt="" />
                        <div className=" after:absolute after:contents-[''] after:top-0 after:left-0 lg:after:h-full after:h-[93%] after:w-full after:bg-[#00000099]"></div>
                        <div className=" absolute lg:top-[140px] top-[50px] lg:left-[110px] left-[30px]">
                            <h3 className=' font-sans font-bold lg:text-[30px] text-[#fff] pb-[20px]'>Supply of national industries.</h3>
                            <a href="#" className=' lg:px-[30px] px-[8px] lg:py-[10px] py-[5px] border-2 bg-[red] inline-block rounded-lg hover:bg-black duration-500 ease-in-out font-sans font-bold lg:text-[20px] text-[12px] text-[#fff]'> Larn More</a>
                        </div>
                    </div>
                    <div className=" lg:w-[50%] relative">
                        <img src={service1} alt="" />
                        <div className=" after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099]"></div>
                        <div className=" absolute lg:top-[140px] top-[50px] lg:left-[110px] left-[30px]">
                            <h3 className=' font-sans font-bold lg:text-[30px] text-[#fff] pb-[20px]'>National fuel distribution and supply.</h3>
                            <a href="#" className=' lg:px-[30px] px-[8px] lg:py-[10px] py-[5px] border-2 bg-[red] inline-block rounded-lg hover:bg-black duration-500 ease-in-out font-sans font-bold lg:text-[20px] text-[12px] text-[#fff]'> Larn More</a>
                        </div>
                    </div>
                </div>
           
        </section>
    )
}

export default Service
