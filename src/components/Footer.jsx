import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagramSquare} from "react-icons/fa";
import cert1 from "../assets/cert1.png"
import cert2 from "../assets/cert2.png"

const Footer = () => {
  return (
    <section className=' bg-[#1a1919] lg:px-0 px-4 lg:py-0 py-[30px]'>
      <Container>
        <Flex className=" lg:py-[100px] lg:pl-[10%] justify-between">
            <div className=" lg:w-[40%] w-[40%]">
                <img src={logo} alt="" srcset="" />
                <div className=" text-[#fff]">
                <h3 className=' flex items-center gap-2 font-sans font-medium lg:text-[18px] text-[12px] lg:py-[10px] py-[5px]'><MdOutlineMarkEmailUnread/>mail@yourcompany.com</h3>
                <h3 className=' flex items-center gap-2 font-sans font-medium lg:text-[18px] text-[12px]'><BiPhoneCall/>+896 120 5889 (Toll free)</h3>
                <h3 className=' flex items-center gap-2 font-sans font-medium lg:text-[18px] text-[12px] lg:py-[10px] py-[5px]'><FaMapLocationDot/>101 Baker Street, New York, USA, 12345</h3>
                </div>
                <div className=" text-[#fff] flex lg:gap-4 gap-1 pt-[10px]">
                    <div className=" lg:w-[7%] px-[10px] py-[10px] bg-[red] rounded-full">
                    <a href="#"><FaFacebookF/></a>
                    </div>
                    <div className="  lg:w-[7%] px-[10px] py-[10px] bg-[red] rounded-full">
                    <a href="#"><FaTwitter/></a>
                    </div>
                    <div className="  lg:w-[7%] px-[10px] py-[10px] bg-[red] rounded-full">
                    <a href="#"><FaLinkedinIn/></a>
                    </div>
                    <div className="  lg:w-[7%] px-[10px] py-[10px] bg-[red] rounded-full">
                    <a href="#"><FaInstagramSquare/></a>
                    </div>
                </div>
            </div>
            <div className=" lg:w-[15%] w-[10%] text-[#fff]">
               <ul>
                <li className=' font-sans font-medium lg:text-[22px] text-[12px] pb-[20px]'>Company</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px]'>Home</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px] py-[10px]'>About</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px]'>Service</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px] py-[10px]'>Gallery</li>
               </ul>
            </div>
            <div className=" lg:w-[15%] w-[5%] text-[#fff] lg:gap-0 gap-1">
               <ul>
                <li className=' font-sans font-medium lg:text-[22px] text-[12px] pb-[20px]'>Others</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px]'>Blog</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px] py-[10px]'>Contact</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px]'>Terms & Conditions</li>
                <li className=' font-sans font-medium lg:text-[16px] text-[10px] py-[10px]'>Privacy Policy</li>
               </ul>
            </div>
            <div className=" lg:w-[30%] ">
                <ul>
                    <li className=' text-[#fff] font-sans font-bold lg:text-[22px] text-[12px] pb-[20px]'>Certificate</li>
                    <li className=' lg:w-[100%] w-[30px] flex lg:gap-[10px] gap-[2px]'>
                        <img src={cert1} alt="" />
                        <img src={cert2} alt="" />
                    </li>
                </ul>
            </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Footer




