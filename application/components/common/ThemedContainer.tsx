import { View } from 'react-native'

const ThemedContainer = ({children, customStyles}: {children: any, customStyles?: string}) => {
  return (
    <View className={`w-[90%] mx-auto py-5 ${customStyles}`}>
      {children}
    </View>
  )
}

export default ThemedContainer