import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Cadastro } from '../Cadastro';
import React, { useState } from 'react';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastroPress = () => {
    navigation.push('Cadastro');
  };

  const handleHomePress = () => {
    navigation.push('Home');
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      // Lógica de autenticação aqui
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem Vindo a NuBank</Text>
      </Animatable.View>
      <Animatable.View animation='fadeInLeft' style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite um email...'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Sua senha'
          style={styles.input}
          keyboardType={"phone-pad"}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleHomePress}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={handleCadastroPress}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#8000ff',
    
  },
  containerHeader:{
    marginTop: '18%',
    marginBottom: '10%',
    paddingStart: '4%',
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginStart: '4%'
  },
  containerForm:{
    backgroundColor: '#fff',
    flex: 3,
    borderRadius: 25,
    paddingStart: '5%',
    paddingEnd: '7%',
    marginStart: '4%',
    marginTop: '4%',
    marginEnd: '4%'
  },
  title:{
    fontSize: 18,
    marginTop: 10,
    paddingVertical:18,
    fontWeight: 'bold',
    color: '#b98bd8'
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,

  },
  button:{
    backgroundColor: '#8000ff',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: '1%',
    marginEnd: '10%',
    marginTop: '12%',
    marginBottom: '2%',
    paddingStart: '2%',
    paddingEnd: '2%',
  },
  buttonText:{
    color: '#f5fffa',
    fontSize: 12,
    fontWeight: 'bold',

  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText:{
    color: 'a1a1a1'
  }
})
