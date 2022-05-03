import React from "react";

export const Partners = ({ partners, loading, partnersType }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="partners__list">
      {partners.map((partner) => (
        <li key={partner.id} className="partners__list__item partner">
          <div>
            <h5 className="partner__title">
              {partnersType} "{partner.title}"
            </h5>
            <p className="partner__mission">Cel i misja: {partner.mission}</p>
          </div>
          <p className="partner__items">{partner.items}</p>
        </li>
      ))}
    </ul>
  );
};
