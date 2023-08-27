import { ReactNode } from 'react'
import s from './Header.module.scss'

function Header(): ReactNode {
  return (
    <div className={s.Header}>
      <div>YaMusic YaRadio</div>
      <div>Settings</div>
    </div>
  )
}

export default Header
