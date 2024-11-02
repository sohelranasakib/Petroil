import React from 'react'
import Container from './Container'
import Flex from './Flex'
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

const Blog = () => {
  return (
   <section className=' bg-[#d9d4d4] lg:py-[100px] py-[30px] lg:px-0 px-4'>
    <Container>
      <div className=" lg:flex justify-center gap-[30px]">
        <div className=" relative">
          <img className=' ' src={blog1} alt="" />
          <div className="  after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099]"></div>
          <div className=" absolute top-[60px] pl-[30px]">
          <p className='font-sans font-bold lg:text-[27px] text-[19px] text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
          <a className='font-sans font-semibold text-[16px] text-white py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
          </div>
        </div>
        <div className=" relative lg:py-0 py-[20px]">
          <img src={blog2} alt="" />
          <div className="  after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099]"></div>
          <div className=" absolute top-[60px] pl-[30px]">
          <p className='font-sans font-bold lg:text-[27px] text-[19px] text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
          <a className='font-sans font-semibold text-[16px] text-white py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
          </div>
        </div>
        <div className=" relative">
          <img src={blog3} alt="" />
          <div className="  after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099]"></div>
          <div className=" absolute top-[60px] pl-[30px]">
          <p className='font-sans font-bold lg:text-[27px] text-[19px] text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
          <a className='font-sans font-semibold text-[16px] text-white py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
          </div>
        </div>
      </div>
    </Container>
   </section>
  )
}

export default Blog
