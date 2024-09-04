import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { mainScreens } from '@/constants'
import { router } from 'expo-router'

const MainScreensNavbar = () => {

  return (
    <View className='flex flex-row flex-wrap justify-between gap-1'>
      {mainScreens.map((screen) => <TouchableOpacity onPress={() => router.push(screen.link as any)} key={screen.title} className='w-[31%] bg-white mb-2 rounded-lg flex flex-col items-center py-5 space-y-3 shadow-md'>
            <Image resizeMode="cover" source={screen.icon as ImageSourcePropType} className='w-8 h-8' />
            <Text className='font-semibold text-gray-500'>{screen.title}</Text>
        </TouchableOpacity>)}
    </View>
  )
}

export default MainScreensNavbar