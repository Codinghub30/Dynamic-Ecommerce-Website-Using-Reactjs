import React, { useContext, useState } from "react";
import Nav from "./Component/nav";

import styled from "styled-components";
import Footer from "./Component/Footer";
import { FaHeadphones } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <Wrapper>
      <Nav />
      {/* {myName}
      <h2> About Us</h2> */}

      <div className="content">
        <h2>About Us</h2>
        <p>
          {" "}
          An <span>E</span>-commerce website is one that allows people to buy
          physical goods, services, and digital products over the internet
          rather than at a brick-and-mortar location. Through an e-commerce
          website, a business can process orders, manage shipping and logistics,
          and provide customer service. It’s tough to imagine daily life without
          e-commerce. We order electronics Item, jewellers, bags, clothes, and
          furniture; we register for classes and other online services; we
          download books, music, and movies; and so much more. E-commerce has
          taken root and is here to stay. The term “e-commerce” simply means the
          sale of goods or services on the internet. In its most basic form,
          e-commerce involves electronically transferring funds and data between
          2 or more parties. This form of business has evolved quite a bit since
          its beginnings in the electronic data interchange of the 1960s and the
          inception of online shopping in the 1990s. In recent years, e-commerce
          has enjoyed a massive boost from the rise of smartphones, which allow
          consumers to shop from nearly anywhere.
        </p>
        <p></p>
        <img src="./Images/hero1.jpg" />
      </div>
      <div className="content1">
        <h2>
          <span>L</span>ocation
        </h2>
        <p>
          <FaHeadphones />{" "}
          <strong>
            Got Questions ? <br />
            Talk to our Executive{" "}
          </strong>
          <br />
          Chat on whatsapp. +91-7895438656
          <br /> <AiTwotoneMail /> Mail us at: Ecommerce@gmail.com
          <br />
          <strong>Anup</strong> Ecommerce Mart,
          <br /> <FaMapPin /> Near Swosti premium Hotel, Jaydev Vihar,
          Bhubaneswar, Odisha
          <br /> India 751026
        </p>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    display: flex;
  }
  .content p {
    margin-left: 113px;
    margin-top: 175px;
    margin-left: 113px;
    font-family: math;
  }
  span {
    font-size: 50px;
    font-family: serif;
    position: relative;
    top: 3%;
  }
  .content img {
    margin-left: 127px;
    margin-top: 145px;
    position: relative;
    left: -3%;
    width: 32%;
    box-shadow: 4px 4px 4px 3px #000000d1;
  }
  .content h2 {
    position: absolute;
    left: 47%;
    margin-top: 29px;
    font-size: 31px;
    font-family: math;
  }
  .content1 h2 {
    margin-left: 115px;
  }
  .content1 p {
    margin-left: 115px;
    font-size: 20px;
    font-family: math;
  }
  @media (max-width: 950px) {
    .content p {
      margin-left: 28px;
      margin-top: 436px;
      margin-right: -29px;
    }
    .content img{
      position: absolute;
    width: 135%;
    height: 262px;
    margin-left: -103px;
    margin-top: 178px;
    }
    .content1 p{
      margin-left: 28px;
      margin-top: 61px;
      margin-right: -12px;
    }
  }
`;

export default AboutUs;
