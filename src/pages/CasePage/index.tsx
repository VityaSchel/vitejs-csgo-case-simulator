import React from 'react'
import styles from './styles.module.scss'
import {
  useParams,
  useNavigate,
  Link
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import cases from '/lib/cases.js'
import Roulette from './Roulette'
import Item from '/components/Item/index'
import Button from '/components/Button/index'
import Popup from '/components/Popup/index'
import db from '/db'

export default function CasePage() {
  const params = useParams()
  const caseInfo = cases[params.case] ?? {}

  return (
    <div className={styles.case}>
      <CaseInfo case={caseInfo} />
      <Items items={caseInfo.items} />
    </div>
  )
}

function CaseInfo(props:object) {
  const [opening, setOpening] = React.useState(false)
  const [popupItem, setPopupItem] = React.useState()
  const navigate = useNavigate()
  const { user } = useSelector(state => ({ user: state.user }))

  const handleDrop = item => {
    db.items.add({ name: item.name, ownerID: user.id })
    setPopupItem(item)
  }

  return (
    <>
      <div className={styles.caseInfo}>
        {opening
          ? <Roulette onDrop={handleDrop} case={props.case} />
          : <Targets onOpen={() => setOpening(true)} case={props.case} />
        }
        <span className={styles.possibleItems}>Предметы, которые могут быть в этом кейсе:</span>
      </div>
      {popupItem && <Popup
        item={popupItem}
        onContinue={() => navigate('/')}
        description='Вы получили новый предмет!'
        button='Продолжить'
      />}
    </>
  )
}

function Targets(props:object) {
  return (
    <>
      <div className={styles.header}>
        <span />
        <span className={styles.title}>Осмотр {props.case.name}</span>
        <Link to='/'>
          <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" fill="currentColor"></path></svg>
        </Link>
      </div>
      <div className={styles.targets}>
        <div className={styles.key}><Item name={props.case.keyName} /></div>
        <div className={styles.case}><Item name={props.case.name} /></div>
      </div>
      <span className={styles.hint}>Ключ можно использовать только один раз</span>
      <Button onClick={props.onOpen}>Использовать ключ</Button>
    </>
  )
}

function Items(props:object) {
  return (
    <div className={styles.items}>
      {props.items.map((item, i) => <Item name={item} key={i} />)}
    </div>
  )
}