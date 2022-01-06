import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import CasePage from './pages/CasePage'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Users from './pages/Users'

function App() {
  const { user } = useSelector(state => ({ user: state.user }))

  return (
    <Router>
      <Routes>
        <Route path={user ? '/users' : '*'} element={<Users />} />
        {user && <>
          <Route path='/open/:case' element={<CasePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/' element={<Home />} />
        </>}
      </Routes>
    </Router>
  )
}

export default App
