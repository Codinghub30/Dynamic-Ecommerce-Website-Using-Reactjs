import React from 'react';
import styled  from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";

function services() {
  return (
    <Wrapper>
        <div className="container">
        <div className="grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>COD Available</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiMoneyStack className="icon" />
                <h3> Guaranteed Cashback</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <CiMoneyCheck1 className="icon" />
              <h3> Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-three-column{
    gap: 4.8rem;
    display: flex;
   
}
  
.container{
    display:flex;
}
  .grid {
    gap: 4.8rem;
  }
  .container{
    max-width: 104rem;
    margin: 0 auto;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 21rem;
    margin-right: 17px;
    margin-left: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: #fff;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: #fff;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgb(228 148 35 / 68%) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    color:orange;
    background-color: #fff;
    color: orange;
  }
  @media(max-width: 850px){
    .grid-three-column{
      gap: 4.8rem;
      display: block;
    
  }
  img{
    width: 8rem;
    margin-top: 28px;
    height: 7rem;
  }
 
  }
`;
export default services;