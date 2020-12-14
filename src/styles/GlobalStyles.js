import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; }

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
 }

 @media only screen and (max-width: 1180px) {
    html {
        font-size:50%;
    }

    .header__contact-text-email  {
        transform: translateY(-20px);
        
    }
    
}


@media only screen and (max-width: 960px) {
    html {
        font-size:40%;
    }

    .header__contact-text-email  {
        transform: translate(10px, -20px);
    }

}


.page_load {
    animation: change-page 1s cubic-bezier(0.86, 0, 0.07, 1);
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: -20rem;
    right: 2.5rem;
    background-image: radial-gradient(#2f9f36, #00642b);
    z-index: 1000;
    animation: page-load 1.2s cubic-bezier(0.86, 0, 0.07, 1);
    /* transition: 1s cubic-bezier(0.86, 0, 0.07, 1); */
     }

    @keyframes page-load {
        0% {transform: scale(80);
            opacity: 1;}
        100% {transform: scale(0);
            opacity: 0;}
    }

    @keyframes change-page {
        0% {transform: scale(0);
            opacity: 1;}
        100% {transform: scale(100);
            opacity: 0;}    
    }

body {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    /* font-size: 10px; */
    line-height: 1.7rem;
    color: rgb(3, 3, 3);
    background-color: #fdfcfc;
    
 }

.header {
    width:100%;
    
}

.header__logo-large {
    padding: 3.5rem 0 5rem 5.2rem;
}

.header__info {
    font-size: 1.5rem;
    width: 100%;

}
.mobile__nav {
    display: none;
}

.header__hours {
    position: absolute;
    top: 2.7rem;
    left: 32%;
}

.header__contact {
    position: absolute;
    left: 58%;
    top: 1.6rem;
}
@media only screen and (max-width: 674px) {

    .header__hours {
        left:40%
    }

    .header__contact {
        left:40%;
        top:10rem;
    }

    .main__services-paragraph {
        margin: 3rem;
    }

    .main__services-text--second-heading {
        margin: 3rem;
    }
 

}

.header__contact-text-phone {
    display: inline-block;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: black;
    
}

.contact-anchor {
    text-decoration: none !important;
    color: inherit;
}

.header__contact-text-email {
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: #414141;
    padding-left: 4.2rem;
    
}

.header__hours-text {
    display: inline-block;
    font-size: 2.4rem;
    line-height: 2.8rem;
}

.header__icon {
    float:left;
    padding-right: 1rem;
    padding-top:0.5rem;
}

.header__icon-phone {
    padding-top: 1.7rem;
}

.btn {
    position: absolute;
    right: 3rem;
    top: 1.4rem;
    background: #2F9F36;
    text-decoration: none;
    color: white;
    padding: 1.2rem 2.3rem;
    border-radius: 5rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    height: 5.4rem;
    width: 18.4rem;
    transition: all 0.3s ease 0s;
}

@media only screen and (max-width: 837px) {
    .header__nav {
        display: none;
    }

    .mobile__nav {
        display: block;
        
    }


    .navigation__checkbox {
        display: none; }
      
      .navigation__button {
        background-color: rgb(148, 219, 146);
        text-align: center;
        cursor: pointer;
        height: 7rem;
        width: 7rem;
        position: fixed;
        top: 2rem;
        right: 2rem;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1); }
      
      .navigation__background {
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        position: fixed;
        top: 2.5rem;
        right: 2.5rem;
        background-image: radial-gradient(#2f9f36, #00642b);
        z-index: 1000;
        transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); }
      
      .navigation__nav {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        width: 0;
        z-index: -5;
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
      
      .navigation__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        width: 100%;
        text-align: center; }
      
      .navigation__item {
        margin: 1rem; }
      
      .navigation__link:link, .navigation__link:visited {
        display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        background-image: linear-gradient(120deg, transparent 1%, #fff 80%, transparent 95%);
        background-size: 220%;
        transition: all .4s; }
        .navigation__link:link span, .navigation__link:visited span {
          margin-right: 1.5rem;
          display: inline-block; }
      
      
       .navigation__link:hover, .navigation__link:active {
        background-position: 100%;
        color: #00642b;
        transform: translateX(3rem) scale(1.1);}
      
      .navigation__checkbox:checked ~ .navigation__background {
        transform: scale(80); }
      
      .navigation__checkbox:checked ~ .navigation__nav {
        width: 100%;
        opacity: 1;
        z-index: 1500; }
      
      .navigation__icon {
        position: relative;
        margin-top: 3.5rem; }
        .navigation__icon, .navigation__icon::before, .navigation__icon::after {
          width: 3rem;
          height: 2px;
          background-color: #333;
          display: inline-block; }
        .navigation__icon::before, .navigation__icon::after {
          content: "";
          position: absolute;
          left: 0;
          transition: all .2s; }
        .navigation__icon::before {
          top: -.8rem; }
        .navigation__icon::after {
          top: .9rem; }
      
      .navigation__button:hover .navigation__icon::before {
        top: -1rem; }
      
      .navigation__button:hover .navigation__icon::after {
        top: 1.1rem; }
      
      .navigation__checkbox:checked + .navigation__button .navigation__icon {
        background-color: transparent; }
      
      .navigation__checkbox:checked + .navigation__button .navigation__icon::before {
        transform: rotate(135deg);
        top: 0; }
      
      .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
        transform: rotate(-135deg);
        top: 0; }
      

    .btn {
        font-size: 20px;
        height: 54px;
        line-height: 4.4rem;
        padding: 15px 10px 10px 23px;
        margin-right:10px;
        right:0;
        top: 80px;
        width: 184px;
    }

}
@media only screen and (max-width: 610px) {
    .btn {
        position: absolute;
        left:50%;
        top: 100px;
        background: #2F9F36;
        text-decoration: none;
        color: white;
        padding: 5px 0 0 35px;
        border-radius: 5rem;
        font-weight: 700;
        width: 120px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
        width: 170px;
        transition: all 0.3s ease 0s;
        font-size: 15px;
        height: 35px;
        line-height: 22.4px;
    }

 
    .header__hours {
        
        left: 50%;
        padding-right:10px;
    }

    .header__contact {
        left: 50%;
        top:10rem;
        padding-right:10px;
    }
    .header__contact-text-email  {
        transform: translate(10px, -20px);

    }
}

@media only screen and (max-width: 420px) {
    .btn {  
        left: 35%;
    }

    .composition {
        margin-top: 40px;
    }    
  
    .header__hours {
        
        left: 35%;
        padding-right:10px;
    }

    .header__contact {
        
        left: 35%;
        top:10rem;
        padding-right:10px;
    }
    .header__contact-text-email  {
        transform: translate(10px, -20px);

    }

    .header__logo-large--img {
        width:90px;
        height: 50px;
          
    }
    .header__logo-large {
        padding-bottom: 74px;
    }
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);    

}

.btn:active {
    transform: translateY(2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);    
}

.header__nav {
    background: #176e20;
    height: 96px;
    width:80%;
    position: absolute;
    top: 9rem;
    left:20%;
    -webkit-clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
    
}


@media only screen and (max-width: 949px) {
    html {
        font-size: 35%;
    }
    .header__nav {
        width:65%;
        left:35%;
        height: 98px;
    }


   
}

.header__nav-inside{
    background: #209E2E;
    position: absolute;
    top: 3px; 
    right: 3px; 
    left: 5px;
    bottom:3px;
    -webkit-clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(4.7% 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8%;
}

.header__nav-items {
    /* justify-content: flex-start; */
    font-size: 2.4rem;
    list-style: none;
    display: flex;
}

.header__li-nav {
    list-style:none;
    position: relative;
    padding: 0 3rem;
}

.header__nav-link {
    color: #FFFBFB;
    text-decoration: none;
    font-weight: 500;
}

.header__nav-networks {
    padding-right: 5%;
}

.header__nav-networks-link {
    padding: 1rem;
    transition: all 0.3s ease 0s;
}

.header__nav-logo {
    width: 7rem;
    height: 100%
}

.main__services {
    height: 480px;
}

.main__services-heading {
    color: #00642B;
    font-weight: bold;
    font-size: 48px;
    line-height: 10rem;
    text-align: center;
    padding-bottom: 50px;
    padding-top: 50px;
}

.main__services-heading-2 {
    font-family: 'Open Sans', sans-serif;
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    font-size: 48px;
    line-height: 6.5rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 50px;
    padding-top: 180px;
}

.main__services-heading-about {
    font-family: 'Open Sans', sans-serif;
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    font-size: 48px;
    line-height: 10rem;
    text-align: center;
    padding-top: 6rem;
    padding-bottom: 3rem;
}

.main__services-text--second-heading {
    font-weight: 500;
    font-size: 4rem;
    line-height: 4.8rem;
    padding-top: 5rem;
    font-weight: 600;
}

.main__services-paragraph {
    font-size: 2.5rem;
    line-height: 3.5rem;
    padding-top: 5rem;
}


.composition {
    top: 12rem; 
    position: relative; 
}
    .composition__photo {
        
      width: 55%;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
      border-radius: 2px;
      position: absolute;
      z-index: 10;
      transition: all .2s;
      outline-offset: 2rem; }
      .composition__photo--p1 {
        left: 0;
        top: -2rem; }
      .composition__photo--p2 {
        right: 0;
        top: 2rem; }
      .composition__photo--p3 {
        left: 20%;
        top: 10rem; }
      .composition__photo:hover {
        outline: 1.5rem solid #209E2E;
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
        z-index: 20; }
    .composition:hover .composition__photo:not(:hover) {
      transform: scale(0.95); }

.section-about {
    margin: 3rem 0;
}

.feature-box {
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform .3s; }
  .feature-box__icon {
    font-size: 6rem; 
    margin-bottom: .5rem;
   background-image: linear-gradient(to right, #7ed56f, #01642a); 
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; 
    padding-top:1rem;
  }
  .feature-box:hover {
    transform: translateY(-1.5rem) scale(1.03); }

.u-margin-bottom-small {
    margin-bottom: 2rem;
}

.btn-text {
    z-index: 500;
}

.btn-text:link, .btn-text:visited {
    color: #01642a;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #01642a;
    padding: 3px;
    font-size: 2.5rem;
    transition: all .2s;
    transform: translateY(0);
     }
  
  .btn-text:hover {
    background-color: #01642a;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px); }
  
  .btn-text:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(1); }

.btn-text-top:link, .btn-text-top:visited {
    color: #e3f0e8;
    position: absolute;
    margin-top: 5rem;
    left:5rem;
    
    position:center;
    text-decoration: none;
    border-bottom: 1px solid #e2eee7;
    padding: 3px;
    font-size: 2.5rem;
    transition: all .2s; }
  
  .btn-text-top:hover {
    background-color: #deebe3;
    color: rgb(1, 46, 1);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px); }
  
  .btn-text-top:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0); }

  
.contact__form {
    margin-top: 80px;
    color: rgb(238, 234, 234);
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    font-size: 2rem;
    font-weight:700;
    text-transform: capitalize;
}

.form__label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: .7rem;
        display: block;
        transition: all .3s; 
}

.form__input {
    font-family: inherit;
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    color: inherit;
    background-color: rgba(104, 103, 103, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all .3s; }
    .form__input:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
      border-bottom: 3px solid #55c57a; }
    .form__input:focus:invalid {
      border-bottom: 3px solid #ff7730; }
    .form__input::-webkit-input-placeholder {
      color: #999; }
      
    .form__input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem); }


.btn--send {
    width:14rem;
    border-radius: 10rem;
    font-size:2.5rem;
    border-style: none;
    background-color: rgb(238, 234, 234);
    color:rgb(44, 44, 44);
    box-shadow: 0 .5rem 1rem rgba(238, 234, 234, 0.2);
    margin-top:1rem;
    padding: 1.5rem 4rem;
    transition: all .2s;
}

.btn--send:hover {
    background-color: rgb(224, 215, 215);
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(180, 176, 176, 0.2);
}

.btn--send::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn--send:active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(255, 252, 252, 0.2);
}
.btn--send:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity:0;
}

.margin-bottom-small {
    margin-bottom: 6rem;
}

.margin-left-small {
    margin-left: 6rem;
}

.footer {
    background: radial-gradient(white, #666);
    padding: 10rem 0;
    font-size: 1.4rem; }
    .footer__logo-box {
      text-align: center;
      margin-bottom: 3rem;
     }
    .footer__logo {
      width: 15rem;
      height: auto; }
    .footer__navigation {
      border-top: 1px solid #777;
      padding-top: 2rem;
      padding-left: 2rem;
      display: inline-block; }
    .footer__list {
      list-style: none; }
    .footer__item {
      display: inline-block; }
      .footer__item:not(:last-child) {
        margin-right: 1.5rem; }
    .footer__link:link, .footer__link:visited {
      color: #01642a;
      background-color: transparent;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all .2s; }
    .footer__link:hover, .footer__link:active {
      color: #209E2E;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
      transform: scale(1.05) translateY(-3px); }
    .footer__copyright {
      border-top: 1px solid #777;
      padding-top: 2rem;
      padding-right: 2rem;
      width: 30%;
      float: right; }


.contact__us {
    height: 636px;
}

.story {
    width: 75%;
    margin: auto;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    padding: 6rem;
    font-size: 1.6rem;
    padding-left: 9rem;
    transform: skewX(-12deg); }
    .story > * {
      transform: skewX(12deg); }
    .story__shape {
      width: 15rem;
      height: 15rem;
      float: left;
      -webkit-shape-outside: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);
      transform: translateX(-3rem) skewX(12deg);
      position: relative; }
    .story__img {
      height: 100%;
      /* transform: translateX(-4rem) scale(1.4); */
      backface-visibility: hidden;
      transition: all .5s; }
    .story__text {
      transform: skewX(12deg); }
    .story__caption {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20%);
      color: rgb(219, 219, 219);
      font-size: 1.7rem;
      text-align: center;
      text-transform: uppercase;
      opacity: 0;
      transition: all .5s;
      backface-visibility: hidden; }
    .story:hover .story__caption {
      opacity: 1;
      transform: translate(-50%, -50%); }
    .story:hover .story__img {
      transform: translateY(2rem) scale(1);
      filter: blur(3px) brightness(80%); }



.text-green {
    color: #176e20;
}


.row {
  max-width: 114rem;
  margin: 0 auto; }
  .row:not(:last-child) {
    margin-bottom: 8rem; }
    
  .row::after {
    content: "";
    display: table;
    clear: both; }
  .row [class^="col-"] {
    float: left; }
    .row [class^="col-"]:not(:last-child) {
      margin-right: 6rem; }
  .row .col-1-of-2 {
    width: calc((100% - 6rem) / 2); }
  .row .col-1-of-3 {
    width: calc((100% - 2 * 6rem) / 3); }
  .row .col-2-of-3 {
    width: calc((2 * ((100% - 2 * 6rem) / 3)) + 6rem); }
  .row .col-1-of-4 {
    width: calc((100% - 3 * 6rem) / 4); }
  .row .col-2-of-4 {
    width: calc((2 * (100% - 3 * 6rem) / 4) + 6rem); }
  .row .col-3-of-4 {
    width: calc((3 * (100% - 3 * 6rem) / 4) + 6rem * 2); }
  


  @media only screen and (max-width: 702px) {

    .row .col-1-of-2 {
      width:100%;
      padding: 2rem;
      margin-bottom:3rem;
      height: 200px;
    }
    .row .col-1-of-4 {
      width:100%;
      padding:0 25% 2rem 25%;
    }

    .row .col-1-of-3 {
      width:100%;
      padding:0 10% 5rem 10%;
    }

    .row:not(:last-child) {
    margin-bottom: 0rem; }

  }
  

`;

export default GlobalStyles;
