import React from 'react'
import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import HouseList from 'components/dashboard/HouseList'
import HouseCreate from 'components/dashboard/HouseCreate'
import HouseEdit from 'components/dashboard/HouseEdit'
import PaymentList from 'components/dashboard/PaymentList'
import PaymentEdit from 'components/dashboard/PaymentEdit'
import Contacts from 'components/dashboard/Contacts'

const Dashboard = () => {
  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
      <Resource
        name='houses'
        list={HouseList}
        create={HouseCreate}
        edit={HouseEdit}
      />
      <Resource name='payments' list={PaymentList} edit={PaymentEdit} />
      <Resource name='Contacts' list={Contacts} />
    </Admin>
  )
}

export default Dashboard
