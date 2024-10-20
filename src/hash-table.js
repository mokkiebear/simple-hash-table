export default class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
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

        return currentBucket.find((row) => row[0] === key)[1];
    }
}
