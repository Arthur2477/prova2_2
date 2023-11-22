import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsVerticalScrollIndicator={false} >
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesing name='addfolder' size={26} color='#000'/>
        </View>
        <Text style={styles.buttonlabel}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesing name='tagso' size={26} color='#000'/>
        </View>
        <Text style={styles.buttonlabel}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesing name='creditcard' size={26} color='#000'/>
        </View>
        <Text style={styles.buttonlabel}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesing name='barcode' size={26} color='#000'/>
        </View>
        <Text style={styles.buttonlabel}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesing name='setting' size={26} color='#000'/>
        </View>
        <Text style={styles.buttonlabel}>Conta</Text>
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