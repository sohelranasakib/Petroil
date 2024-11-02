import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Supplier = () => {
  return (
    <section className=' lg:py-[50px] py-[20px] lg:pl-[200px] lg:px-0 px-4'>
      <Container>
        <div className=" lg:flex items-center">
            <div className=" lg:w-[30%]">
                <h2 className=' lg:w-[60%] w-[40%] font-sans font-bold lg:text-[45px] text-[20px] lg:pb-0 pb-[10px]'>The biggest supplier on the country</h2>
            </div>
            <div className=" lg:w-[60%]">
                <p className='w-[70%] font-sans font-medium lg:text-[20px] text-[14px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Supplier
