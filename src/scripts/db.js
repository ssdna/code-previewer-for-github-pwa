import idb from 'idb';

const dbPromise = idb.open('code-viewer-store', 1, upgradeDB => {
    upgradeDB.createObjectStore('code-viewer');
});

export const appDB = {
    get(key) {
        return dbPromise.then(db => {
            return db.transaction('code-viewer')
                .objectStore('code-viewer').get(key);
        });
    },
    set(key, val) {
        return dbPromise.then(db => {
            const tx = db.transaction('code-viewer', 'readwrite');
            tx.objectStore('code-viewer').put(val, key);
            return tx.complete;
        });
    },
    delete(key) {
        return dbPromise.then(db => {
            const tx = db.transaction('code-viewer', 'readwrite');
            tx.objectStore('code-viewer').delete(key);
            return tx.complete;
        });
    },
    clear() {
        return dbPromise.then(db => {
            const tx = db.transaction('code-viewer', 'readwrite');
            tx.objectStore('code-viewer').clear();
            return tx.complete;
        });
    },
    keys() {
        return dbPromise.then(db => {
            const tx = db.transaction('code-viewer');
            const keys = [];
            const store = tx.objectStore('code-viewer');

            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // openKeyCursor isn't supported by Safari, so we fall back
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });

            return tx.complete.then(() => keys);
        });
    }
};