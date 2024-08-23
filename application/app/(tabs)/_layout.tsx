import { Tabs } from 'expo-router';
import {Image, ImageSourcePropType, View, Text} from 'react-native';

export default function TabLayout() {

  const screenOptions = {
    tabBarStyle:{
      height: 65,
      paddingTop: 20,
    },
    tabBarShowLabel: false,
  };

  const tabs = [
    {caption: 'home', icon: require('../../assets/icons/home.png')}, 
    {caption: 'search', icon: require('../../assets/icons/search.png')}, 
    {caption: 'report', icon: require('../../assets/icons/report.png')}, 
    {caption: 'profile', icon: require('../../assets/icons/name.png')}
  ];

  return (
    <Tabs
      screenOptions={{
        ...screenOptions,
        headerShown: false,
      }}>
        {tabs.map((tab) => <Tabs.Screen key={tab.caption}
        name={tab.caption}
        options={{
          title: tab.caption,
          tabBarIcon: ({ focused }) => (
            <View className="relative items-center">
                <Image className="w-6 h-6" source={tab.icon as ImageSourcePropType} />
                {focused && (
                  <View className="absolute -bottom-3">
                    <View className="w-2 h-2 bg-red-500 rounded-full" />
                  </View>
                )}
              </View>
          ),
        }}
      />)}
    </Tabs>
  );
}
