// Exercice 1
import { StatusBar, View, StyleSheet } from "react-native";
import React from "react";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";

export default function App() {
    StatusBar.setBarStyle("dark-content", true);

    return (
        <View style={styles.container}>
            <Home />
            <Portfolio />
        </View>
    );
}

const styles = StyleSheet.create({});
