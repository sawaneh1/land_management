import React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  NumberField,
  NumberInput,
} from 'react-admin'

const HouseEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='description' />
        <NumberInput label='Price' source='price' />
      </SimpleForm>
    </Edit>
  )
}

export default HouseEdit
