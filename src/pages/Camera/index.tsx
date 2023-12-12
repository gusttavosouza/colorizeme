import { useEffect, useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { Modal, SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

export default function CameraComponent() {
  const cameraRef = useRef<Camera | null>(null);
  const navigation = useNavigation();
  
  const [ wasTakePhoto, setWasTakePhoto ] = useState(false);
  const [ type, setType ] = useState(CameraType.back);
  const [ capturedPhoto, setCapturedPhoto ] = useState<CameraCapturedPicture>({} as CameraCapturedPicture);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  
  useEffect(() => {
      requestPermission()
  }, [])

  function buttonBack() {
    navigation.navigate({"name": "Home"} as never)
  }

  function closePhoto() {
    setCapturedPhoto({} as CameraCapturedPicture);
    setWasTakePhoto(false)
  }

  async function takePicture () {
    console.log("FOIII")
    if(cameraRef.current !== null){
      const photo: CameraCapturedPicture = await cameraRef?.current.takePictureAsync();
      setCapturedPhoto(photo);
      setWasTakePhoto(true)
      console.log(photo);
      // navigation.navigate({"name": "Product"} as never)
    }
  }

  function useImage() {
    navigation.navigate({"name": "Product"} as never)
  }

  if(!permission?.granted){
    console.log(permission?.granted)
    console.log('Entrouu')
    return;
  }

  return (<>
    {!wasTakePhoto && !capturedPhoto.uri ? (
      <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.contentButton}>
          <TouchableOpacity style={styles.buttonBack} onPress={() => buttonBack()}>
            <FontAwesome name='arrow-left' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCamera} onPress={() => takePicture()}>
            <FontAwesome name='camera' size={30} color='red' />
          </TouchableOpacity>
        </View>
      </Camera>
      </SafeAreaView>
    ) : (
      <View style={styles.contentModal}>
        <Image style={styles.imgPhoto} source={{ uri: capturedPhoto.uri }} />
        <TouchableOpacity style={styles.closeButton} onPress={() => closePhoto()}>
          <FontAwesome name='close' size={32} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUsePhoto} onPress={() => useImage()}>
          <Text style={styles.buttonUsePhotoText}>Usar Foto</Text>
          <FontAwesome name='arrow-right' size={24} color='white' />
        </TouchableOpacity>
      </View>
    )}
  </>
  )
}