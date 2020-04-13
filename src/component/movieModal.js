import React, { useState } from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import MovieItemContext from './movieItemContext'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

export default function MovieModal(props) {
  const [like, setlike] = useState(false)
  const item = React.useContext(MovieItemContext)

  const onLike = () => {
    setlike(true)
  }

  const onUnLike = () => {
    setlike(false)
  }

  return (
    <div>
      <Modal
        title={item.title}
        visible={props.visible}
        onCancel={props.onCancel}
        footer={like ? <HeartFilled style={{ fontSize: '24px', color:'red' }} onClick={onUnLike} /> :
        <HeartOutlined style={{ fontSize: '24px' }} onClick={onLike} />}
      >
        <img alt="bg" src={item.image_url} style={{ width: '100%' }} />
        <p style={{ paddingTop: '16px' }}>{item.overview}</p>
      </Modal>
    </div>
  )
}