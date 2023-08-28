import s from './Default.module.scss'
import { ReactNode } from 'react'
import { Header } from '@renderer/components'

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
