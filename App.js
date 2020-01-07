import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Text } from 'react-native';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollBox}>
        <View style={styles.body}>
          <Text style={styles.welcomeText}>Welcome To Guild Hall</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollBox: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcomeText: {
    color: '#000',
    fontSize: 20
  }
});

export default App;
