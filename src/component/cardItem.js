/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Card, Typography } from 'antd'
import 'antd/dist/antd.css'
import MovieItemContext from './movieItemContext'
const MovieModal = React.lazy(() => import('./movieModal'))

export default function CardItems(props) {
  const { Meta } = Card
  const { Paragraph } = Typography
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
          < Paragraph ellipsis={{ rows: 2, expandable: true, }}>
            {item.overview}
          </Paragraph>
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