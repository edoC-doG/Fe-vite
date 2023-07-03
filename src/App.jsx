import { Field, Form, Formik } from 'formik';
import React from 'react';
import { login } from './services/userServices';
import { useDispatch, useSelector } from 'react-redux';


export default function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(user)
  return (
    <div>
      <Formik
        initialValues={
          {
            email:'',
            password:''
          }
        }
        onSubmit={(values)=>{
          login(values, dispatch)
        }}
      >
        <Form>
          <Field name={'email'}></Field>
          <Field name={'password'}></Field>
          <button>Login</button>
        </Form>
      </Formik>
    </div>
  );
}
