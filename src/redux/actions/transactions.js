export const TRANSACTIONS = {
    CREATE: 'TRANSACTIONS:CREATE',
};

export const createTransaction = (amount, label, timestamp, linked = null) => ({
    type: TRANSACTIONS.CREATE,
    payload: {
        amount,
        label,
        linked,
        timestamp,
    },
});
