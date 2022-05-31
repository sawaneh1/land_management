import React from 'react'
import { List, Datagrid, TextField, EmailField, DateField } from 'react-admin'

const Contacts = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label='first name' source='fname' />
        <TextField label='last name' source='lname' />
        <EmailField source='email' />
        <TextField source='message' />
        <DateField source='date' />
      </Datagrid>
    </List>
  )
}

export default Contacts
