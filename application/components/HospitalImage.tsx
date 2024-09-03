import { View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { useEffect, useState } from 'react'
import { IHospital } from '@/interfaces/hospital.interface';

const HospitalImage = ({currentHospitalInfo}: {currentHospitalInfo: IHospital | null}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const moreThanOneImage = currentHospitalInfo && currentHospitalInfo?.images?.length > 1;

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [currentHospitalInfo?.name]);

    const showNextImage = () => {
        if (currentHospitalInfo && currentImageIndex < currentHospitalInfo?.images.length - 1) setCurrentImageIndex((prev) => prev + 1);
        else setCurrentImageIndex(0);
    }

    const showPrevImage = () => {
        if (currentImageIndex === 0 && currentHospitalInfo) setCurrentImageIndex(currentHospitalInfo?.images.length - 1);
        else setCurrentImageIndex((prev) => prev - 1);
    }

  return (
    <View className='relative'>
        {moreThanOneImage && <TouchableOpacity onPress={showPrevImage} className='absolute z-50 p-1 rounded-full bg-gray-100/90 top-1/2 left-5'>
            <Image source={require('../assets/icons/previous.png') as ImageSourcePropType} className='w-5 h-5' />
        </TouchableOpacity>}
        <Image resizeMode="cover" source={{uri: currentHospitalInfo?.images[currentImageIndex]}} className='z-0 w-full h-40 my-3 rounded-md' />
        {moreThanOneImage && <TouchableOpacity onPress={showNextImage} className='absolute z-50 p-1 rounded-full bg-gray-100/90 top-1/2 right-5'>
            <Image source={require('../assets/icons/next.png') as ImageSourcePropType} className='w-5 h-5' />
        </TouchableOpacity>}
    </View>
  )
}

export default HospitalImage