import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./pages/Home";
import Money from "./pages/Money";
import Store from "./pages/Store";
import CustomTabBar from "./components/CustomTabBar";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Endereco from './pages/Endereco'

const Tab = createBottomTabNavigator();
const Tab2 = createStackNavigator();

export function Routes() {
  return (
    <Tab2.Navigator
      initialRouteName='StackRoutes'
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab2.Screen
        name='Login'
        component={Login}
      />
      <Tab2.Screen
        name='StackRoutes'
        component={Teste}
      />
      <Tab2.Screen
        name='Cadastro'
        component={Cadastro}
      />
      <Tab2.Screen
        name='Endereco'
        component={Endereco}
      />
      <Tab2.Screen
        name='Home'
        component={Home}
      />
      
    </Tab2.Navigator>

  )
}

const Teste = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#121212',
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#FFF'
        }
      }}

      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'compare-arrows'
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          tabBarIcon: 'attach-money'
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: 'storefront'
        }}
      />

    </Tab.Navigator>
  )
}