import { View, Text, Modal, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { router } from 'expo-router';

const BloodRequestedModal = ({modalVisible, setModalVisible}: {modalVisible: boolean, setModalVisible: (value: boolean) => void}) => {

    const handleExit = () => {
        setModalVisible(false);
        router.navigate('/(tabs)/home');
    }

  return (
    <Modal
    transparent={true}
    visible={modalVisible}>
        <View className='w-full h-full bg-black/30'>
            <View  className='h-[500px] rounded-3xl bg-white absolute top-[12%] w-[90%] self-center pt-20 px-4'>
                <Image source={require('../assets/images/blood-donor-day.png') as ImageSourcePropType} className='w-56 h-56 mx-auto' />
                <Text className='text-lg font-semibold text-center text-gray-400'>Blood is successfully requested.</Text>
                <TouchableOpacity onPress={handleExit} className='mx-auto mt-10 border-4 border-red-500 rounded-full'>
                    <Image source={require('../assets/icons/next.png') as ImageSourcePropType} className='w-10 h-10 mx-auto' />
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default BloodRequestedModal