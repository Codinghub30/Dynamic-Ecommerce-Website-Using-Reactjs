import React, { useState } from "react";
import { Button } from "../Style/Button";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMyContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import Form from "react-bootstrap/Form";


import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt, FaChessRook, FaDollyFlatbed,FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { SlSizeActual } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";
import { SiPaytm,SiPhonepe } from "react-icons/si";















function ProductsCard({ data1 }) {
  const { cart, setCart } = useMyContext();
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);

  const detailPage = (product) => {
    setDetail([{ ...product }]);
    
    setClose(true);
  };

  const handleClick = (values) => {
    // console.log(values);
    //values contain particular value.
    //At first Cart is empty when we click on add to cart then handle click function run and  cart state is set  to current choosen item.
    setCart([...cart, values]);
    if(values === cart){
      
      console.log("Already present");
    }

    toast.success("Added to cart");
  };

  return (
    <div>
      <Wrapper>
        <div className="container">
          <h1 className="TotalItems">Total Items:{data1.length}</h1>

          <Form.Select aria-label="Default select example" className="select">
            <option>Choose Options</option>
            <option value="1">Newest</option>
            <option value="2">Lowest Price</option>
            <option value="3">Highest Price</option>
          </Form.Select>

          {close ? (
            <div className="detail_container">
              <div className="detail_content">
                <button className="close" onClick={() => setClose(false)}>
                  <IoCloseSharp />{" "}
                </button>
                {detail.map((x) => {
                  return (
                    <>
                      <div className="resize">
                        <SlSizeActual onClick={()=> toast.error("Canot Resize Right Now")}/>
                        
                      </div>
                      <div className="detail_info">
                        <div className="img-box">
                          <img src={x.image} alt={x.title}></img>
                        </div>
                        <div className="product_detail">
                          <h2>
                            <strong>Title: </strong> {x.title}
                          </h2>
                          <h2>
                            <strong>
                              <MdOutlineAttachMoney />
                              Price:
                            </strong>{" "}
                            {x.price}
                          </h2>
                          <h6>
                            <strong>Description: </strong> {x.desc}
                            </h6>
                          <h2>{x.about}</h2>
                          <h2>
                            Rating: <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar /> <FaStarHalfAlt />
                          </h2>
                          <div className="allTag">
                          <div className="freeDelivery"><TbTruckDelivery /> Free Delivery</div>
                          <div className="payOnDelivery"><GiMoneyStack />Pay On Delivery</div>
                          <div className="topBrand"><FaChessRook />Top Brand</div>
                          <div className="secure"><RiSecurePaymentLine />Secured Transaction</div>
                          <div className="return"><FaDollyFlatbed />10 Days Return Policy</div>
                          <div className="customerservice"> <AiFillCustomerService />Good Customer Service</div>
                          </div>
                          <div className="payment">
                          <FaGooglePay />
                          <FaAmazonPay />
                          <SiPaytm />
                          <SiPhonepe />

                          </div>
                          <button className="addtocart" onClick={() => handleClick(x)}>Add To Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          ) : null}

          {data1.map((values) => {
            return (
              <>
                {show && <div>Item is already added to Cart</div>}
                <div className="card ">
                  <Link to={`/${values.id}`}>
                    <img src={values.image} class="card-img-top" alt="..." />{" "}
                  </Link>
                  <div className="card-body" key={values.id}>
                    <h5 className="card-title">
                      {" "}
                      <strong>Name: </strong>
                      {values.title}
                    </h5>
                    <p className="card-text">
                      <strong> Price: {values.price}</strong>
                    </p>
                    <Button
                      className="showMoreButton"
                      onClick={() => detailPage(values)}
                    >
                      Show More
                    </Button>
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
          <ToastContainer />
        </div>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.section`
  .TotalItems {
    position: absolute;
    margin-top: -99px;
    left: 48%;
    font-size: 22px;
    font-family: math;
    color: #000000b0;
  }
  .select {
    position: absolute;
    height: 44px;
    width: 204px;
    margin-top: -99px;
    left: 77%;
  }
  .close {
    width: 38px;
    height: 37px;
    font-size: 25px;
  }
  .resize {
    position: absolute;
    left: 95%;
    margin-top: -30px;
    font-size: 26px;
  }
  .allTag{
    display:flex;
    font-size:20px;
  }
  .payment{
  font-size: 40px;
    display: grid;
    display: flex;
    gap: 2rem;
  }
  .addtocart{
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
  
  .detail_container {
    margin-top: -18%;
    margin-left: -7%;
    position: fixed;
    z-index: 1;
    width: 68%;
    background: #f1ececfa;
    box-shadow: rgb(17 16 16 / 88%) 1px 45px 213px 224px;
    border: 1px solid #e8e8e8;
    padding: 20px 30px;
    border-radius: 5px;
    cursor: pointer;
  }
  .detail_container .detail_content {
    max-width: 100%;
  }
  .detail_container .detail_content .detail_info {
    display: flex;
    justify-content: space-between;
  }
  .detail_container .detail_content .detail_info .img-box img {
    width: 250px;
    margin-top: 26px;
    height: 250px;
  }
  .detail_container .detail_content .detail_info .product_detail {
    margin-left: 30px;
    display: grid;
    gap: 22px;
  }
  .detail_container .detail_content .detail_info .product_detail h2 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 20px;
  }

  .detail_container .detail_content .detail_info .product_detail h3 {
    margin-top: 10px;
    color: #fe4a55;
  }
  .detail_container .detail_content .detail_info .product_detail p {
    margin-top: 10px;
    margin-left: 30px;
    color: #777171;
  
  
  }

  @media(max-width:950px){
    .detail_container{
      margin-top: -74%;
      margin-left: -40%;
      position: fixed;
      z-index: 1;
      width: 100%;
    }
    .detail_container .detail_content{
      margin-top:-20px;
    }
    .detail_container .detail_content .detail_info {
      margin-top: -20px;
      display: block;
      margin-top: 18px;
      text-align: center;
    }
   .detail_container .detail_content .detail_info .product_detail {
      margin-left: -10px;
      display: grid;
      gap: 22px;
  }
  .detail_container .detail_content .detail_info .img-box img {
    width: 250px;
    margin-top: -22px;
    height: 250px;
  }
  .select{
    position: absolute;
    height: 44px;
    width: 154px;
    margin-top: -108px;
    left: 4%;
  }
  }
`;

export default ProductsCard;
