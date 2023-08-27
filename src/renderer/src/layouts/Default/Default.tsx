import s from './Default.module.scss'
import Header from '@renderer/components/Header/Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Default({ children }: Props): ReactNode {
  return (
    <div className={s.Default}>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Default
