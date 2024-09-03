import { Text, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import ThemedTouchableOpacity from './common/ThemedTouchableOpacity'
import { IHospital } from '@/interfaces/hospital.interface'
import HospitalImage from './HospitalImage'

const HospitalInfoModal = ({currentHospitalInfo, setModalVisible}: {currentHospitalInfo: IHospital | null, setModalVisible: (value: boolean) => void}) => {

  return (
        <View className='bg-white w-full rounded-lg mx-auto absolute top-[400px] p-5 shadow-lg z-50'>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Image source={require('../assets/icons/cancel.png') as ImageSourcePropType} className='absolute block w-5 h-5 -right-2 -top-2' />
            </TouchableOpacity>
           <Text className='mt-2 text-lg font-semibold'>{currentHospitalInfo?.name}</Text>  
           <View className='flex flex-row items-center'>
                <Image source={require('../assets/icons/location.png') as ImageSourcePropType} className='w-5 h-5' />
                <Text className='font-semibold text-center text-gray-500'>
                    {currentHospitalInfo?.address}
                </Text>
            </View>
            <HospitalImage currentHospitalInfo={currentHospitalInfo} />
            <ThemedTouchableOpacity caption='Call Now' textStyles='text-white font-semibold text-xl' onPress={() => {}} />
        </View>
  )
}


export default HospitalInfoModal