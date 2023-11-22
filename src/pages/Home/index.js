import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';


const list = [{

  id: 1,
  label: 'Boleto conta luz',
  value: '300,90',
  date: '17/05/23',
  type: 0 
},
 { id: 2,
  label: 'Boleto conta agua',
  value: '500,90',
  date: '16/05/23',
  type: 0
},
{ id: 3,
  label: 'Salario',
  value: '500.500,90',
  date: '06/05/23',
  type: 1
}
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name= 'Arthur Rodrigues'/>
      <Balance saldo='9.250.90' gastos='-527,00'/>
      <Actions />
      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) =><Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
