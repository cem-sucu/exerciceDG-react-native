// Exercice 1
import React, { useState } from "react";
import { StatusBar, View, StyleSheet, Text, SectionList } from "react-native";

export default function App() {
    StatusBar.setBarStyle("dark-content", true);

    const obj = [
        {
            role: "Père",
            data: ["Stan", 45],
        },
        {
            role: "Mère",
            data: ["Francine", 45],
        },
        {
            role: "Fille",
            data: ["hayley", 18],
        },
        {
            role: "Fils",
            data: ["Steve", 14],
        },
        {
            role: "Alien",
            data: ["Roger", 1020],
        },
        {
            role: "Poisson",
            data: ["Klaus", 30],
        },
    ];

    const [family, setFamily] = useState(obj);

    return (
        <View style={styles.container}>
            <SectionList
                sections={family}
                keyExtractor={(item, index) => index.toString()}
                renderSectionHeader={({ section }) => (
                    <View style={styles.listRole}>
                        <Text style={styles.textList}>{section.role}</Text>
                    </View>
                )}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listData}>
                            <Text style={styles.textListData}>{item}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        // justifyContent: "flex-start", pour afficher en haut on peut tres bien s'en passer du flex-start et rien mettre
        padding: 6,
        marginTop: 20,
        // justifyContent: "space-around"
    },
    listRole: {
        margin: 10,
        justifyContent: "center",
        backgroundColor: "#0898ff",
        alignItems: "center",
    },
    listData: {
        margin: 10,
        justifyContent: "center",
        backgroundColor: "#a9a9a9",
        alignItems: "center",
    },
    textList: {
        color: "#FFFFFF",
        padding: 30,
        fontSize: 20,
    },
    textListData: {
        color: "#ffffff",
        padding: 9,
        fontSize: 19,
    },
});
