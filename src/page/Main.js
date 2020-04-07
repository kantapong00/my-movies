import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { BodyContent } from '../component/style'

export default function Main() {
  const { Header, Footer, Content } = Layout
  const axios = require('axios').default
  const [movies, setMovies] = useState({})

  useEffect(() => {
    axios.get('http://workshopup.herokuapp.com/movie')
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(err => {
        console.log('error', err)
      })
  }, [])

  console.log('movies',movies)

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px 24px 0px 24px' }}>
        <BodyContent>Content</BodyContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>My Movies ©2020 Created by Kantapong</Footer>
    </Layout>
  )
} 