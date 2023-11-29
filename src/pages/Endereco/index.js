import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'


export default function Endereco({ navigation }) {
  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const [adress, setAdress] = useState({
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: ''
  });

  console.log(adress);

  const getAdressFromApi = useCallback(() => {
    fetch(`https://viacep.com.br/ws/${adress.cep}/json/`)
      .then(res => res.json())
      .then((data) => {
        setAdress({
          bairro: data.bairro,
          localidade: data.localidade,
          logradouro: data.logradouro,
          uf: data.uf
        });
      })
      .catch(err => console.log('erro: ', err));
  }, [adress.cep]);
  return (
    <View style={styles.container}>

   <Animatable.View animation= 'fadeInLeft' daley={500} style={styles.containerHeader}>
    <Text style={styles.message}>Adicione seu Endereço</Text>
   </Animatable.View>

    <TouchableOpacity style={styles.actionButton} onPress={handleHomePress}>
        <View style={styles.areaButton}>
          <Text style={styles.textReturn}>Retornar a tela principal</Text>
        </View>
    </TouchableOpacity>

   <Animatable.View animation= 'fadeInLeft' style={styles.containerForm}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Text style={styles.title}>Endereço:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu CEP"
          onEndEditing={getAdressFromApi}
          onChangeText={(text) => setAdress((old) => ({ ...old, cep: text }))}
        />
        <Text style={styles.title}>Rua</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua"
          value={adress.logradouro}
          onChangeText={(text) => setAdress((old) => ({ ...old, logradouro: text }))}
        />
        <Text style={styles.title}>Bairro</Text>
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={adress.bairro}
          onChangeText={(text) => setAdress((old) => ({ ...old, bairro: text }))
          }
        />
        <Text style={styles.title}>Cidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={adress.localidade}
          onChangeText={(text) => setAdress((old) => ({ ...old, localidade: text }))}
        />
        <Text style={styles.title}>UF</Text>
        <TextInput
          style={styles.input}
          placeholder="UF"
          value={adress.uf}
          onChangeText={(text) => setAdress((old) => ({ ...old, uf: text }))}
        />
        <Text style={styles.title}>Número</Text>
        <TextInput
          style={styles.input}
          placeholder="Adicione o número da casa"
          keyboardType={"phone-pad"}
        />
        <Text style={styles.title}>Complemento</Text>
        <TextInput
          style={styles.input}
          placeholder="Logradouro, Prédio, Condominio"
        />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Endereço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleHomePress}>
        <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#8000ff',
  },
  titlePage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginStart: '4%'
  },
  title:{
    fontSize: 18,
    marginTop: 10,
    paddingVertical:18,
    fontWeight: 'bold',
    color: '#b98bd8'
  },
  form: {
    backgroundColor: '#fff',
    flex: 3,
    borderRadius: 25,
    paddingStart: '5%',
    paddingEnd: '7%',
    marginStart: '4%',
    marginTop: '4%',
    marginEnd: '4%',
    paddingVertical: '4%'
  },
  input: {
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
buttonText:{
    color: '#f5fffa',
    fontSize: 12,
    fontWeight: 'bold',
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
  message:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginStart: '4%'
  },
  containerHeader:{
    marginTop: '18%',
    marginBottom: '10%',
    paddingStart: '4%',
  },
  textReturn:{
    marginLeft: '50%'
  }
})

