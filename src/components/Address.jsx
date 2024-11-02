import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Address = () => {
  return (
    <address className=''>
      <section className=' lg:py-0 py-[10px] '>
        <iframe className='w-full lg:h-[450px] h-[200px] border-2 border-[red]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116869.45252691708!2d90.23838464335934!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1713902649240!5m2!1sen!2sbd"></iframe>
    </section>
     <section className='lg:py-[45px] py-[15px] bg-[red] lg:px-0 px-4'>
    <Container>
        <Flex className=" items-center justify-between">
             <div className="">
                 <h2 className='lg:w-[100%] w-[90%] font-sans font-bold lg:text-[32px] text-[14px] text-white'>Want to join as member branch in your area?</h2>
             </div>
             <div className=" lg:pr-[20%]">
                 <a className='font-sans font-semibold lg:text-[16px] text-[14px] text-white lg:py-[13px] py-[8px] lg:px-[32px] px-[25px] border-2 border-[#FFFFFF] hover:bg-black duration-500 ease-in-out rounded-xl' href="#">CONTACT</a>
             </div>
         
        </Flex>
    </Container>
      
    
 </section>
    </address>
  
  )
}

export default Address
