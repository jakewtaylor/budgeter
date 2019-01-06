import { connect } from 'react-redux';

import { Balance } from './Balance';

const mapStateToProps = (state) => {
    const { currencySymbol } = state.preferences;
    const balance = currencySymbol + state.transactions.reduce(
        (acc, transaction) => acc + transaction.amount,
        0,
    ).toLocaleString();

    return { balance };
};

export default connect(mapStateToProps)(Balance);
