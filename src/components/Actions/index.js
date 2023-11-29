import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {Login} from '../../pages/Login'

export default function Actions({navigation}) {
console.log (navigation)

  const handleEntradasPress = () => {
    navigation.navigate('Entradas'); 
  };

  const handleComprasPress = () => {
    navigation.navigate('Compras'); 
  };

  const handleCarteiraPress = () => {
    navigation.navigate(''); 
  };

  const handleBoletosPress = () => {
    navigation.navigate('Money'); 
  };

  const handleContaPress = () => {
    navigation.navigate('Login'); 
  };
  

  return (
    <ScrollView style={styles.container} horizontal={true} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton} onPress={handleEntradasPress}>
        <View style={styles.areaButton}>
          <AntDesign name='addfolder' size={26} color='#000' />
        </View>
        <Text style={styles.buttonlabel}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={handleComprasPress}>
        <View style={styles.areaButton}>
          <AntDesign name='tagso' size={26} color='#000' />
        </View>
        <Text style={styles.buttonlabel}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={handleCarteiraPress}>
        <View style={styles.areaButton}>
          <AntDesign name='creditcard' size={26} color='#000' />
        </View>
        <Text style={styles.buttonlabel}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={handleBoletosPress}>
        <View style={styles.areaButton}>
          <AntDesign name='barcode' size={26} color='#000' />
        </View>
        <Text style={styles.buttonlabel}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={handleContaPress}>
        <View style={styles.areaButton}>
          <AntDesign name='user' size={26} color='#000' />
        </View>
        <Text style={styles.buttonlabel}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
        alignItems: "center",
        marginRight: 32,
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    buttonlabel:{
        marginTop: 4,
        textAlign: 'center',

    }
})