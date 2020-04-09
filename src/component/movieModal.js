import React from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import MovieItemContext from './movieItemContext'

export default function MovieModal(props) {
  const item = React.useContext(MovieItemContext)

  return (
    <div>
      <Modal
        title={item.title}
        visible={props.visible}
        onCancel={props.onCancel}
        footer={<div>55555</div>}
      >
        <img alt="example" src={item.image_url} style={{width:'100%'}} />
        <p style={{paddingTop:'16px'}}>{item.overview}</p>
        <p>{Math.random()}</p>
      </Modal>
    </div>
  )
}