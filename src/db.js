import Dexie from 'dexie'
import fakeIndexedDB from 'fake-indexeddb'
import fakeIDBKeyRange from 'fake-indexeddb/lib/FDBKeyRange'

export const indexedDBDisabled = window.location.host.endsWith('.onion')
if(indexedDBDisabled) {
  Dexie.dependencies.indexedDB = fakeIndexedDB
  Dexie.dependencies.IDBKeyRange = fakeIDBKeyRange
}

const db = new Dexie('csdrop')
db.version(1).stores({
  items: ['++id', 'name', 'ownerID'].join(', '),
  users: ['++id', 'name', 'balance'].join(', '),
})

export default db
