import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { BodyContent, FooterStyle } from '../component/style'
import loadingIcon from '../component/asset/loading.gif'
import MovieListContext from '../component/movieListContext'
import ListItems from '../component/listItem'

export default function Main() {
  const { Header, Content } = Layout
  const axios = require('axios').default

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://workshopup.herokuapp.com/movie')
      .then(res => {
        setLoading(false)
        setMovies(res.data.results)
      })
      .catch(err => {
        console.log('error', err)
      })
  }, [axios])

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Movie list</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px 24px 0px 24px' }}>
        <BodyContent>
          {loading ?
            <img src={loadingIcon} alt="loading" style={{ width: '64px' }} /> :
            <MovieListContext.Provider value={movies}>
              <ListItems />
            </MovieListContext.Provider>
          }
        </BodyContent>
      </Content>
      <FooterStyle>My Movies ©2020 Created by Kantapong</FooterStyle>
    </Layout>
  )
} 