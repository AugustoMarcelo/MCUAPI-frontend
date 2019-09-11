import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Type a valid e-mail')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MCUAPI Logo" width={100} height={100} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          autoComplete="off"
        />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Enter</button>
      </Form>
    </>
  );
}
