import {useState} from 'react'
import AuthScreen from '@/screens/AuthScreen'
import { IUser } from '@/interfaces/user.interface';

const SignUp = () => {
  const [user, setUser] = useState<IUser>({name: '', email: '', password: '', phone: '', bloodType: ''});

  return (
    <AuthScreen user={user} setUser={setUser} authType='sign-up' />
  )
}

export default SignUp