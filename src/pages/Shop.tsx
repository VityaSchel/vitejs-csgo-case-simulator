import React from 'react'
import Switch from '/components/Switch/index'
import styles from './styles.module.scss'
import db from '/db'
import { casesNames, casesKeysNames } from '/lib/cases'
import items from '/lib/items'
import Item from '/components/Item/index'
import Popup from '/components/Popup/index'
import { useSelector } from 'react-redux'

const shop = [...casesNames, ...casesKeysNames]

export default function Shop() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <Switch />
        <div className={styles.items}>
          {shop.map((name, i) => <ShopItem name={name} key={i} />)}
        </div>
      </div>
    </div>
  )
}

function ShopItem(props:object) {
  const [popupOpened, setPopupOpened] = React.useState(false)
  const price = items[props.name].price
  const { user: { balance } } = useSelector(state => ({ user: state.user }))

  return (
    <>
      <div onClick={() => setPopupOpened(true)} className={styles.buyButton}>
        <Item name={props.name} />
      </div>
      {popupOpened && <Popup
        item={items[props.name]}
        itemName={props.name}
        description={`Купить этот предмет за $${price}?`}
        onCancel={() => setPopupOpened(false)}
        button={balance < price ? 'Не хватает денег' : 'Приобрести'}
        buttonDisabled={balance < price}
      />}
    </>
  )
}