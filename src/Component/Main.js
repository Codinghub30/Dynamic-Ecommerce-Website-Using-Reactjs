
import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Style/Button";

function Main(props) {
    
       
        
  
    return (
      <Wrapper>  
        <div className="container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <p className="intro-data">Welcome to </p>
              <p className='ecom'>{props.name}</p>
              <p className="tagline"><span>P</span> <p className='text'>rogress With Every Purchase </p> </p>
         
              <p>
                  We are here to provide you joy in buying good quality clothes and amazing electronic items ans other necessary accessories
              </p>
              <NavLink>
                <Button>show More</Button>
              </NavLink>
            </div>
            {/* our homepage image  */}
            <div className="hero-section-image">
              <figure>
              <div className='box'>
                
              </div>
                <img
                  src="images/hero1.jpg"
                  alt="hero-section-photo"
                  className="img-style"
                />
              </figure>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  };
  const Wrapper = styled.section`
  .container{
    margin-top:85px;
  }

.tagline .text{
  font-family: math;
    font-size: 20px;
    margin-left:30px;
}
.tagline span{
  position: absolute;
  left: 0%;
  font-size: 51px;
  margin-top: -20px;
  color: orange;
}
  img {
    width: 27rem;
    margin-top: 84px;
    height: 20rem;
    margin-left: 145px;
    position: absolute;
    left: 52%;
  }
  .box {
   
    padding-top: 30px;
    width: 465px;
    position: absolute;
    height: 320px;
    left: 62%;
    background-color: #f3b84bde;
    margin: 30px;

  }

  .hero-section-data {
    position: absolute;
    right: 47%;
    left: 9%;
    .intro-data{
      font-size: 19px;
      font-family: auto;
    }
    .ecom{
      font-family: auto;
      font-size: 50px;
    }
    p {
      
      margin: 2rem 0;
      backgroud-color:#edb348d6;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

  
  }
  @media(max-width: 850px){
    img{
      width: 13rem;
      margin-top: 120px;
      height: 12rem;
      margin-left: 8px;
      position: absolute;
      left: 52%;
    }
     .hero-section-data .ecom {
      font-size: 32px;
  }
    .box{
      padding-top: 30px;
      width: 206px;
      position: absolute;
      height: 218px;
      left: 31%;
      background-color: #f3b84bde;
      margin: 103px;
  
    }
    
  }

  
`;


export default Main
