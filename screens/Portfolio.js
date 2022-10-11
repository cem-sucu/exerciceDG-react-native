import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Portfolio = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
        </View>
    );
};

export default Portfolio;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffa500",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: { fontSize: 24 },
});
