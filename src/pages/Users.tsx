import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import db from '/db'
import styles from './styles.module.scss'
import Button from '/components/Button/index'
import _ from 'lodash'
import getRandomAvatar from 'random-steam-avatar'

export default function Users() {
  const users = useLiveQuery(() => db.users.toArray())
  const [creating, setCreating] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCreateUser = async () => {
    setCreating(true)
    const randomName = () => {
      const firstName = _.sample(['Liam', 'Noah', 'Oliver', 'William', 'Elijah', 'James', 'Benjamin', 'Lucas', 'Mason', 'Ethan', 'Thomas', 'Jackson'])
      const lastName = _.sample(['Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzales'])
      return `${firstName} ${lastName}`
    }

    const avatars = await getRandomAvatar()
    await db.users.add({ name: randomName(), balance: 100, avatar: avatars[0] })
    setCreating(false)
  }

  const loginAs = userID => async () => {
    const user = await db.users.where({ id: userID }).first()
    await dispatch({ type: 'user/set', user })
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        {users && <div className={styles.users}>
          {users?.length
            ? users.map((user, i) => <button key={i} className={styles.user} onClick={loginAs(user.id)}>
              <img src={user.avatar} width={30} />
              <span className={styles.name}>{user.name}</span>
              <span>{user.balance.toFixed(2)}$</span>
            </button>)
            : <div>Нет созданных пользователей</div>
          }
          <Button onClick={handleCreateUser} disabled={creating}>
            {creating
              ? 'Идет создание пользователя...'
              : 'Создать пользователя'
            }
          </Button>
        </div>}
      </div>
    </div>
  )
}