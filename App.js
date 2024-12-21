import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Galen Abiyyu Rasyid</Text>
      <View style={styles.flexContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Light gray background
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Adds space between the text and the boxes
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Ensures some spacing between the boxes
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Change this color as desired
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green', // Change this color as desired
  },
});

export default App;
