import HashTable from "./hash-table.js";

const hashTable = new HashTable(2);

hashTable.set('city', 'Wien');
hashTable.set('age', 25);
hashTable.set('weather', 'sun');

console.log(hashTable.data, hashTable.get('weather'), hashTable.keys());