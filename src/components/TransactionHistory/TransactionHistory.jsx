import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import {
  TransactionTableBody,
  TransactionContainer,
  TransactionTable,
  TransactionTableHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionContainer>
      <TransactionTable>
        <TransactionTableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TransactionTableHead>
        <TransactionTableBody>
          {items.map(({ type, amount, currency, id }) => (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </TransactionTableBody>
      </TransactionTable>
    </TransactionContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
