import styled from "styled-components";

const trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="./Images/img4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./Images/img6.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./Images/img3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./Images/img4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./Images/img5.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: rgb(238 240 242);
  

  .brand-section {
    padding: 12rem 0 0 0;
   
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    font-family: auto;
  }

  img {
    min-width: 6rem;
    margin-top: -29px;
    height: 7rem;

  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: 850px) {
    width: 107%;
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
    img{
    width: 8rem;
    margin-top: 31px;
    height: 7rem;
    }
    .brand-section {
      width: 451px;
      padding: 9rem 0;
      background-color: rgb(238 240 242);
  }
  }
`;

export default trusted;