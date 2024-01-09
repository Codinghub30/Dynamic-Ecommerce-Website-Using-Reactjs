import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMyContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from 'react-toastify';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


function Pricing() {
    
  const { cart, setCart} = useMyContext();
       
      if(cart.length==0){
      
        return(
            <Wrapper>
        <div className="empty-cart">
         <h2 className="empty"> <MdOutlineRemoveShoppingCart /> Your Cart is Empty !!!!!</h2>
         </div>
         </Wrapper>
        )
       
   }
  return (
  
    <div>
           
    </div>
 
  )
}



const Wrapper = styled.section`
 .empty{
   
        font-size: 25px;
        font-family: math;
        margin-left: 31%;
        margin-top: 55px;
        color: #000000c9;
      
}
`
export default Pricing
