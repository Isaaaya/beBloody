import { View, Text } from 'react-native'
import UserList from './UserList'

const LatestPersonalRequests = () => {
  return (
    <View>
      <Text className='mt-5 mb-2 text-xl font-semibold'>Contact in person</Text>
      <UserList />
    </View>
  )
}

export default LatestPersonalRequests