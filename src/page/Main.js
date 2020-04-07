import React, { useState, useEffect } from 'react'
import { Layout, Menu, Card, List } from 'antd'
import 'antd/dist/antd.css'
import { BodyContent } from '../component/style'
import TextTruncate from 'react-text-truncate'

export default function Main() {
  const { Header, Footer, Content } = Layout
  const { Meta } = Card
  const axios = require('axios').default
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://workshopup.herokuapp.com/movie')
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(err => {
        console.log('error', err)
      })
  }, [])

  console.log('movies', movies)

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Movie list</Menu.Item>
          <Menu.Item key="2">Favorite</Menu.Item>
          <Menu.Item key="3">Profile</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px 24px 0px 24px' }}>
        <BodyContent>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={movies}
            renderItem={item => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: '100%', height: '50%' }}
                  cover={<img alt="example" src={item.image_url} />}
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
              </List.Item>
            )}
          />

        </BodyContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>My Movies ©2020 Created by Kantapong</Footer>
    </Layout>
  )
} 