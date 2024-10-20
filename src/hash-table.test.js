import HashTable from './hash-table';

describe('HashTable', () => {
    let hashTable;

    beforeEach(() => {
        hashTable = new HashTable(50); // Создаем таблицу с 50 ячейками
    });

    test('sets and gets values correctly', () => {
        hashTable.set('name', 'Max');
        expect(hashTable.get('name')).toBe('Max');

        hashTable.set('age', 25);
        expect(hashTable.get('age')).toBe(25);
    });

    test('handles collisions properly', () => {
        hashTable.set('name', 'Alice');
        hashTable.set('eman', 'Bob'); // 'name' и 'eman' могут иметь одинаковый хэш
        expect(hashTable.get('name')).toBe('Alice');
        expect(hashTable.get('eman')).toBe('Bob');
    });

    test('returns undefined for non-existent keys', () => {
        expect(hashTable.get('unknown')).toBeUndefined();
    });

    test('can delete keys', () => {
        hashTable.set('country', 'Austria');
        expect(hashTable.get('country')).toBe('Austria');

        hashTable.delete('country');
        expect(hashTable.get('country')).toBeUndefined();
    });

    test('returns correct keys', () => {
        hashTable.set('one', 1);
        hashTable.set('two', 2);
        hashTable.set('three', 3);
        expect(hashTable.keys()).toEqual(expect.arrayContaining(['one', 'two', 'three']));
    });

    test.skip('updates value when key already exists', () => {
        hashTable.set('city', 'Graz');
        expect(hashTable.get('city')).toBe('Graz');

        hashTable.set('city', 'Vienna');
        expect(hashTable.get('city')).toBe('Vienna');
    });
});