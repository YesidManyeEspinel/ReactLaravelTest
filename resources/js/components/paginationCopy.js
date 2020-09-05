import React from 'react';

const Pagination = ({ lastPage, fullClients, paginate, currentPage, numberItems, clientsPage }) => {
  const pageNumbers = [];
  const fullPage = lastPage;
  const limitMax = fullPage - numberItems;

  if (lastPage <= numberItems) {
    for (let i = 1; i <= lastPage; i++) {
        pageNumbers.push(i);
      }
  }else{
    if(currentPage >= limitMax){
      for (let i = limitMax; i <= fullPage; i++) {
        pageNumbers.push(i);
      }
    }else{
      if (currentPage <= numberItems) {
        for (let i = 1; i <= numberItems; i++) {
          pageNumbers.push(i);
        }
      }else{
        for (let i = currentPage-1; i <= currentPage+1; i++) {
          pageNumbers.push(i);
        }
      }
    }
  }


  if (fullClients < clientsPage) {
    return <h2 className='text-center'>+</h2>;
  }
  
  return (
    <nav>
      <ul className='pagination text-primary justify-content-end row'>
        <li className='page-item'>
          <p className="page-link">Total: {fullClients}</p>
        </li>
        <li className='page-item'>
          <a className="page-link">View</a>
        </li>
        <select className='custom-select col-1'>
          <option value='20'>20</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select>
        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => paginate(currentPage-1)}>
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className={currentPage <= 3 ? 'd-none d-print-block' : 'page-item'}>
          <a className="page-link text-success" onClick={() => paginate(1)}>
            1
          </a>
        </li>
        {
          pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>)
          )
        }
        <li className={fullPage === pageNumbers[numberItems] ? 'd-none d-print-block' : 'page-item'}>
          <a className="page-link text-success" onClick={() => paginate(fullPage)}>
            {fullPage}
          </a>
        </li>
        <li className={currentPage === pageNumbers[numberItems] ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => paginate(currentPage+1)}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;