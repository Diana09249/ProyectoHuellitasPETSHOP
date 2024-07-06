import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // Importar el Bottom Tab Navigator
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Cart from './screens/Cart';
import Favorites from './screens/Favorites';
import Home from './screens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();  // Crear el Bottom Tab Navigator

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#525FE1',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#f0f0f0' },
        headerShown: false,  // Ocultar el header de Stack Navigator
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "LOGIN",
            headerTintColor: 'white',
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#525FE1" },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}  // Usar el Bottom Tab Navigator
          options={{
            title: "Home",
            headerTintColor: 'white',
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#525FE1" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
