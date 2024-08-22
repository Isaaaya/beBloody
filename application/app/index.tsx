import ThemedContainer from '@/components/common/ThemedContainer';
import { Text, SafeAreaView, View, Image, ImageSourcePropType } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView className='relative h-full'>
      <ThemedContainer customStyles='flex items-center justify-center pt-32 space-y-44'>
        <View className='flex items-center justify-center space-y-5'>
          <View>
            <Text className='text-5xl font-bold text-red-600'><Text className='text-black'>be</Text>Bloody</Text>
            <Text className='text-xl font-semibold text-center text-gray-400'>to save lives</Text>
          </View>
          <Image source={require('@/assets/images/bebloody-logo.png') as ImageSourcePropType} className='w-[120px] h-36' />
        </View>
        <View className='w-full space-y-3'> 
          <View className="overflow-hidden rounded-xl">
            <Link
              className="w-full py-3 text-xl font-semibold text-center text-white bg-black"
              href='/sign-in'>
              Sign In
            </Link>
          </View>
          <View className="overflow-hidden rounded-xl">
            <Link
              className="w-full py-3 text-xl font-semibold text-center text-white bg-black"
              href='/sign-up'>
              Sign Up
            </Link>
          </View>
        </View>
      </ThemedContainer>
      <Image source={require('@/assets/images/wave.png') as ImageSourcePropType} className='absolute w-full -bottom-2 h-36' />
    </SafeAreaView>
  );
}
