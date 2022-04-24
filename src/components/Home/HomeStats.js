import React from "react";
import { Stat } from "./HomeStatsStat";

export const HomeStats = () => {
  const stats = [
    { title: "ODDANYCH WORKÓW", number: 10 },
    { title: "WSPARTYCH ORGANIZACJI", number: 5 },
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
