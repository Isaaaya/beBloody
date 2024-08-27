import { SafeAreaView, ScrollView } from 'react-native'
import ThemedContainer from '@/components/common/ThemedContainer'
import IntroductoryModal from '@/components/IntroductoryModal'
import BannersCarousel from '@/components/BannersCarousel'
import MainScreensNavbar from '@/components/MainScreensNavbar'
import DonationRequests from '@/components/DonationRequests'

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <IntroductoryModal />
                <BannersCarousel />
                <ThemedContainer>
                    <MainScreensNavbar />
                    <DonationRequests />
                </ThemedContainer>
            </ScrollView>
        </SafeAreaView>
  )
}

export default Home