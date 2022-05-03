import React from "react";

export const Pagination = ({ partnersPerPage, totalPartners, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPartners / partnersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="partners__nav buttons-row">
        {pageNumbers.map((number) => (
          <li key={number} className="partners__nav__button button">
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
