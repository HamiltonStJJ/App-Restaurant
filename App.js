import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/formulario_Log';
/*import RestaurantTables from './screens/mesas';    */


export default function App() {
  return (
      <Login/>
    /*  <RestaurantTables/>*/
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
