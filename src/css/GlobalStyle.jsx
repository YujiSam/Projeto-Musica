import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: gold black; 
}

body {
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

::-webkit-scrollbar {
    width: 12px; 
}

::-webkit-scrollbar-track {
    background-color: black; 
}

::-webkit-scrollbar-thumb {
    background-color: gold; 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: gold; 
}

`

export default GlobalStyle;
