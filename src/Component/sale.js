import React, { useEffect, useState } from 'react'
import Nav from './nav'
import styled from 'styled-components'
import { Button } from '../Style/Button';
import { IoMdCart } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { useMyContext } from "../Context/CartContext";

export default function() {
    const [data, setData] = useState([]);
    const { cart, setCart } = useMyContext();

    useEffect (() => {
        const url = "https://fakestoreapi.com/products";
        const fetchData = async () => {
          
            const respose = await fetch(url);
            const data1 = await respose.json();

            setData(data1);
        };
        fetchData();
    }, []);
    const handleClick = (values) => {
      setCart([...cart, values]);
     
      toast.success("Added to cart");

    }
  return (
    <Wrapper>
    <Nav />
    <div className='image'>
        <img src='../Images/orange.jpg'/>

    </div>
    <div className='images'>
      <img src='../Images/png2.png' />
      <img className='png2' src='../Images/png4.png' />
    </div>
    <h2>Great Indian Festival</h2>
    <h5>Mega Bumper Sales</h5>
    <div className="container">
        {data.map((values) => {
          return (
            <>
              <div className="card">
                <img src={values.image} class="card-img-top" alt="..." />
                <div className="card-body" key={values.id}>
                  <h5 className="card-title">
                    {" "}
                    <strong>Name: </strong>
                    {values.title}
                  </h5>
                  {/* <p className="card-text">
                   <strong>Description: </strong> {values.description}
                  </p>  */}
                  <p className="card-text">
                    <strong> Price: {values.price}</strong>
                  </p>
                  <Button>Show More</Button>
                  <button
                    className="addToCart"
                    values={values}
                    onClick={() => handleClick(values)}
                  >
                    Add To Cart <IoMdCart />{" "}
                  </button>
                </div>
              </div>
            </>
          );
        })}
        </div>
    </Wrapper>
    );
    }
  


const Wrapper = styled.section`
.image img{
  width: 100%;
  height: 240px;
  
}
.images img{
  width: 263px;
  position: absolute;
  margin-top: -246px;
  margin-left: 79%;

}
.images .png2{
  margin-left: 2px;
  width: 12%;
}
h2{
    text-align: center;
    font-family: auto;
    margin-top: 29px;
    color: #a27524;
}
h5{
    text-align: center;
    font-family: auto;
    
    color: #a27524;

}
.container{
    display: grid;
    margin-top: 42px;
    margin-left: 276px;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    width: 64%;
}
.container .card{
  height: 20rem;
  background: aliceblue;
  overflow: hidden;
  display: flex;
  text-align: center;
  margin-bottom: inherit;
  justify-content: center;
}
.container .card .card-img-top{
  width: 6rem;
    margin-left: 31%;
}
.addToCart{
  position: relative;
  border-radius: 2px;
  width: 137px;
  border-radius: 8px;
  background: #f0bc5de8;
  border: none;
  color: white;
  padding: 5px 17px;
  top: -11px;
  margin-left: 6px;
    &:hover,
    &:active {

      box-shadow: black;
      transform: scale(0.9);
      
    }
 }
@media(max-width: 850px){
  .container{
    display: block;
    margin-top: 42px;
    margin-left:90px;
  }
  .images img {
    width: 285px;
    position: absolute;
    margin-top: -297px;
    margin-left: 37%;
}
.addToCart{
  top: 7px;
  margin-left: 0px;

}

`
