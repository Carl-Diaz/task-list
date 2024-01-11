// index.js o index.jsx
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App"; // Asegúrate de ajustar la ruta a tu componente principal
import theme from "./theme"; // Importa tu archivo de tema personalizado

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
