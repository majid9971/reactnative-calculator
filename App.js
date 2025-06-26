import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { add, subtract, multiply, divide } from './src/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>Add: {add(2, 3)}</Text>
      <Text style={styles.result}>Subtract: {subtract(10, 5)}</Text>
      <Text style={styles.result}>Multiply: {multiply(4, 3)}</Text>
      <Text style={styles.result}>Divide: {divide(10, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    fontSize: 20,
    margin: 10
  }
});
