import styles from './styles.module.scss'
import Button from '/components/Button/index'

export default function Popup(props:object) {
  return (
    <div className={styles.popup} onClick={props.onCancel ?? (() => {/**/})}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={[styles.preview, styles[`rarity-${props.item.rarity}`]].join(' ')}>
          <span>{[props.item.weapon, props.itemName].filter(Boolean).join(' | ')}</span>
          <img src={props.item.image.replace(/\d+fx\d+f$/, '580fx468f')} alt={`${props.item.weapon} | ${props.item.name}`} />
        </div>
        <div className={styles.action}>
          <span>{props.description}</span>
          <Button onClick={props.onContinue} disabled={props.buttonDisabled}>{props.button}</Button>
        </div>
      </div>
    </div>
  )
}