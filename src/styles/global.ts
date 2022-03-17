import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --gray-50: #F7FAFC;
        --gray-100: #EDF2F7;
        --gray-200: #E2E8F0;
        --gray-300: #CBD5E0;
        --gray-500: #718096;
        --gray-600: #4A5568;
        --gray-700: #2D3748;
        --gray-800: #1A202C
        --gray-900: #171923;

        --red-50: #FFF5F5;
        --red-100: #FED7D7;
        --red-200: #FEB2B2;
        --red-300: #FC8181;
        --red-400: #F56565;
        --red-500: #E53E3E;
        --red-600: #C53030;
        --red-700: #9B2C2C;
        --red-800: #822727;
        --red-900: #63171B;

        --red-hero: #E02041;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button {
        font-family: 'Roboto';
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }
`;
