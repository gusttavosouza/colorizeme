import { View, StyleSheet, Text, Image } from "react-native";
import logo from '../../assets/teste.png';
import live from '../../assets/live.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}><Image source={logo} /></View>
      <View style={styles.containerText}>
        <Text style={styles.hello}>Olá, Gustavo</Text>
        <Text style={styles.message}>Ajude o cliente a encontrar</Text>
        <Text style={styles.message}>a melhor opção.</Text>
      </View>
      <View><Image source={live} /></View>
      <TouchableOpacity onPress={() => navigation.navigate({ "name": "Product" } as never)} style={styles.buttonTake}>
        <Feather name="camera" size={28} color="#FFFFFF" />
        <Text style={styles.buttonTakeText}>Tirar Fotografia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignContent: "center",
    textAlign: 'center',
    marginHorizontal: 'auto',
    marginBottom: 20
  },
  containerText: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
  },
  hello: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900'
  },
  message: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    textAlign: "left",
  },
  buttonTake: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#08234E',
    width: "90%",
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonTakeText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 20
  }
});