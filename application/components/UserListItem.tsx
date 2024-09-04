import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserWithRequestModal from './UserWithRequestModal';

const UserListItem = () => {
const [modalVisible, setModalVisible] = useState(false);

  return (
        <TouchableOpacity onPress={() => setModalVisible(true)} className='flex flex-row w-full h-20 mb-3 bg-white rounded-lg shadow-md'>
            <Image source={require('../assets/images/blood-donor-day.png') as ImageSourcePropType} className='w-20 h-20' />
            <View className='items-center justify-center'>
                <Text className='text-xl font-semibold'>Bob Robert</Text>
                <View className='flex flex-row items-center justify-center'>
                <Image source={require('../assets/icons/location.png') as ImageSourcePropType} className='w-5 h-5' />
                <Text className='font-semibold text-center text-gray-500'>
                    Lviv, Ukraine
                </Text>
                </View>
            </View>
            <View className='absolute right-0 top-3 w-14 h-14'>
                <Image 
                className='relative w-full h-full' 
                source={require('../assets/icons/blood.png') as ImageSourcePropType} 
                />
                <Text className='absolute top-[22px] left-[23px] text-white font-semibold'>0</Text>
            </View>
            <UserWithRequestModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </TouchableOpacity>
  )
}

export default UserListItem