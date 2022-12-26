import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        height: 100%;
        font-size: 12px;

        @media (min-width: 768px) {
            font-size: 14px;
        }

        @media (min-width: 1000px) {
            font-size: 16px;
        }
    }
    
    input[type='submit'], button {
      border: 0;
      cursor: pointer;
    }

    input[type='file'] { display: none; }
    
    ul { list-style-type: none; }
    
    textarea { resize: none; }
    
    a { text-decoration: none; }

`;

export default GlobalStyle;