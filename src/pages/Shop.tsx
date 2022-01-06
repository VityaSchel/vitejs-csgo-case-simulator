import React from 'react'
import Switch from '/components/Switch/index'
import styles from './styles.module.scss'
import db from '/db'
import cases, { casesNames, casesKeysNames } from '/lib/cases'
import items from '/lib/items'
import Item from '/components/Item/index'
import Popup from '/components/Popup/index'
import { useSelector, useDispatch } from 'react-redux'
import D from 'decimal.js'
import Button from '/components/Button/index'
import _ from 'lodash'

const shop = [...casesNames, ...casesKeysNames]

export default function Shop() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <Switch />
        <div className={styles.items}>
          {shop.map((name, i) => <ShopItem name={name} key={i} />)}
        </div>
        {casesNames.map((caseName, i) => <Kit name={caseName} key={i} />)}
      </div>
    </div>
  )
}

function ShopItem(props:object) {
  const [popupOpened, setPopupOpened] = React.useState(false)
  const price = items[props.name].price
  const { user } = useSelector(state => ({ user: state.user }))
  const { balance } = user
  const dispatch = useDispatch()


  const purchaseItem = async () => {
    await db.users.update(user.id, { balance: new D(balance).minus(price).toNumber() })
    dispatch({ type: 'user/set', user: await db.users.get(user.id) })
    await db.items.add({ ownerID: user.id, name: props.name })
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
        description={`Купить этот предмет за $${price}?`}
        onContinue={purchaseItem}
        onCancel={() => setPopupOpened(false)}
        button={balance < price ? 'Не хватает денег' : 'Приобрести'}
        buttonDisabled={balance < price}
      />}
    </>
  )
}

function Kit(props:object) {
  const [popupOpened, setPopupOpened] = React.useState(false)
  const caseInfo = Object.entries(cases).find(caseInfo => props.name === caseInfo[1].name)
  const caseItem = items[props.name]
  const caseKeyItem = items[caseInfo[1].keyName]
  const price = new D(caseItem.price * 10 + caseKeyItem.price * 10).mul(0.81)
  const kitName = `Комплект ${_.capitalize(caseInfo[0])} (10 кейсов и 10 ключей)`
  const { user } = useSelector(state => ({ user: state.user }))
  const { balance } = user
  const dispatch = useDispatch()

  const purchaseKit = async () => {
    await db.users.update(user.id, { balance: new D(balance).minus(price).toNumber() })
    dispatch({ type: 'user/set', user: await db.users.get(user.id) })
    setPopupOpened(false)
    for(let i = 0; i < 10; i++) {
      await db.items.add({ ownerID: user.id, name: props.name })
      await db.items.add({ ownerID: user.id, name: caseInfo[1].keyName })
    }
  }

  return (
    <>
      <div className={styles.kit}>
        <span>{kitName}</span>
        <div className={styles.images}>
          <img src={caseItem.image} />
          <img src={caseKeyItem.image} />
        </div>
        <Button onClick={() => setPopupOpened(true)}>Купить за ${price.toFixed(2)} (-19%)</Button>
      </div>
      {popupOpened && <Popup
        item={caseItem}
        itemName={kitName}
        description={`Купить этот комплект за $${price.toFixed(2)}?`}
        onContinue={purchaseKit}
        onCancel={() => setPopupOpened(false)}
        button={balance < price ? 'Не хватает денег' : 'Приобрести'}
        buttonDisabled={balance < price}
      />}
    </>
  )
}