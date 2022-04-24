import React from "react";

export const Stat = ({ stat }) => {
  return (
    <div className="stats__box">
      <p className="stats__number">{stat.number}</p>
      <h4 className="stats__headline">{stat.title}</h4>
      <p className="stats__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
    </div>
  );
};
