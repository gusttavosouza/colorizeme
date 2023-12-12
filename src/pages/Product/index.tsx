import axios from "axios";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { returnColor } from "./utils";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getColor } from "./getColor";

export default function Product() {
  const [color, setColor] = useState<string | null>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem('color');
        setColor(data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
    loadData();
  }, []);

  const navigation = useNavigation();
  const {analogas, monocromatico, sombras} = getColor(color || 'bege');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('color', color === 'bege' ? 'black' : 'bege');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  function goBack(){
    saveData()
    navigation.navigate({"name": "Camera"} as never)
  }

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewButtonAndTitle}>
          <Text style={styles.title}>Paletas</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => goBack()}>
            <FontAwesome name='close' size={32} color='white' />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Paletas</Text>
        <View style={styles.paleta}>
          {analogas.map(item => (
            <View style={{ ...styles.paletaItem, backgroundColor: `${item}` }} key={`${item}`} />
          ))}
        </View>
        <View style={styles.paleta}>
          {monocromatico.map(item => (
            <View style={{ ...styles.paletaItem, backgroundColor: `${item}` }} key={`${item}`} />
          ))}
        </View>
        <View style={styles.paleta}>
          {sombras.map(item => (
            <View style={{ ...styles.paletaItem, backgroundColor: `${item}` }}  key={`${item}`}   />
          ))}
        </View>
      </View>
      <View style={styles.products}>
        <Text style={styles.title}>Produtos</Text>
        {returnColor(color || 'bege').map(product => (
          <View style={styles.product} key={product.id}>
            <Text style={styles.productName}>{product.name}</Text>
            <Image source={{ uri: product.photo }} style={styles.productImage} />
          </View>
        ))}
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: '#09090A',
  },
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '90%'
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900'
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900'
  },
  paleta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  paletaItem: {
    width: 60,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    marginRight: 10
  },
  products: {
    width: '90%',
    marginTop: 10
  },
  product: {
    width: '100%',
    height: 300,
    backgroundColor: '#222222',
    borderRadius: 10,
    paddingTop: 10,
    marginBottom: 20
  },
  productName: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10
  },
  productImage: {
    display: 'flex',
    flex: 1
  },
  viewButtonAndTitle: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: 10,
    marginTop: 10
  }
});