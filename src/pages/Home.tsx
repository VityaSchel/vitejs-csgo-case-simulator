import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import Item from '../components/Item'
import { useSelector } from 'react-redux'
import { useLiveQuery } from 'dexie-react-hooks'
import db from '/db'
import { casesNames, casesKeysNames } from '/lib/cases'

export default function Home() {
  const { user } = useSelector(state => ({ user: state.user }))
  const items = useLiveQuery(() => db.items.where({ ownerID: user.id }).toArray())

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.switch}>
          <div className={[styles.tab, styles.enabled].join(' ')}>Инвентарь</div>
          <Link to='/shop'>
            <div className={styles.tab}>Магазин</div>
          </Link>
          <Link to='/users'>
            <div className={styles.tab}>Выход</div>
          </Link>
        </div>
        <div className={styles.items}>
          {items?.map(({ name }, i) => {
            const isCase = casesNames.includes(name)
            const isCaseKey = casesKeysNames.includes(name)
            console.log(isCase, isCaseKey)

            return <Item name={name} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}