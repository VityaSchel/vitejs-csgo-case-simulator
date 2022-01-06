import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'

export default function Switch() {
  const { user: { balance } } = useSelector(state => ({ user: state.user }))

  return (
    <div className={styles.switch}>
      <span />
      <div className={styles.buttons}>
        <Tab to='/'>Инвентарь</Tab>
        <Tab to='/shop'>Магазин</Tab>
        <Tab to='/users'>Выход</Tab>
      </div>
      <span>${balance.toFixed(2)}</span>
    </div>
  )
}

function Tab(props:object) {
  const isHere = window.location.pathname === props.to

  return isHere
    ? <div className={[styles.tab, styles.enabled].join(' ')}>{props.children}</div>
    : (
      <Link to={props.to}>
        <div className={styles.tab}>{props.children}</div>
      </Link>
    )
}