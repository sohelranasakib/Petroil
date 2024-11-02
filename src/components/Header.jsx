import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare} from "react-icons/fa";

const Header = () => {
  return (
    <section className=' w-full bg-[#262626] py-[20px] lg:px-0 px-4 fixed z-50'>
    <Container>
      <Flex className=" items-center">
          <div className=" lg:w-[40%] text-[#fff] lg:flex lg:gap-[60px] lg:text-[20px] text-[14px] font-sans font-medium">
              <h3>mail@yourcompany.com</h3>
              <h3>+896 120 5889 (Toll free)</h3>
          </div>
          <div className=" lg:w-[40%] items-center">
                      <div className="text-white flex justify-end lg:gap-[20px] gap-[15px] lg:text-[22px] lg:pl-0 pl-[50px] ">
                          <a target='blank' href="https://www.facebook.com/share/9yKV8w73S7dazz2P/?mibextid=qi2Omg" className=' hover:text-[red]'>
                          <FaFacebookF/></a>
                          <FaTwitter className=' hover:text-[red]'/>
                          <FaLinkedin className=' hover:text-[red]'/>
                          <FaInstagramSquare className=' hover:text-[red]'/>
                  </div>
          </div>
      </Flex>
    </Container>
  </section>
  )
}

export default Header