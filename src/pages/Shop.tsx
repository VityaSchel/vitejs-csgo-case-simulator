import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import db from '/db'
import { casesNames, casesKeysNames } from '/lib/cases'
import items from '/lib/items'
import Item from '/components/Item/index'
import Popup from '/components/Popup/index'

const shop = [...casesNames, ...casesKeysNames]

export default function Shop() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.switch}>
          <Link to='/'>
            <div className={styles.tab}>Инвентарь</div>
          </Link>
          <div className={[styles.tab, styles.enabled].join(' ')}>Магазин</div>
          <Link to='/users'>
            <div className={styles.tab}>Выход</div>
          </Link>
        </div>
        <div className={styles.items}>
          {shop.map((name, i) => {
            return (
              <>
                <Item name={name} key={i} />
                <Popup
                  item={items[name]}
                  description={`Купить этот предмет за $${items[name].price}?`}
                />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
