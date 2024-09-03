import { useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import HospitalInfoModal from './HospitalInfoModal';
import {hospitals} from '../constants'
import { IHospital } from '@/interfaces/hospital.interface'

const HospitalsMap = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentHospitalInfo, setCurrentHospitalInfo] = useState<IHospital | null>(null);

    const initialRegion = {
        latitude: 49.84300,
        longitude: 24.02700,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }

    const showHospitalInfoModal = (hospital: IHospital) => {
      setCurrentHospitalInfo(hospital)
      setModalVisible(true)
    }
      
  return (
    <>
      <MapView initialRegion={initialRegion} className='w-full h-[320px]'>
          {hospitals.map((hospital) => <Marker onPress={() => showHospitalInfoModal(hospital)}
            key={hospital.name} 
            coordinate={hospital.coordinates} />)}
      </MapView>
      {modalVisible && <HospitalInfoModal currentHospitalInfo={currentHospitalInfo} setModalVisible={setModalVisible} />}
    </>
  )
}

export default HospitalsMap