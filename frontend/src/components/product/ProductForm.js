import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, createProduct, updateProduct, deleteProduct } from "../../services/productService";

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
    });
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id !== "new") {
            getProductById(id)
                .then((response) => {
                    setProduct(response.data);
                    setFormData(response.data); 
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching product:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [id]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const formattedData = () => ({
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
    });

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id === "new") {
                await createProduct(formattedData());
            } else {
                await updateProduct(id, formattedData());
            }
            navigate("/");
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    
    const handleDelete = async () => {
        try {
            if (product?.id) {
                await deleteProduct(product.id);
                navigate("/");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100" style={{ background: "#f8f9fa" }}>
            <Card className="p-5 shadow-lg w-75" style={{ borderRadius: "15px", background: "#ffffff" }}>
                <Card.Body>
                    <h1 className="fw-bold mb-4 text-center">
                        {product?.id ? "✏️ Edit Product" : "➕ Add Product"}
                    </h1>

                    {loading ? (
                        <div className="d-flex justify-content-center my-5">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group controlId="name">
                                        <Form.Label className="fw-bold">Product Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter product name"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="price">
                                        <Form.Label className="fw-bold">Price ($)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Enter price"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-4 mb-3 justify-content-center">
                                <Col md={4}>
                                    <Form.Group controlId="stock" className="text-center">
                                        <Form.Label className="fw-bold">Stock</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="stock"
                                            value={formData.stock}
                                            onChange={handleChange}
                                            placeholder="Enter stock quantity"
                                            className="text-center"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={12}>
                                    <Form.Group controlId="description">
                                        <Form.Label className="fw-bold">Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder="Enter product description"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <Button type="submit" variant="primary" className="fw-bold px-4 py-2">
                                    💾 Save Product
                                </Button>

                                {product?.id && (
                                    <Button
                                        variant="danger"
                                        className="fw-bold px-4 py-2"
                                        onClick={handleDelete}
                                    >
                                        ❌ Delete
                                    </Button>
                                )}
                            </div>
                        </Form>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductForm;
