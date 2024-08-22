import { formIcons } from '@/assets/icons';
import {  View, TextInput, Image, ImageSourcePropType } from 'react-native'

const FormField = ({type, handleChangeText, value, isError }: {type: string, handleChangeText: (value: string) => void, value?: string, isError?: boolean}) => {
    const iconSource = formIcons[type];

    return (
        <View className='flex flex-row items-center h-16 mb-3 bg-gray-200 rounded'>
            <View className='flex items-center justify-center h-full border-r border-gray-300'>
                <Image source={iconSource as ImageSourcePropType} className='w-6 h-6 mx-5' />
            </View>
            <TextInput value={value && value} className={`h-16 px-4 py-auto text-xl font-semibold rounded-xl ${isError && 'border-red-500 border'}`} placeholder={type[0].toUpperCase() + type.slice(1)} onChangeText={handleChangeText}  />
        </View>
  )
}

export default FormField