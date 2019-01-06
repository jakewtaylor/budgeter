import { connect } from 'react-redux';

import { Jars } from './Jars';

const mapStateToProps = (state) => {
    const { currencySymbol } = state.preferences;

    const jars = Object.entries(state.jars).map(([id, jar]) => ({
        id,
        ...jar,
        value: currencySymbol + jar.value.toLocaleString(),
        target: currencySymbol + jar.target.toLocaleString(),
    }));

    return { jars };
};

export default connect(mapStateToProps)(Jars);
