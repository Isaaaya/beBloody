import { SafeAreaView, ScrollView, Text } from 'react-native'
import ThemedContainer from '@/components/common/ThemedContainer'
import HospitalsMap from '@/components/HospitalsMap'
import LatestPersonalRequests from '@/components/LatestPersonalRequests'

const Search = () => {
   
  return (
    <SafeAreaView>
      <ScrollView className='h-full'>
        <ThemedContainer customStyles='pt-3'>
            <Text className='mb-5 text-xl font-semibold text-center'>
              Find Those in Need
            </Text>
            <HospitalsMap />
            <LatestPersonalRequests />
        </ThemedContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search