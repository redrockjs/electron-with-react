import { ReactNode } from 'react'

function RadioPage(): ReactNode {
  return (
    <div>
      <webview
        id="foo"
        src="https://music.yandex.ru/radio"
        style={{ display: 'flex', width: '100%', height: 'calc(100vh - 60px)' }}
      ></webview>
    </div>
  )
}

export default RadioPage
