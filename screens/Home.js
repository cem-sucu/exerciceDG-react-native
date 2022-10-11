import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#add8e6",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: { fontSize: 24 },
});
