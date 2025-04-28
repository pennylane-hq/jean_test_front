import { Pagination as BootstrapPagination } from 'react-bootstrap'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const getPageNumbers = ({ currentPage, totalPages }: {currentPage: number, totalPages: number}) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // If we're near the start (first 3 pages)
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5]
  }

  // If we're near the end (last 3 pages)
  if (currentPage >= totalPages - 2) {
    return Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)
  }

  // Otherwise show current page with 2 pages before and after
  return Array.from({ length: 5 }, (_, i) => currentPage - 2 + i)
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps): React.ReactElement => {
  return (
    <BootstrapPagination className="justify-content-center mt-3">
      <BootstrapPagination.First 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
      />
      <BootstrapPagination.Prev 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      />
      
      {getPageNumbers({ currentPage, totalPages }).map((page) => (
        <BootstrapPagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </BootstrapPagination.Item>
      ))}
      
      <BootstrapPagination.Next 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      />
      <BootstrapPagination.Last 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages}
      />
    </BootstrapPagination>
  )
}

export default Pagination 