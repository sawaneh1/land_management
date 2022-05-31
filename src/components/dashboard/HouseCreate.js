import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  NumberField,
  NumberInput,
} from 'react-admin'

const HouseCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='description' />
        <NumberInput source='price' />
      </SimpleForm>
    </Create>
  )
}

export default HouseCreate
