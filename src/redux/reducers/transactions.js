import { TRANSACTIONS } from "../actions/transactions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case TRANSACTIONS.CREATE:
            return [
                ...state,
                {
                    ...action.payload,
                },
            ];

        default:
            return state;
    }
}
