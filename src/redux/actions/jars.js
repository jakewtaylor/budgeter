export const JARS = {
    CREATE: 'JARS:CREATE',
};

export const createJar = (name, target, value, color) => ({
    type: JARS.CREATE,
    payload: {
        name,
        target,
        value,
        color,
    },
});
