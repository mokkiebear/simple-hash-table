import HashTable from './hash-table';

describe("HashTable", () => {
    describe("Hash method", () => {
        it("should generate hash correctly", () => {
            const hashTable = new HashTable(5);

            const address = hashTable._hash('Amazing');

            expect(address).toBe(2);
        });
    });
});