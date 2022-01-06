import styles from './styles.module.scss'

export default function Button(props:object) {
  return (
    <button className={styles.container} {...props}>{props.children}</button>
  )
}