import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { AddTransaction as Component } from './AddTransaction';
import { createTransaction } from '../../redux/actions/transactions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    addTransaction (amount, label) {
        const timestamp = moment().valueOf();
        dispatch(createTransaction(amount, label, timestamp));
    },
});

export const AddTransaction = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Component),
);
