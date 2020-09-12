import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';

export default function App() {
  return (
    <View>
      <SafeAreaView style={styles.container} />
      <Text>Open up App.js to start working on your app!</Text>
      <Image style={styles.image}
              source={{uri: 'https://s23527.pcdn.co/wp-content/uploads/2017/03/wesaturate.jpg.optimal.jpg'}}
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
  image: {
    width: 1200,
    height: 1000,
    marginLeft: 10,
    marginTop: 10,
  }
});
