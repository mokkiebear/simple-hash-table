export default class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        if (typeof key !== 'string') {
            key = String(key);
        }

        let hash = 0;
        for (let i = 0; i < key.length; ++i) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    // O(1)
    set(key, value) {
        const address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
    }

    // O(1) - without collisions, or O(n)
    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];

        if (!currentBucket) {
            return undefined;
        }

        if (currentBucket.length === 1) {
            return currentBucket;
        }

        const foundPair = currentBucket.find(row => row[0] === key);

        return foundPair ? foundPair[1] : undefined;
    }

    keys() {
        const keysArray = [];

        this.data.forEach((bucket) => {
            if (bucket) {
                bucket.forEach((innerBucket) => {
                    keysArray.push(innerBucket[0]);
                });
            }
        });

        return keysArray;
    }

    delete(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];

        if (!currentBucket) {
            return false;
        }

        const index = currentBucket.findIndex(pair => pair[0] === key);

        if (index !== -1) {
            currentBucket.splice(index, 1);
            return true; // Элемент успешно удален
        }

        return false; // Элемент не найден
    }
}
