import styled from "styled-components";
//images
import before1 from "../images/before1.webp";
import before2 from "../images/before2.webp";
import before3 from "../images/before3.webp";
import before4 from "../images/before4.webp";
import before5 from "../images/before5.webp";
import before6 from "../images/before6.webp";
import before7 from "../images/before7.webp";
import before8 from "../images/before8.webp";
import before9 from "../images/before9.webp";
import after1 from "../images/after1.webp";
import after2 from "../images/after2.webp";
import after3 from "../images/after3.webp";
import after4 from "../images/after4.webp";
import after5 from "../images/after5.webp";
import after6 from "../images/after6.webp";
import after7 from "../images/after7.webp";
import after8 from "../images/after8.webp";
import after9 from "../images/after9.webp";

const Card = (id) => {
  const classFront = `card__side card__side--front card__side--front-${id.id}`;
  const classBack = `card__side card__side--back card__side--back-${id.id}`;
  return (
    <StyledCard>
      <div className="card">
        <div className={classFront}>
          <div className="card__label card__label--before">Before</div>
        </div>
        <div className={classBack}>
          <div className="card__label card__label--after">After</div>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    content: "";
    height: 50rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card__side {
    color: #fff;
    font-size: 2rem;
    height: 50rem;
    transition: all 0.8s ease;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .card__label {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: rgba(23, 110, 32, 0.9);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 2rem;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  
  .card__label--after {
    background-color: rgba(47, 159, 54, 0.9);
  }
  
  .card:hover .card__label {
    transform: scale(1.05);
    box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.3);
  }
  
  .card__side--front {
    background-size: cover;
    background-position: bottom;
    border: solid lightgray 5px;
  }
  .card__side--front-1 {
    background-image: url(${before1});
  }
  .card__side--front-2 {
    background-image: url(${before2});
  }
  .card__side--front-3 {
    background-image: url(${before3});
  }
  .card__side--front-4 {
    background-image: url(${before4});
  }
  .card__side--front-5 {
    background-image: url(${before5});
  }
  .card__side--front-6 {
    background-image: url(${before6});
  }
  .card__side--front-7 {
    background-image: url(${before7});
  }
  .card__side--front-8 {
    background-image: url(${before8});
  }
  .card__side--front-9 {
    background-image: url(${before9});
  }
  .card__side--back {
    transform: rotateY(180deg);
    border: solid #176e20 5px;
  }
  .card__side--back-1 {
    background: url(${after1});
    background-size: cover;
    background-position: bottom;
  }
  .card__side--back-2 {
    background: url(${after2});
    background-size: cover;
    background-position: bottom;
  }
  .card__side--back-3 {
    background: url(${after3});
    background-size: cover;
    background-position: bottom;
  }
  .card__side--back-4 {
    background: url(${after4});
    background-size: cover;
    background-position: bottom;
  }
  .card__side--back-5 {
    background: url(${after5});
    background-size: cover;
    background-position: bottom center;
  }
  .card__side--back-6 {
    background: url(${after6});
    background-size: cover;
    background-position: center;
  }
  .card__side--back-7 {
    background: url(${after7});
    background-size: cover;
    background-position: center;
  }
  .card__side--back-8 {
    background: url(${after8});
    background-size: cover;
    background-position: center;
  }
  .card__side--back-9 {
    background: url(${after9});
    background-size: cover;
    background-position: center;
  }

  .card:hover .card__side--front {
    transform: translateY(-10px) rotateY(-180deg);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.3);
  }
  .card:hover .card__side--back {
    transform: translateY(-30px) rotateY(0);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.3);
  }
  
  @media only screen and (max-width: 702px) {
    .card {
      height: 45rem;
    }
    
    .card__side {
      height: 45rem;
    }
    
    .card__label {
      font-size: 1.2rem;
      padding: 0.6rem 1.2rem;
      top: 1.5rem;
      right: 1.5rem;
    }
  }
  
  @media (hover: none) {
    .card:active .card__side--front {
      transform: translateY(-10px) rotateY(-180deg);
    }
    .card:active .card__side--back {
      transform: translateY(-30px) rotateY(0);
    }
  }
`;

export default Card;
