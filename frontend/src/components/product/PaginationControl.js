import React from "react";
import { Pagination, Form } from "react-bootstrap";

const PaginationControl = ({ totalPages, currentPage, setCurrentPage, pageSize, setPageSize }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
                <span>Rows per page: </span>
                <Form.Select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        setCurrentPage(1);
                    }}
                    style={{ width: "100px", display: "inline-block", marginLeft: "5px" }}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </Form.Select>
            </div>

            <Pagination>
                <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
                {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
    );
};

export default PaginationControl;
