import React from 'react'
import Container from './Container'
import learn from "../assets/learn.png"

const LearnMore = () => {
  return (
    <section className=' bg-[#d9d4d4] lg:py-[100px] lg:px-0 px-4'>
      <Container>
      <div className="lg:w-[100%] lg:flex justify-center">
      <div className=" lg:w-[30%] bg-[red]">
            <h3 className=' w-[70%] font-sans font-bold lg:text-[38px] text-[22px] text-[#fff] lg:pt-[100px] pt-[50px] lg:pl-[90px] pl-[100px] lg:pb-0 pb-[50px]'>Learn more about our company</h3>
            </div>
            <div className=" relative">
                <img src={learn} alt="" />
                <div className=" absolute lg:top-[40%] top-[60%] lg:left-[40%] left-[30%]">
                <a href="#" className=' lg:px-[30px] px-[8px] lg:py-[10px] py-[5px] border-2 border-[red] inline-block rounded-lg hover:bg-black duration-500 ease-in-out font-sans font-bold lg:text-[20px] text-[12px] text-[#fff]'> Larn More</a>
                </div>
            </div>
      </div>
      </Container>
    </section>
  )
}

export default LearnMore
