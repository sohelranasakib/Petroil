import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Slogo1 from "../../src/assets/slogo1.png"
import Slogo2 from "../../src/assets/slogo2.png"
import Slogo3 from "../../src/assets/slogo3.png"
import Slogo4 from "../../src/assets/slogo4.png"

const Slogo = () => {
  return (
    <section className=' lg:py-[100px] py-[30px]'>
        <Container>
            <Flex className=" justify-center">
            <div className="w-[22%]">
                    <img className='' src={Slogo1} alt="slogo1" />
                </div>
                <div className="w-[22%]">
                    <img className='' src={Slogo2} alt="slogo2" />
                </div>
                <div className="w-[22%]">
                    <img className='' src={Slogo3} alt="slogo3" />
                </div>
                <div className="w-[22%]">
                    <img className='' src={Slogo4} alt="slogo4" />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Slogo
