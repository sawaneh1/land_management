import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DateField,
} from 'react-admin'

const PaymentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label='house id' source='house_id' />
        <TextField label='first name' source='fname' />
        <TextField label='last name' source='lname' />
        <EmailField source='email' />
        <DateField source='date' />
        <EditButton basePath='/payments' />
        {/* <DeleteButton basePath='/payments' /> */}
      </Datagrid>
    </List>
  )
}

export default PaymentList
