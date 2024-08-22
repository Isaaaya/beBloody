import ThemedContainer from '@/components/common/ThemedContainer';
import ThemedTouchableOpacity from '@/components/common/ThemedTouchableOpacity';
import { Text, SafeAreaView, View, Image, ImageSourcePropType } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex justify-between h-full'>
      <ThemedContainer customStyles='flex items-center justify-center pt-32 space-y-32'>
        <View className='flex items-center justify-center space-y-5'>
          <View>
            <Text className='text-4xl font-bold text-red-600'><Text className='text-black'>be</Text>Bloody</Text>
            <Text className='text-xl font-semibold text-center text-gray-400'>to save lives</Text>
          </View>
          <Image source={require('@/assets/images/bebloody-logo.png') as ImageSourcePropType} className='w-[120px] h-36' />
        </View>
        <View className='w-full'>  
          <ThemedTouchableOpacity caption='Sign In' onPress={() => {}} textStyles='text-white text-2xl font-semibold' />
          <ThemedTouchableOpacity caption='Sign Up' onPress={() => {}} textStyles='text-white text-2xl font-semibold' />
        </View>
      </ThemedContainer>
      <Image source={require('@/assets/images/wave.png') as ImageSourcePropType} className='w-full -mb-10 h-36' />
    </SafeAreaView>
  );
}
