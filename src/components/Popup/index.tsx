import styles from './styles.module.scss'
import Button from '/components/Button/index'

export default function Popup(props:object) {
  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <div className={[styles.preview, styles[`rarity-${props.item.rarity}`]].join(' ')}>
          <span>{props.item.weapon} | {props.item.name}</span>
          <img src={props.item.image.replace('120fx90f', '580fx468f')} alt={`${props.item.weapon} | ${props.item.name}`} />
        </div>
        <div className={styles.action}>
          <span>{props.description}</span>
          <Button onClick={props.onContinue}>Продолжить</Button>
        </div>
      </div>
    </div>
  )
}