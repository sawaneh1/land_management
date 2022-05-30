import React from 'react'
import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import HouseList from 'components/dashboard/HouseList'
// import PostList from './components/PostList'
// import PostCreate from './components/PostCreate'
// import PostEdit from './components/PostEdit'
// import UserList from './components/UserList'
// import UserCreate from './components/UserCreate'
// import UserEdit from './components/UserEdit'

const Dashboard = () => {
  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
      <Resource
        name='houses'
        list={HouseList}
        // create={PostCreate}
        // edit={PostEdit}
      />
      {/* <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      /> */}
    </Admin>
  )
}

export default Dashboard
