import { View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { banners } from '@/constants';

const BannersCarousel = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 8000);
  
    return () => clearInterval(interval);
  }, []);


  return (
    <View className='mt-3 space-y-1'>
      <View className='w-[95%] mx-auto h-[200px] rounded-lg overflow-hidden'>
        <Image 
          resizeMode="cover" 
          source={banners[bannerIndex]?.image as ImageSourcePropType} 
          className='w-full h-full'
        />
      </View>
      <View className='flex flex-row gap-3 mx-auto mb-10'>
        {bannerIndex - 1 > -1 && <TouchableOpacity onPress={() => setBannerIndex((prev) => prev - 1)}>
          <View className='w-3 h-3 bg-gray-500 rounded-full' />
        </TouchableOpacity>}
        <View className='w-8 h-3 bg-red-500 rounded-full' />
        {bannerIndex < banners.length - 1 && <TouchableOpacity onPress={() => setBannerIndex((prev) => prev + 1)}>
          <View className='w-3 h-3 bg-gray-500 rounded-full' />
        </TouchableOpacity>}
      </View>
    </View>
  );
};


export default BannersCarousel;
