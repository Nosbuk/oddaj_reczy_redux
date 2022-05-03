import React from "react";
import { Stat } from "./HomeStatsStat";
import { useSelector } from "react-redux";
import { selectPartners } from "../../redux/partnersSlice";

export const HomeStats = () => {
  const { partnersCount } = useSelector(selectPartners);
  const stats = [
    { title: "ODDANYCH WORKÓW", number: 10 },
    { title: "WSPARTYCH ORGANIZACJI", number: partnersCount },
    { title: "ZORGANIZOWANYCH ZBIÓREK", number: 7 },
  ];

  return (
    <section className="stats">
      <div className="stats__container">
        {stats.map((stat) => (
          <Stat key={stat.title} stat={stat} />
        ))}
      </div>
    </section>
  );
};
