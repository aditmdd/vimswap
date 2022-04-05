import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #070b0d !important;
    background-size: cover;
    background-repeat:repeat;
    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }
//   #swap-page {
      // border-radius: 20px !important;
      // padding: 19px 30px 5px 30px;
      // font-size: 1rem !important;
      // box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5) !important;
      // border: solid 1px transparent !important;
      // background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #8ACF5F, #48C1EE);
      // background-origin: border-box !important;
      // background-clip: content-box, border-box !important;
      // box-shadow: 2px 1000px 1px #000 inset !important;
//   }

//   .BdHDD {
//     border-radius : 20px !important;
//   }
//   .erviZY {
//     color: #59c4c7;
//   }
//  .erviZY:hover:not(:disabled):not(.button--disabled):not(:active) {
//     background: transparent;
//   }
//   .lecaKL {
//       border-radius: 10px !important;
//       font-size: 1rem !important;
//       box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5) !important;
//       border: solid 1px transparent !important;
//       background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #8ACF5F, #48C1EE);
//       background-origin: border-box !important;
//       background-clip: content-box, border-box !important;
//       box-shadow: 2px 1000px 1px #000 inset !important;
//   }
//   .irpigz {
//     background-color: transparent;
//   }
//   .irpigz:hover {
//     background-color: #090808 !important;
//   }
//   .bodVaH:hover {
//     background-color: #090808;
//   }
//   .eFPZkV , .kCAXer,.hYBisA{
//     fill : #fff;
//     background: -webkit-linear-gradient(to right, #48C1EE 0%, #649645 100%);
//     background: -moz-linear-gradient(to right, #48C1EE 0%, #649645 100%);
//     background: linear-gradient(to right, #48C1EE 0%, #649645 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
//   .bwljdJ {
//     border-bottom: 1px solid #000000;
//     padding: 10px 10px 0px 2px;

//   }
//   .AVfvJ{
//     background: #48C1EE;
// background: -webkit-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: -moz-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: linear-gradient(to right, #48C1EE 0%, #649645 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
//   }
//   .jlhzLX {
//     color : #ffffff40;
//   }
     
//     /* width */
//     ::-webkit-scrollbar {
//       width: 2px;
//     }

//     /* Track */
//     ::-webkit-scrollbar-track {
//       background: #090808;
//     }

//     /* Handle */
//     ::-webkit-scrollbar-thumb {
//       background: #090808;
//     }

//     /* Handle on hover */
//     ::-webkit-scrollbar-thumb:hover {
//       background: #090808;
//     }


//     ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
//   color: red;
//   opacity: 1; /* Firefox */
// }

// :-ms-input-placeholder { /* Internet Explorer 10-11 */
//   color: red;
// }

// ::-ms-input-placeholder { /* Microsoft Edge */
//   color: red;
// }



//   .cXefpT {
//     background: #48C1EE;
// background: -webkit-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: -moz-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: linear-gradient(to right, #48C1EE 0%, #649645 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
//   }

//   li {
//     display: flex;
//     align-items: center;
//   }

//   body {
//     background: url('https://svgshare.com/i/frS.svg');
//     background-position-y: -20px;
//     background-size: cover;
//   }
//   .jYlMNP {
//   color : #ffffff50;
//   }
//   .jYlMNP:focus, .jYlMNP:hover {
//   background:transparent;
//   }
//   .hqlNWn {
//     border-radius:10px;
//     background: transparent;
//     background: #48C1EE;
// background: -webkit-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: -moz-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: linear-gradient(to right, #48C1EE 0%, #649645 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
//   }
//   .gtfWbK {
//     padding:25px 0;
//   }
//   .bvcIKP {
//       border-radius:11px;
//       box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5) !important;
//       border: solid 1px transparent !important;
//       background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #8ACF5F, #48C1EE);
//       background-origin: border-box !important;
//       background-clip: content-box, border-box !important;
//       box-shadow: 2px 1000px 1px #000 inset !important;
//   }
//   .iUzUxU , .bntMIQ, .kjeaMa {
//   background: #48C1EE;
// background: -webkit-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: -moz-linear-gradient(to right, #48C1EE 0%, #649645 100%);
// background: linear-gradient(to right, #48C1EE 0%, #649645 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
//   }

// .flmTgw:disabled, .flmTgw.button--disabled {
//   background:#0f0f0f;
//   color: #ffffff30;
// }
// .arsmA[data-reach-dialog-content],.eeinVw {
//   background:#0f0f0f
// }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
`;

export default GlobalStyle;
