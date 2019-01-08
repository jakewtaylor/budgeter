import { connect } from 'react-redux';
import moment from 'moment';

import { Activity } from './Activity';

const mapStateToProps = (state) => {
    const { currencySymbol } = state.preferences;

    const transactions = [...state.transactions]
        .reverse()
        .map((transaction) => {
            const { amount, timestamp } = transaction;

            const signifier = amount < 0 ? '-' : '+';
            const value = Math.abs(amount).toLocaleString();

            return {
                ...transaction,
                valueString: `${signifier} ${currencySymbol}${value}`,
                moment: moment(timestamp),
            };
        });

    return { transactions };
};

export default connect(mapStateToProps)(Activity);
