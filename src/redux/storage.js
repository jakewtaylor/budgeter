export class Storage {
    static key = 'state';

    static load () {
        try {
            const serializedState = localStorage.getItem(Storage.key);

            if (serializedState === null) {
                return undefined;
            }

            return JSON.parse(serializedState);
        } catch (e) {
            console.dir(e);
            return undefined;
        }
    }

    static save (state) {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem(Storage.key, serializedState);
        } catch (e) {
            console.dir(e);
        }
    }
}
