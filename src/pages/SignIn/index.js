import React from 'react';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MCUAPI Logo" width={100} height={100} />
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Enter</button>
      </form>
    </>
  );
}
