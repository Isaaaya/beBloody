import { View, Text, SafeAreaView, ImageSourcePropType, Image } from 'react-native'
import ThemedContainer from '@/components/common/ThemedContainer'
import { IUser } from '@/interfaces/user.interface'
import FormField from '@/components/common/FormField'
import ThemedTouchableOpacity from '@/components/common/ThemedTouchableOpacity'
import { Link } from 'expo-router'

const AuthScreen = ({user, setUser, authType}: {user: IUser, setUser: (user: IUser) => void, authType: 'sign-in' | 'sign-up'}) => {

  return (
    <SafeAreaView className='relative h-full'>
        <ThemedContainer>
            <Text className='my-8 text-4xl font-bold text-center'>Welcome!</Text>
            <View>
                {Object.getOwnPropertyNames(user).map((entry) => <FormField key={entry} type={entry} handleChangeText={(value: string) => {setUser({...user, [entry]: value})}} />)}
            </View>
            <View className='mt-3'>
                <ThemedTouchableOpacity onPress={() => {}} isLoading={false} isError={false} caption={authType.split('-').join(' ')} customStyles='bg-secondary h-14' textStyles='font-semibold text-[22px] capitalize text-white'  />
                <Text className='mt-2 text-xl font-semibold'>
                    {authType === 'sign-in' ? 
                    'Don`t have an account yet?' : 
                    'Already have an account?'}
                    <Link replace className='font-semibold text-gray-500' href={`/${authType === 'sign-in' ? 'sign-up' : 'sign-in'}`}>
                        {" "}
                        {authType === 'sign-in' ? 'Sign Up' : 'Sign In'}
                    </Link>
                </Text>
            </View>
      </ThemedContainer>
      <Image source={require('@/assets/images/wave (4).png') as ImageSourcePropType} className='absolute bottom-0 w-full h-20' />
    </SafeAreaView>
  )
}

export default AuthScreen