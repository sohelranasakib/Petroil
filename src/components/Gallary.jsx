import React from 'react'
import Flex from './Flex'
import gal1 from "../assets/gal1.png"
import gal2 from "../assets/gal2.png"
import gal3 from "../assets/gal3.png"
import gal4 from "../assets/gal4.png"

const Gallary = () => {
  return (
    <section className=' pb-[20px] lg:py-0 py-[20px] lg:px-0 px-4'>
            <Flex className=" justify-between flex-wrap">
                <div className=" lg:w-[24%] w-[48%]">
                    <img src={gal1} alt="" />
                </div>
                <div className="  lg:w-[24%] w-[48%] lg:pb-0 pb-[13px]">
                    <img src={gal2} alt="" />
                </div>
                <div className="  lg:w-[24%] w-[48%]">
                    <img src={gal3} alt="" />
                </div>
                <div className="  lg:w-[24%] w-[48%]">
                    <img src={gal4} alt="" />
                </div>

            </Flex>
    </section>
  )
}

export default Gallary
