import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai'

function nav() {
  return (
    <div>
        <Wrapper>
      <nav id="nav" className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/">
          <img className='shop-image' src='./Images/shop.jpg'/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/about">
                  About Us
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="navbar-brand" to="/sale">
                  Sale
                </Link>
              </li>
           
              <Link to= "/cart">
              <AiOutlineShoppingCart className="shoppingCart" />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
          </Wrapper>
      
    </div>
  )
}
const Wrapper = styled.section`
.shop-image{
  width: 100px;
  margin-left: 12px;
  border-radius: 69px;

}
.container-fluid{
  background-color: #f2f2f4;
}
  #nav {
   
    height: 104px;
    background-color: rgb(246, 248, 250);
  }
  #nav ul {
    padding: 10px;
    margin-left: 63%;
    gap: 32px;
  }
  #nav ul li:hover{
    background-color:grey;
    border-radius:15px;
    opacity: 60%;
    transform: translateX(40%);
    /* transform-origin: top; */
    transition: all 3s linear;

    border-radius:20px
    padding:20px 20px;
    
  }
  .shoppingCart {
    font-size: 30px;
    margin-left: 34px;
    cursor: pointer;
  }
  @media(max-width: 850px){
    width:444px;
    .container-fluid {
      background-color: #f2f2f4;
      z-index: 1;
  }
  
  .nav
  }
`;


export default nav;
