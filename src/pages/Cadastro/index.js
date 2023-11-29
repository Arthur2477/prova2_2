import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {AsyncStorage} from 'react-native';
import { Formik } from 'formik';
import { Button } from 'react-native-paper';

export default function Cadastro({navigation}) {

  const handleHomePress = () => {
    navigation.navigate('Home');
  };


  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastroPress = () => {
    if (!nome || !dataNascimento || !rg || !cpf || !email || !senha) {
      Alert.alert('Preenchimento obrigatório', 'Por favor, preencha todos os campos.');
    } else {
      // Lógica para criar a conta
  
      // Navegar para a página "Endereco"
      navigation.navigate('Endereco');
    }
  };
  const handleDateChange = (text) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (dateRegex.test(text)) {
      setDataNascimento(text);
    } else {
    }
  };
  


  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre suas informações</Text>
      </Animatable.View>
      <ScrollView>
        <Animatable.View animation='fadeInLeft' style={styles.containerForm}>
          <Text style={styles.title}>Nome completo</Text>
          <TextInput
            placeholder='Insira seu nome'
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Text style={styles.title}>Data de nascimento</Text>
          <TextInput
            placeholder='01/01/2000'
            keyboardType={"phone-pad"}
            style={styles.input}
            value={dataNascimento}
            onChangeText={(text) => setDataNascimento(text)}
          />

          <Text style={styles.title}>Rg</Text>
          <TextInput
            placeholder='Insira seu Registro Geral'
            style={styles.input}
            keyboardType={"phone-pad"}
            value={rg}
            onChangeText={(text) => setRg(text)}
          />

          <Text style={styles.title}>CPF</Text>
          <TextInput
            placeholder='Digite o CPF...'
            style={styles.input}
            keyboardType={"phone-pad"}
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />

          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder='Digite seu email...'
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder='Sua senha'
            style={styles.input}
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleCadastroPress}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleHomePress}>
          <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
 


  container: {
    flex: 1,
    backgroundColor: '#8000ff',

  },
  containerHeader: {
    marginTop: '18%',
    marginBottom: '10%',
    paddingStart: '4%',
  },
  message: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginStart: '4%'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 3,
    borderRadius: 25,
    paddingStart: '5%',
    paddingEnd: '7%',
    marginStart: '4%',
    marginTop: '4%',
    marginEnd: '4%'
  },
  title: {
    fontSize: 18,
    marginTop: 28,
    fontWeight: 'bold',
    color: '#b98bd8'
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,

  },
  button: {
    backgroundColor: '#8000ff',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: '3%',
    marginEnd: '4%',
    marginTop: '5%',
    marginBottom: '10%',
    paddingStart: '2%',
    paddingEnd: '2%',
  },
  buttonText: {
    color: '#f5fffa',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 20,
    alignSelf: 'center',
  },
  registerText: {
    color: 'a1a1a1'
  }
})