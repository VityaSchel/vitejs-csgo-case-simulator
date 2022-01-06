import React from 'react'
import Switch from '/components/Switch/index'
import styles from './styles.module.scss'
import Item from '../components/Item'
import { useSelector, useDispatch } from 'react-redux'
import { useLiveQuery } from 'dexie-react-hooks'
import db from '/db'
import cases, { casesNames } from '/lib/cases'
import { Link } from 'react-router-dom'
import Popup from '/components/Popup/index'
import items from '/lib/items'
import Decimal from 'decimal.js'

export default function Home() {
  const { user } = useSelector(state => ({ user: state.user }))
  const items = useLiveQuery(() => db.items.where({ ownerID: user.id }).toArray())

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <Switch />
        <div className={styles.items}>
          {items?.length
            ? items?.map(({ name }, i) => {
              const isCase = casesNames.includes(name)
              const caseID = isCase && Object.entries(cases).find(caseInfo => caseInfo[1].name === name)[0]

              return isCase
                ? (
                  <Link to={`/open/${caseID}`} style={{ textDecoration: 'none' }} key={i}>
                    <Item name={name} />
                  </Link>
                ) : <InventoryItem name={name} key={i} />
            })
            : <div>Инвентарь пуст. Купите первый кейс и ключ к нему во вкдадке Магазин.</div>
          }
        </div>
      </div>
    </div>
  )
}

function InventoryItem(props:object) {
  const [popupOpened, setPopupOpened] = React.useState(false)
  const price = items[props.name].price
  const { user } = useSelector(state => ({ user: state.user }))
  const { balance } = user
  const dispatch = useDispatch()

  const sellItem = async () => {
    await db.users.update(user.id, { balance: new Decimal(balance).plus(price).toNumber() })
    dispatch({ type: 'user/set', user: await db.users.get(user.id) })
    const item = await db.items.where({ ownerID: user.id, name: props.name }).first()
    await db.items.delete(item.id)
    setPopupOpened(false)
  }

  return (
    <>
      <div onClick={() => setPopupOpened(true)} className={styles.buyButton}>
        <Item name={props.name} />
      </div>
      {popupOpened && <Popup
        item={items[props.name]}
        itemName={props.name}
        description={`Продать этот предмет за $${price}?`}
        onContinue={sellItem}
        onCancel={() => setPopupOpened(false)}
        button='Продать'
      />}
    </>
  )
}