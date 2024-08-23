import { Text, SafeAreaView, View, Modal, TouchableOpacity, ImageSourcePropType, Image } from 'react-native'
import {useState} from 'react'
import ThemedContainer from '@/components/common/ThemedContainer'
import { introductionTips } from '@/constants';

const IntroductoryModal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [tipIndex, setTipIndex] = useState(0);

    const handleTipChange = () => {
        if (tipIndex < introductionTips.length - 1) {
          setTipIndex((prev) => prev + 1)
        } else setModalVisible(false);
    }

  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <SafeAreaView className='w-full h-full bg-white'>
            <ThemedContainer customStyles='pt-20 flex flex-col justify-between h-full'>
                 <View className='flex flex-col items-center space-y-5 text-center'>
                    <Image resizeMode="contain" source={introductionTips[tipIndex].image as ImageSourcePropType} alt={introductionTips[tipIndex].alt} className='w-full h-[250px]' />
                    <Text className='text-3xl font-semibold text-center'>{introductionTips[tipIndex].title}</Text>
                    <Text className='text-lg text-center text-gray-500'>{introductionTips[tipIndex].description}</Text>  
                </View>
                <View>
                  <View className='flex flex-row gap-3 mx-auto mb-10'>
                    {tipIndex - 1 > -1 && <TouchableOpacity onPress={() => setTipIndex((prev) => prev - 1)}>
                      <View className='w-3 h-3 bg-gray-500 rounded-full' />
                    </TouchableOpacity>}
                    <View className='w-8 h-3 bg-red-500 rounded-full' />
                    {tipIndex < introductionTips.length - 1 && <TouchableOpacity onPress={() => setTipIndex((prev) => prev + 1)}>
                      <View className='w-3 h-3 bg-gray-500 rounded-full' />
                    </TouchableOpacity>}
                  </View>
                  <View className='flex flex-row justify-between w-[80%] mx-auto'>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text className='text-xl font-semibold'>Skip</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleTipChange}>
                    <Text className='text-xl font-semibold text-red-600'>Next</Text>
                  </TouchableOpacity>
                </View>
                </View>
            </ThemedContainer>
        </SafeAreaView>
    </Modal>
  )
}

export default IntroductoryModal