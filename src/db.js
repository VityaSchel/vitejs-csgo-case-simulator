import Dexie from 'dexie'

const db = new Dexie('csdrop')
db.version(1).stores({
  items: ['++id', 'name', 'ownerID'].join(', '),
  users: ['++id', 'name', 'balance'].join(', '),
})

export default db
