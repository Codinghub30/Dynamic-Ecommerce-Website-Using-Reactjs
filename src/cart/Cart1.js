import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMyContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "../Component/nav";
import { ToastContainer, toast } from 'react-toastify';
import { MdProductionQuantityLimits } from "react-icons/md";
import Pricing from "./Pricing";


const Cart1 = () => {
 
  const { cart, setCart} = useMyContext();
  const [ price1, setPrice1] = useState(0);
  
  const [ total,  setTotal] = useState(0);
  const [ shipping, setShipping] = useState(0);
  const [ tax, setTax] = useState(0);
  const [ qty, setQty] = useState(1);
 
  let ans = 0; 
  let ship_val = 0;
  let tax_val = 0;
  let ans1 = 0;
 
  const handleClick = () => {
    //cart contains choosen product
     cart?.map((item) => {
      ans +=  item.price*qty;
      ship_val = 100;
       tax_val = 280;
       return ans1 = ans + shipping + tax;

    })
  
    //iterates to  price properties of choosen item only
     
   
    setTotal(ans1);
    setShipping(ship_val);
    setTax(tax_val);
    setPrice1(ans);
  }
  useEffect(() => {
    handleClick();
  })
  

  // const  IncrementItem = (values) => {
  //   setQty(qty+1);
    
    
  // }

  // const DecrementItem = (values) => {
  //     setQty(qty-1);
  //     if(qty==1 ){
  //       remove(values.id);
  //     }
  // }
  //Remove the item from Cart
  const remove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }

    
 

  return (
    <div>
      <Wrapper>
        <Nav />
        <div className="container">
        <h4><MdProductionQuantityLimits /> Total Number of items present in cart: {cart.length}</h4>
          <Pricing />
        
          
          
          {cart?.map((values) => {
             
            return (
              <>
          
       
                <Card>
                  <Card.Header>
                    
                    <img src={values.image} />
                  </Card.Header>
                  <Card.Body>
                  <div className="card-body" key={values.id}>
                    <h5 className="card-title">
                     
                      <strong>Name: </strong> <br />
                      {values.title}
                    </h5>
                    <p className="card-text">
                      <strong> Price: <br />
                      {values.price}</strong>
                    </p>
                    <p className="card-text">
                      <strong> Total <br />
                      {values.price}</strong>
                    </p>
                  

                   {/* <Button className="showMoreButton" onClick={(e) => DecrementItem(values)}>-</Button>
                    <p>{qty}</p>
                    <Button className="showMoreButton" onClick={(e) => IncrementItem(values)}>+</Button>  */}
                    <Button className="showMoreButton" onClick={() => remove(values.id)}>X</Button>
                  </div>
                  </Card.Body>
                </Card>
                
           
              </>
            );
          })}
     <aside>
            <div className="heading">

              <h2>Price: Rs{price1}</h2>
              <h2>Shipping: Rs {shipping}</h2>
              <h2>Tax: Rs{tax}</h2>
              <h2>Sub-Total: ${total}</h2>
              <Button className="showMoreButton" onClick={() => cart.length != 0 ? toast.success("Order is Succesfull") : toast.error("Cart is Empty")} > <ToastContainer /> Order </Button>
            </div>
          </aside>
     
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`

  .container .card {
    display: flex;
    flex-direction: row;
    width: 80%;
  }
  .card{
    margin-top: 73px;
  }
  .card-header img {
    height: 122px;
    width: 83%;
  }
  .container .card-body {
    display: flex;
    margin-left: -33px;
    margin-top: 16px;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
  .container h4{
    margin-top: 45px;
    margin-left: 26%;
    font-size: 23px;
    font-family: math;

  }
  .btn {
    height: 45px;
  }
  .container aside {
    position: absolute;
    z-index: -1;
    top: 0%;
    left: 78%;
    border: transparent;
    background: #dfedf96b;
    box-shadow: 2px 2px 5px 2px #000000a8;
    height: 100%;
    width: 336px;
    text-align: center;
  }
  .heading {
    margin-top: 270px;
    font-family: math;
    display: grid;
    gap: 2rem;
  }
  .heading h2{
      font-size: 28px;
    }

    @media(max-width:950px ){
      .container .card{
        width: 110%;

      }
      .container aside{
        width: 109%;
          position:static;
    background: #dfedf96b;
    box-shadow: 2px 2px 5px 2px #000000a8;
    text-align: center;
      }
       .card-body .card-body{
        display: block;
        margin-left: 21px;
        margin-top: -25px;
      }
    }
`;

export default Cart1;
