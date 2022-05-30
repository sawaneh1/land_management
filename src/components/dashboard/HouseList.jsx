import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const HouseList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='description' />
        <TextField source='price' />
        {/* <EditButton basePath='/houses' />
        <DeleteButton basePath='/houses' /> */}
      </Datagrid>
    </List>
  )
}

export default HouseList
