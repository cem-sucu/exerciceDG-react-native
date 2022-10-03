// Exercice 1
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function App() {

  const obj = [
    {id: "1", name: "Stan", age: 45},
    {id: "2", name: "Francine", age: 45},
    {id: "3", name: "hayley", age: 18},
    {id: "4", name: "Steve", age: 14},
    {id: "5", name: "Roger", age: 1020},
    {id: "6", name: "Klaus", age: 30},
  ]

  return (
    <View style={styles.container}>
      <Text>
        hello
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 50,
    margin: 5 
  }
});

