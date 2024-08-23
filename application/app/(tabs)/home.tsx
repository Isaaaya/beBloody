import { Text, SafeAreaView } from 'react-native'
import ThemedContainer from '@/components/common/ThemedContainer'
import IntroductoryModal from '@/components/IntroductoryModal'

const Home = () => {
    return (
        <SafeAreaView>
            <IntroductoryModal />
            <ThemedContainer>
                <Text>Home</Text>
            </ThemedContainer>
        </SafeAreaView>
  )
}

export default Home