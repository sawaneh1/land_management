import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const Contacts = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='fname' />
        <TextField source='lname' />
        <EmailField source='email' />
        <TextField source='message' />
      </Datagrid>
    </List>
  )
}

export default Contacts
