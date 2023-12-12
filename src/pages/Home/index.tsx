import { Feather} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import logo from '../../assets/teste.png';
import live from '../../assets/live.png';
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const navigation = useNavigation();

  function redirectCamera() {
    navigation.navigate({"name": "Camera"} as never)
  }
  useEffect(() => {
    initializeData()
  }, [])

  
  const initializeData = async () => {
    try {
      await AsyncStorage.setItem('color', 'bege');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}><Image source={logo} /></View>
      <View style={styles.containerText}>
        <Text style={styles.hello}>Olá, Gustavo</Text>
        <Text style={styles.message}>Ajude o cliente a encontrar</Text>
        <Text style={styles.message}>a melhor opção.</Text>
      </View>
      <View><Image source={live} /></View>
      <TouchableOpacity onPress={() => redirectCamera()} style={styles.buttonTake}>
        <Feather name="camera" size={28} color="#FFFFFF" />
        <Text style={styles.buttonTakeText}>Tirar Fotografia</Text>
      </TouchableOpacity>
    </View>
  );
}