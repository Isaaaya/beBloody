import { View } from 'react-native'
import FormField from '@/components/common/FormField'
import { IBloodRequest } from '@/interfaces/bloodRequest.interface'

const BloodRequestForm = ({bloodRequest, setBloodRequest}: {bloodRequest: IBloodRequest, setBloodRequest: (value: IBloodRequest) => void}) => {
  return (
    <View>
      {Object.getOwnPropertyNames(bloodRequest).map((entry) => <FormField key={entry} type={entry} handleChangeText={(value) => {setBloodRequest({...bloodRequest, [entry]: value})}} />)}
    </View>
  )
}

export default BloodRequestForm