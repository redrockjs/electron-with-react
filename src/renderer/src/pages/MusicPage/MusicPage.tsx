import { ReactNode } from 'react'

function MusicPage(): ReactNode {
  return (
    <div>
      <webview
        id="foo"
        src="https://music.yandex.ru"
        style={{ display: 'flex', width: '100%', height: 'calc(100vh - 60px)' }}
      ></webview>
    </div>
  )
}

export default MusicPage
