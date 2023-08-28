import s from './Header.module.scss'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

function Header(): ReactNode {
  return (
    <div className={s.Header}>
      <div className={s.Header__links}>
        <Link to={'/'}>Music</Link>
        <Link to={'/radio'}>Radio</Link>
      </div>
      <div>
        Settings
      </div>
    </div>
  )
}

export default Header
