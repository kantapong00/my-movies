import React, { useState, useEffect, Suspense } from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { BodyContent, FooterStyle } from '../component/style'
import MovieListContext from '../component/movieListContext'
import loadingIcon from '../component/asset/loading.gif'
const ListItems = React.lazy(() => import('../component/listItem'))

function Main() {
  const { Header, Content } = Layout
  const axios = require('axios').default

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    try {
      let res = await axios.get("http://workshopup.herokuapp.com/movie");
      let data = res.data.results
      setMovies(data)
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Movie list</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px 24px 0px 24px' }}>
        <BodyContent>
          <MovieListContext.Provider value={movies}>
            <Suspense fallback={<img src={loadingIcon} alt="loading" style={{ width: '10%' }} />}>
              <ListItems />
            </Suspense>
          </MovieListContext.Provider>
        </BodyContent>
      </Content>
      <FooterStyle>My Movies ©2020 Created by Kantapong</FooterStyle>
    </Layout>
  )
} 
export default React.memo(Main)