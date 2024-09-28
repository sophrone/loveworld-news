import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button 
          key={index} 
          onClick={() => onPageChange(index + 1)} 
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
