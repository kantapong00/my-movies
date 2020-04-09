/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import TextTruncate from 'react-text-truncate'
import MovieModal from './movieModal'
import MovieItemContext from './movieItemContext'

export default function CardItems(props) {
  const { Meta } = Card
  const item = React.useContext(MovieItemContext)
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = e => {
    setVisible(false)
  }

  const handleCancel = e => {
    setVisible(false)
  }

  return (
    <div>
      <Card
        hoverable
        style={{ width: '100%', height: '50%' }}
        cover={<img alt="example" src={item.image_url} />}
        onClick={() => showModal()}
      >
        <Meta title={item.title} description={
          <TextTruncate
            line={3}
            truncateText="..."
            text={item.overview}
            textTruncateChild={<a href="#">Read more</a>}
          />
        } />
      </Card>

      <MovieModal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  )
} 