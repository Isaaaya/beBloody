import React, { useState } from 'react'
import AuthScreen from '@/screens/AuthScreen'
import { IUser } from '@/interfaces/user.interface';

const SignIn = () => {
  const [user, setUser] = useState<IUser>({email: '', password: ''});

  return (
    <AuthScreen user={user} setUser={setUser} authType='sign-in' />
  )
}

export default SignIn