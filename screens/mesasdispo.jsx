import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const RestaurantTables = () => {
  const [tables, setTables] = useState([
    { id: '1', name: 'Mesa 1', status: 'Disponible', seats: 4, location: 'Ventana' },
    { id: '2', name: 'Mesa 2', status: 'Ocupada', seats: 6, location: 'Esquina' },
    { id: '3', name: 'Mesa 3', status: 'Disponible', seats: 2, location: 'Centro' },
    { id: '4', name: 'Mesa 4', status: 'Disponible', seats: 8, location: 'Pasillo' },
    { id: '5', name: 'Mesa 5', status: 'Disponible', seats: 5, location: 'Patio' },
    // Agrega más mesas según sea necesario
  ]);

  const toggleTableStatus = (tableId) => {
    setTables((prevTables) => {
      return prevTables.map((table) => {
        if (table.id === tableId) {
          // Cambia el estado de 'Ocupada' a 'Disponible' y viceversa
          table.status = table.status === 'Ocupada' ? 'Disponible' : 'Ocupada';
        }
        return table;
      });
    });
  };

  const getButtonColor = (status) => {
    // Asigna un color diferente según el estado de la mesa
    return status === 'Ocupada' ? '#EF4444' : '#2ecc71';
  };

  const renderTableItem = ({ item }) => (
    <View style={styles.tableItem}>
      <Text style={styles.tableName}>{item.name}</Text>
      <Text style={styles.tableDetails}>Asientos: {item.seats}</Text>
      <Text style={styles.tableDetails}>Ubicación: {item.location}</Text>
      <TouchableOpacity
        style={[styles.tableStatusButton, { backgroundColor: getButtonColor(item.status) }]}
        onPress={() => toggleTableStatus(item.id)}
      >
        <Text style={styles.tableStatusButtonText}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Mesas Disponibles</Text>
      <FlatList
        data={tables}
        keyExtractor={(item) => item.id}
        renderItem={renderTableItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFD3E0',
    padding: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tableItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    width: 300,
  },
  tableName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableDetails: {
    fontSize: 14,
    color: '#888',
  },
  tableStatusButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',  // Ajusta el ancho para ocupar toda la fila
  },
  tableStatusButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default RestaurantTables;
