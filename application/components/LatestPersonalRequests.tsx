import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import UserWithRequest from './UserWithRequest'

const LatestPersonalRequests = () => {
  return (
    <View>
      <Text className='mt-5 mb-2 text-xl font-semibold'>Contact in person</Text>
      <View>
        {Array(3).fill(null).map((user, index) => <UserWithRequest key={index} />)}
      </View>
    </View>
  )
}

export default LatestPersonalRequests