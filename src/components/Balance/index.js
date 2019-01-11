import { connect } from 'react-redux';

import { Balance } from './Balance';

const mapStateToProps = (state) => {
    const { currencySymbol } = state.preferences;
    let balance = state.transactions.reduce((acc, transaction) => acc + transaction.amount, 0)

    balance = balance.toLocaleString(undefined, {
        minimumFractionDigits: Number.isInteger(balance) ? 0 : 2,
    });

    balance = currencySymbol + balance;

    return { balance };
};

export default connect(mapStateToProps)(Balance);
