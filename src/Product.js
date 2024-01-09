import React, { useEffect, useState } from "react";
import Nav from "./Component/nav";
import styled from "styled-components";
import { Button } from "./Style/Button";
import Footer from "./Component/Footer";
import Categories from "./Data/categories";
import ProductCard from "./Component/ProductsCard";


function Product() {
  const [data1, setData] = useState(Categories);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // After clicking the searching the item and then when clicked the  category section then filter it further

  }, [])

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  useEffect(() => {
   
    const finalResult = Categories.filter((item) => {
      if (category === "all" && !filter) return true
      const searchMatch = filter && Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase())
      );
      
       return item.category === category || searchMatch;
    });
        

    setData(finalResult);
  }, [filter, category]);
 
  

  const filterResult = (catItem) => {
    setCategory(catItem);
   
  };


  return (
    <Prod>
      <Nav />
      

      <section id="AllContent">
        <div className="contentFirst">
          <div class="category">
            <h2>Catagory</h2>
            <button className="button1" onClick={() => setData(Categories)}>
              All
            </button>
            <button className="button1" onClick={() => filterResult("men")}>
              Men's Clothing
            </button>
            <button className="button1" onClick={() => filterResult("women")}>
              Women's Clothing
            </button>
            <button className="button1" onClick={() => filterResult("mobile")}>
              Mobile
            </button>
            <button className="button1" onClick={() => filterResult("bag")}>
              Bag
            </button>
            <button className="button1" onClick={() => filterResult("laptop")}>
              Laptop
            </button>
            <button className="button1" onClick={() => filterResult("watch")}>
              Smart Watch
            </button>
            <button className="button1" onClick={() => filterResult("child")}>
              Children
            </button>
          </div>
          <div className="range-content">
            <label for="range12" class="form-label">
              Price Range
            </label>
            <input type="range" class="range" />
            <button type="button" className="clear-button">
              Clear Filter
            </button>
          </div>
        </div>

        <div id="sdf d  " className="container">
         
          <div className="search">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
          {
            <ProductCard data1={data1}  />
          }
          
        </div>
      </section>

      <Footer />
    </Prod>
  );
}
const Prod = styled.section`
  section {
    font-family: ui-monospace;
  }
  .contentFirst {
    padding: 5rem 0px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .search {
    width: 230px;
    position: absolute;
    left: 2%;
  }
  .button1:hover {
    color: orange;
  }
  .container {
    display: grid;
    margin-top: 20px;
    margin-left: 185px;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    width: 85%;
  }
  .heading {
    color: rgba(29, 29, 29, 0.8);
    line-height: 1.5;
    font-weight: 400;
    text-align: center;
    margin-top: 54px;
    font-size: 17px;
  }
  .card img {
    width: 155px;
    margin-left: 53px;
    height: 166px;
  }
  .category {
    position: absolute;
    left: 3%;
   margin-top:214px;
    font-size: 19px;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
  }
  .range-content {
    margin-top: 610px;
    position: absolute;
    margin-left: 48px;
    display: flex;
    flex-direction: column;
  }
  .form-label{
    margin-top: 104px;
  }
 .addToCart{
  border-radius: 2px;
  border-radius: 2px;
    background: #f0bc5de8;
    border: none;
    color: white;
    padding: 13px 20px;
    margin-left: 22px;
    &:hover,
    &:active {

      box-shadow: black;
      transform: scale(0.9);
      
    }
 }
 
  .button1 {
    background: white;
    border: none;
  }
  .clear-button {
    margin-top: 19px;
    color: white;
    border: none;
    background-color: #f75a10de;
    border-radius: 10px;
    padding: 1rem 2rem;
  }
  .range12{
    margin-top: 75px;
  }
  .clear-button:hover {
    background-color: black;
  }

  @media (max-width: 950px) {
    .content {
      margin-top: -25px;
    }
    .category{
      left:2%;
    }
    .form-control {
      width: 77%;
      margin-left:-1%;
      padding: 0.375rem 0.75rem;
      font-size: 1.5rem;
    }
    .container {
      display: block;
      margin-left: 80px;
      margin-top: 74px;
    }
    .card img {
      width: 147px;
      margin-left: 65px;
      height: 166px;
    }
    .select{
      position: absolute;
      height: 44px;
      width: 162px;
      margin-top: -110px;
      left: 3%;
    }
    .showMoreButton{
      margin-left:40px;
    }
    .addToCart{
      margin-left: 42px;
      margin-top: 12px;
  
    }
    .select1 {
      width: 118px;
      margin-left: -35px;
      margin-top: 47px;
      height: 37px;
    }
    .form-label{
      margin-top: 81px;
    }
    .range-content {
      margin-left: 14px;
    }
    .clear-button {
      margin-left: -4px;
      width: 138px;
    }
  }
`;

export default Product;
