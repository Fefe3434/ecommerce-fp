import React, { useEffect, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductTable from "../components/product/ProductTable";
import PaginationControl from "../components/product/PaginationControl";
import { getProducts, deleteProduct } from "../services/productService";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        getProducts()
            .then((response) => setProducts(response.data))
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter((p) => p.id !== id));
        } catch (error) {
        }
    };

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / pageSize);
    const displayedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center my-3">
                <h2>Product Catalog</h2>
                <Button as={Link} to="/product/new" variant="success">
                    + Add Product
                </Button>
            </div>

            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </Form.Group>

            <ProductTable products={displayedProducts} handleDelete={handleDelete} />

            <PaginationControl
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
        </Container>
    );
};

export default HomePage;
