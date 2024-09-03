import { ImageSourcePropType, Modal, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import ThemedTouchableOpacity from './common/ThemedTouchableOpacity';
import MapView, {Marker} from 'react-native-maps';

const UserWithRequestModal = ({modalVisible, setModalVisible}: {modalVisible: boolean, setModalVisible: (value: boolean) => void}) => {
    
  return (
    <Modal
    transparent={true}
    visible={modalVisible}>
        <TouchableOpacity className='w-full h-full bg-black/30' onPress={() => setModalVisible(false)} />
        <View className='h-[500px] rounded-3xl bg-white absolute bottom-0 w-full pt-20 px-4'>
            <View className='absolute self-center p-1 overflow-hidden bg-white rounded-lg w-28 h-28 -top-12'>
                <Image source={require('../assets/images/user.jpg') as ImageSourcePropType} className='w-full h-full rounded-lg' />
            </View>
            <ScrollView>
            
            <View className='space-y-1'>
              <Text className='text-3xl font-semibold text-center'>
                Bob Robert
              </Text>
              <View className='flex flex-row items-center justify-center'>
                <Image source={require('../assets/icons/location.png') as ImageSourcePropType} className='w-5 h-5' />
                <Text className='text-lg font-semibold text-center text-gray-500'>
                  Lviv, Ukraine
                </Text>
              </View>
            </View>
            <View className='flex flex-row mt-5'>
                {[{caption: 'Times Requested', icon: require('../assets/icons/find-donors.png'), value: 6 }, {caption: 'Blood Type -', icon: require('../assets/icons/blood.png'), value: 'AB+'}].map((userInfo) => <View className='w-[48%] flex items-center justify-center space-y-2'>
                    <Image source={userInfo.icon as ImageSourcePropType} className='w-9 h-9' />
                    <Text className='text-[17px] font-semibold'>
                        {userInfo.caption}
                        {' '}
                        <Text className='text-red-500'>{userInfo.value}</Text>
                    </Text>
                </View>)}
            </View>
            <ThemedTouchableOpacity caption='Call Now' customStyles=' bg-black mt-4' textStyles='text-white font-semibold text-xl' onPress={() => {}} />
            <View className='mb-14'>
                <Text className='my-3 text-lg font-semibold capitalize'>Most comfortable hospital</Text>
                <MapView initialRegion={{
                    latitude: 49.8334,
                    longitude: 24.0233,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1}} className='w-full h-[320px]'>
                     <Marker
                        title='Lviv Regional Clinical Hospital'
                        coordinate={{
                        latitude: 49.8334,
                        longitude: 24.0233
                      }} />
                </MapView>
            </View>
            </ScrollView>
        </View>
    </Modal>
  )
}

export default UserWithRequestModal