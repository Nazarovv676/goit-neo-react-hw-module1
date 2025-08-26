import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          const { id, type, amount, currency } = item;
          return (
            <tr key={id}>
              <td>{capitalizeFirstLetter(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.PropTypes = {
  items: PropTypes.array,
};

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default TransactionHistory;
