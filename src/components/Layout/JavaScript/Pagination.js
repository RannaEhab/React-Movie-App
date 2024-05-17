import { useState, useEffect } from 'react';
import './../Styles/Pagination.css';

function Pagination({ totalPages, currentPage, handlePageChange }) {
    const [visiblePages, setVisiblePages] = useState([]);

    useEffect(() => {
        const calculateVisiblePages = () => {
            const visibleCount = 5; // Number of visible page links
            const halfVisible = Math.floor(visibleCount / 2);
            let start = Math.max(currentPage - halfVisible, 1);
            let end = Math.min(start + visibleCount - 1, totalPages);

            // Adjust start if we reach near the end
            if (end === totalPages) {
                start = Math.max(totalPages - visibleCount + 1, 1);
            }

            setVisiblePages(Array.from({ length: end - start + 1 }, (_, i) => start + i));
        };

        calculateVisiblePages();
    }, [totalPages, currentPage]);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <a className="page-link" href="#" aria-label="Previous" onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}>
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                {visiblePages.map((page) => (
                    <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                        <a className="page-link" href="#" onClick={() => handlePageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <a className="page-link" href="#" aria-label="Next" onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}>
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
