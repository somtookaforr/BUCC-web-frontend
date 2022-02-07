import React from "react";
import "../CSS/events.css";
const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pag_body">
      {pageNumbers.map((number, index) => {
        {
          return (
            <a
              key={index}
              onClick={() => paginate(number)}
              className="pag-link"
            >
              {number}
            </a>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
