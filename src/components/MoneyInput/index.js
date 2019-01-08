import { connect } from 'react-redux';

import { MoneyInput } from './MoneyInput';

const mapStateToProps = (state) => {
    const { currencySymbol } = state.preferences;

    return { currencySymbol };
};

export default connect(mapStateToProps)(MoneyInput);
