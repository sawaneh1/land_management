import React from 'react'
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin'

const PaymentEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='house_id' />
        <TextInput label='First name' source='fname' />
        <TextInput label='Last name' source='lname' />
        <TextInput source='email' />
        <NumberInput source='price' />
      </SimpleForm>
    </Edit>
  )
}

export default PaymentEdit
