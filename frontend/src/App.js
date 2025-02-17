import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Container } from "@mui/material";

const App = () => {
    return (
        <Router>
            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
