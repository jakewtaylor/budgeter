import uuid from 'uuid/v4';
import { JARS } from '../actions/jars';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case JARS.CREATE:
            return {
                ...state,
                [uuid()]: action.payload,
            };

        default:
            return state;
    }
};
