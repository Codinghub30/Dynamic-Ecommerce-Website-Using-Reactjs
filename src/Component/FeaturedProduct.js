import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";



function FeaturedProduct() {
  return (
    <div>
        <Wrapper>
      <div className='content'>
        <h1>Featured Products</h1>
        <h6>Special</h6>
        <div className='three-box'>
            <img className='img1' src='../Categories/Apple12.jpg' alt='img1' />
            <img className='img2' src='../Categories/boatsm.jpg' alt='img2'  />
            <img className='img2' src='../Categories/sonybluetooth.jpg' alt='img3'  />
           
        </div>
        <div className='tag'>
        <p className='price-tag1'>Name: IPhone 12 pro <br/> Price:55000 <br/> <FaStar /> <FaStar /> <FaStar /> <FaStar /><FaStarHalfAlt />
 </p>
        <p className='price-tag2'>Name: Noise SmartWatch <br/>Price:5999 <br/> <FaStar /><FaStar /><FaStar /> <FaStarHalfAlt /></p>
        <p  className='price-tag3'>Name: Sony Bluetooth Speaker <br/>Price:55000 <br/> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
        </div>
        
      </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
.content{
    margin-top: 36%;
    text-align: center;
}
.content h1{
    font-family: auto;
    font-size: 36px;
}
.content h6{
    font-family: auto;
    font-size: 36px;
}
.three-box{
    display: flex;
    gap: 16rem;
    margin-left: 196px;
    margin-top: 48px;
}
.three-box img{
    width: 170px;
    margin-left:40px;
    box-shadow: 3px 0px 9px 2px #000000b0;
    &:hover,
    &:active {

      box-shadow: black;
      transform: scale(0.9);
      
    }
   
}
   .price-tag1{
    position: absolute;
    left: 15%;
    margin-top: 23px;
    font-family: math;
    font-size: 18px;
   }
   .price-tag2{
    position: absolute;
    left: 46%;
    margin-top: 28px;
    font-size: 18px;
    font-family: math;
   }
    .price-tag3 {
        position: absolute;
        margin-top: 23px;
        right: 9%;
        font-family: math;
        font-size: 18px;
    }

@media(max-width: 850px){
    .content{
        margin-top: 188%;
        margin-left: 20px;
    
    }
    .three-box{
        display: grid;
        margin-left: 82px;
        gap: 9rem;
    
    }
    .price-tag1{
        left: 31%;
        margin-top: -619px;
    
    }
    .price-tag2{
        left: 28%;
        margin-top: -303px;
    }
    .price-tag3{
        right:12%;
    }
}
`

export default FeaturedProduct
