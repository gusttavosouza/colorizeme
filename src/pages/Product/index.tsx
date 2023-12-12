import axios from "axios";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { products } from "./utils";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Product() {
  const navigation = useNavigation();
  const analogas = ["#E39E49", "#E3C549", "#E3B249", "#E38349", "#E6DE7E"]
  const monocromatico = ["#B0955B", "#7D725A", "#E3B249", "#4A4741", "#332E23"]
  const sombras = ["#BF963D", "#967630", "#E3B249", "#6E5623", "#453616"]

  function goBack(){
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
            <View style={{ ...styles.paletaItem, backgroundColor: `${item}` }} />
          ))}
        </View>
        <View style={styles.paleta}>
          {monocromatico.map(item => (
            <View style={{ ...styles.paletaItem, backgroundColor: `${item}` }} />
          ))}
        </View>
        <View style={styles.paleta}>
          {sombras.map(item => (
            <View style={{ ...styles.paletaItem, backgroundColor: `${item}` }} />
          ))}
        </View>
      </View>
      <View style={styles.products}>
        <Text style={styles.title}>Produtos</Text>
        {products.map(product => (
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