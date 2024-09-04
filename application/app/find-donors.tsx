import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import UserList from '@/components/UserList'
import ThemedContainer from '@/components/common/ThemedContainer'

const FindDonors = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Text className='my-3 text-xl font-semibold text-center'>
                Find Donors
            </Text>
            <ThemedContainer>
                <UserList />
            </ThemedContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FindDonors