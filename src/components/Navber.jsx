import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"

const Navber = () => {
  return (
    <section className='w-full bg-[red] pt-[90px] py-[20px] lg:px-0 px-4 fixed z-40'>
      <Container>
        <Flex className=" items-center lg:gap-0 gap-[20px]">
        <div className=" lg:w-[20%]">
            <img className='' src={logo} alt="" />
        </div>
        <div className=" lg:w-[50%] w-[20%]">
            <ul className=' flex lg:justify-end lg:gap-[50px] gap-[10px] '>
            <li><a className=' font-sans lg:font-bold lg:text-[20px] text-[12px] text-[#fff] hover:text-[#262626] duration-500 ease-in-out' href="#">Home</a></li>
            <li><a className=' font-sans lg:font-bold lg:text-[20px] text-[12px] text-[#fff] hover:text-[#262626] duration-500 ease-in-out' href="#">About</a></li>
            <li><a className=' font-sans lg:font-bold lg:text-[20px] text-[12px] text-[#fff] hover:text-[#262626] duration-500 ease-in-out' href="#">Services</a></li>
            <li><a className=' font-sans lg:font-bold lg:text-[20px] text-[12px] text-[#fff] hover:text-[#262626] duration-500 ease-in-out' href="#">Gallery</a></li>
            <li><a className=' font-sans lg:font-bold lg:text-[20px] text-[12px] text-[#fff] hover:text-[#262626] duration-500 ease-in-out' href="#">Blog</a></li>
            </ul>
        </div>
        <div className=" lg:w-[30%] lg:pl-[20px] pl-[130Px]">
            <a className=' lg:px-[30px] px-[5px] lg:py-[20px] border-2 border-[#fff] inline-block font-sans lg:font-bold lg:text-[20px] text-[10px] text-[#fff] rounded-lg hover:bg-black hover:text-[#fff] duration-500 ease-in-out' href="#">CONTACT</a>
        </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Navber
