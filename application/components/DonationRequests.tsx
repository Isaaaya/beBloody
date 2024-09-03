import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import ThemedTouchableOpacity from './common/ThemedTouchableOpacity';

const DonationRequests = () => {
  return (
    <View className='space-y-4 mt-7'>
      <Text className='text-xl font-semibold'>
        Latest Blood Requests
      </Text>
      <View className='space-y-5'>
        {[{name: 'Bob Rogers', location: 'Lviv Central Hospital'}, {name: 'Rob Rogers', location: 'Lviv Central Hospital'}].map((person, index) => (
            <View key={person.name + index} className='relative w-full px-5 py-3 space-y-3 bg-white rounded-md'>
            <View className='absolute right-0 w-20 h-20'>
                <Image 
                className='relative w-full h-full' 
                source={require('../assets/icons/blood.png') as ImageSourcePropType} 
                />
                <Text className='absolute text-xl top-7 left-[33px] text-white font-semibold'>0</Text>
            </View>
            <View>
                <Text className='font-semibold text-gray-500'>Name</Text>
                <Text className='text-lg font-semibold'>{person.name}</Text>
            </View>
            <View>
                <Text className='font-semibold text-gray-500'>Location</Text>
                <Text className='text-lg font-semibold'>{person.location}</Text>
            </View>
            <View className='flex flex-row items-center justify-between'>
                <Text className='font-semibold text-gray-500'>5 min. ago</Text>
                <View className='w-[60%]'>
                    <ThemedTouchableOpacity textStyles='text-white font-semibold' caption='Donate +' onPress={() => {}} />
                </View>
            </View>
            </View>
        ))}
      </View>
    </View>
  );
}

export default DonationRequests;
