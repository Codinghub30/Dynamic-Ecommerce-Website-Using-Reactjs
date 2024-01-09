import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Style/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">

          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today <FaHeadphones /></h3>
            </div>

            <div>
              <Button>Get Started
              </Button>
            </div>
          </div>
        </section>

        
        {/* footer section */}
        <section id="contact">
        <footer>
          <div className="grid-four-column">
            <div className="footer-about">
              <h3> <CgProfile /> Anup Ecommerce App  </h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates <AiTwotoneMail /></h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <Button>Subscribe</Button>
                
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us  <FaHeadset /> </h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Made By Anup Kumar Chakra. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
        </section>
      </Wrapper>
     
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .grid-four-column{
    display: flex;
    gap: 8rem;
    margin-left: 29px;
    font-size: 13px;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 6rem;
    border-radius: 1rem;
    background-color: rgb(251 253 255);
    transform: translateY(50%);
    box-shadow: rgb(88 85 85 / 58%) 0px 1px 4px;

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 3rem 0;
    background-color: #a05c0ac4;
    h3 {
        color: rgb(255, 255, 255);
        font-size: 22px;
      margin-bottom: 2.4rem;
      font-family:math;
    }
    p {
        color: rgb(255, 255, 255);
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid rgb(255, 255, 255);

        .icons {
          color: rgb(255, 255, 255);
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: #fff;
      height: 0.1px;
    }
  }

  @media (max-width: 850px) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      width: 113%;
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
     .grid-four-column {
      display: block;
      gap: 8rem;
      margin-left: 29px;
      font-size: 13px;
  }
  }
`;

export default Footer;