import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPartners } from "../../redux/partnersSlice";
import { Partners } from "../generic/Partners";
import { Pagination } from "../generic/Pagination";
import decoration from "../../assets/Decoration.svg";

export const HomePagination = () => {
  const { partners, isLoading } = useSelector(selectPartners);
  const [currentPage, setCurrentPage] = useState(1);
  const [partnersPerPage] = useState(3);
  const [partnersType, setPartnersType] = useState("Fundacja");

  const indexOfLastPartner = currentPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const partnersToShow = partners.slice(indexOfFirstPartner, indexOfLastPartner);

  const handleClick = (newPartnersType, event) => {
    partnersType !== newPartnersType && setPartnersType(newPartnersType);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="partners">
      <h4 className="partners__title">Komu pomagamy?</h4>
      <img src={decoration} alt="" className="decoration" />

      <div className="partners__buttons buttons-row">
        <button onClick={(event) => handleClick("Fundacja")} className={"button" + (partnersType === "Fundacja" ? " active" : "")}>
          Fundacjom
        </button>
        <button onClick={(event) => handleClick("Organizacja")} className={"button" + (partnersType === "Organizacja" ? " active" : "")}>
          Organizacjom
        </button>
        <button onClick={(event) => handleClick("Zbiórka")} className={"button" + (partnersType === "Zbiórka" ? " active" : "")}>
          Lokalnym
          <br />
          zbiórkom
        </button>
      </div>
      <p className="partners__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

      <Partners partners={partnersToShow} partnersType={partnersType} loading={isLoading} />
      <Pagination currentPage={currentPage} partnersPerPage={partnersPerPage} totalPartners={partners.length} paginate={paginate} />
    </div>
  );
};
