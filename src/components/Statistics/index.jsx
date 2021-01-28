import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.container}>
      {/* </section>title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>. */}
      <h2 className={s.title}>{title}</h2>

      <ul className={s.list}>
        {stats.map((item) => (
          <li className={s.item} id={item.id}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
