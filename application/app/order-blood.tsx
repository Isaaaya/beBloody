import ThemedContainer from '@/components/common/ThemedContainer'
import { Text, SafeAreaView } from 'react-native'
import { useState } from 'react'
import ThemedTouchableOpacity from '@/components/common/ThemedTouchableOpacity'
import { IBloodRequest } from '@/interfaces/bloodRequest.interface'
import BloodRequestForm from '@/components/BloodRequestForm'
import BloodRequestedModal from '@/components/BloodRequestedModal'

const OrderBlood = () => {
  const [bloodRequest, setBloodRequest] = useState<IBloodRequest>({name: '', hospital: '', bloodType: '', phone: '', note: ''});
  const [modalVisible, setModalVisible] = useState(false);

  const handleBloodRequest = () => {
    setModalVisible(true);
  }

  return (
    <SafeAreaView>
      <ThemedContainer>
        <Text className='my-5 text-xl font-semibold text-center capitalize'>Create a Blood Request</Text>
          <BloodRequestForm bloodRequest={bloodRequest} setBloodRequest={setBloodRequest} />
          <ThemedTouchableOpacity caption='Request' onPress={handleBloodRequest} textStyles='text-white font-semibold text-2xl' />
      </ThemedContainer>
      <BloodRequestedModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  )
}

export default OrderBlood