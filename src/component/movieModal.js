import React, { useState } from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import MovieItemContext from './movieItemContext'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { LikeIcon } from './style'

export default function MovieModal(props) {
  const [like, setlike] = useState(false)
  const item = React.useContext(MovieItemContext)

  const onLike = () => {
    setlike(!like)
  }

  return (
    <div>
      <Modal
        title={item.title}
        visible={props.visible}
        onCancel={props.onCancel}
        footer={
          like ?
            <LikeIcon like><HeartFilled onClick={onLike} /></LikeIcon> :
            <LikeIcon><HeartOutlined onClick={onLike} /></LikeIcon>
        }
      >
        <img alt="bg" src={item.image_url} style={{ width: '100%' }} />
        <p style={{ paddingTop: '16px' }}>{item.overview}</p>
      </Modal>
    </div>
  )
}