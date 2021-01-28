import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      {items.map((item, index) => (
        <tbody className={s.tbody}>
          <tr className={index % 2 ? s.even : s.odd} id={item.id}>
            <td className={s.td}>{item.type}</td>
            <td className={s.td}>{item.amount}</td>
            <td className={s.td}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default TransactionHistory;
