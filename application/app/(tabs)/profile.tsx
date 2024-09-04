import { SafeAreaView, Text, Image, ImageSourcePropType, View, ScrollView, Switch, TouchableOpacity } from 'react-native'
import {router} from 'expo-router'
import ThemedContainer from '@/components/common/ThemedContainer'

const Profile = () => {
  const buttons = [
    {icon: require('../../assets/icons/invite-friends.png'), caption: 'Invite a friend', func: () => router.push('/(tabs)/home')},
    {icon: require('../../assets/icons/get-help.png'), caption: 'Get help', func: () => router.push('/(tabs)/home')},
    {icon: require('../../assets/icons/sign-out.png'), caption: 'Sign Out', func: () => router.push('/sign-in')},
    ];

  return (
    <SafeAreaView>
      <ScrollView className='h-full'>
        <ThemedContainer customStyles='pt-3 space-y-4'>
            <Text className='text-2xl font-semibold text-center'>
              Profile
            </Text>
            <Image source={require('../../assets/images/blood-donor-day.png') as ImageSourcePropType} className='w-24 h-24 mx-auto mt-6 bg-gray-300 rounded-lg' />
            <View className='space-y-2'>
              <Text className='text-3xl font-semibold text-center'>
                Bob Robert
              </Text>
              <View className='flex flex-row items-center justify-center'>
                <Image source={require('../../assets/icons/location.png') as ImageSourcePropType} className='w-5 h-5' />
                <Text className='font-semibold text-center text-gray-500'>
                  Lviv, Ukraine
                </Text>
              </View>
            </View>
            <View className='flex flex-row justify-between pb-2 border-b border-gray-300'>
                {Object.entries({bloodType: 'A+', donated: '05', requested: '02'}).map(([key, value]) => <View key={key} className='flex flex-col items-center w-[32%]'>
                  <Text className='text-3xl font-bold capitalize'>{value}</Text>
                  <Text className='text-lg font-semibold text-gray-400 capitalize'>{key}</Text>
                </View>)}
            </View>
            <View className='flex flex-col gap-3'>
                <View className='flex flex-row items-center justify-between'>
                  <View className='flex flex-row items-center gap-3'>
                    <Image source={require('../../assets/icons/calendar.png') as ImageSourcePropType} className='w-7 h-7' />
                    <Text className='text-lg font-semibold text-gray-600'>Available for donate</Text>
                  </View>
                  <Switch trackColor={{false: '#eeeee', true: '#d10000'}}
                    thumbColor={'#ffffff'}
                    onValueChange={() => {}}
                    value={true} />
                </View>
                {buttons.map((button) => <View key={button.caption} className='flex flex-row items-center justify-between shadow-sm'>
                  <View className='flex flex-row items-center gap-3'>
                    <Image source={button.icon as ImageSourcePropType} className='w-7 h-7' />
                    <TouchableOpacity onPress={button.func}>
                      <Text className='text-lg font-semibold text-gray-600'>
                        {button.caption}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>)}
            </View>
        </ThemedContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile