import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.sunImage}
        source={require('./assets/sun.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sunImage: {
    width: 256,
    height: 256
  }
});
