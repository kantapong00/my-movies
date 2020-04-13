import React from 'react'
import { List } from 'antd'
import 'antd/dist/antd.css'
import MovieListContext from './movieListContext'
import MovieItemContext from './movieItemContext'
const CardItems = React.lazy(() => import('./cardItem'))


export default function ListItems() {

  const movies = React.useContext(MovieListContext)

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={movies}
      renderItem={item => (
        <List.Item>
          <MovieItemContext.Provider value={item}>
            <CardItems />
          </MovieItemContext.Provider>
        </List.Item>
      )}
    />
  )
}