// Exercice 1
import React, { useState } from "react";
import { StatusBar, View, StyleSheet, Text, FlatList } from "react-native";

export default function App() {
    StatusBar.setBarStyle("dark-content", true);
    const obj = [
        { name: "Stan", age: 45 },
        { name: "Francine", age: 45 },
        { name: "hayley", age: 18 },
        { name: "Steve", age: 14 },
        { name: "Roger", age: 1020 },
        { name: "Klaus", age: 30 },
        { name: "Poli", age: 30 },
        { name: "Moris", age: 30 },
        { name: "Zeus", age: 30 },
        { name: "Athena", age: 30 },
        { name: "Aphrodite", age: 30 },
    ];

    const [family, setFamily] = useState(obj);
    const [refresh, setRefresh] = useState(false);

    const wait = (timeout) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    const onRefreshing = React.useCallback(() => {
        setRefresh(true);
        wait(2000).then(() => setRefresh(false)); //avec le const wait crée cela permet de rafraichr automatique apres 2s
        console.warn("la page se rafrîchie");
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={family}
                refreshing={false}
                onRefresh={onRefreshing}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.containerMember}>
                            <Text style={styles.memberText}>
                                Nom: {item.name} | Age: {item.age}
                            </Text>
                        </View>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
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
    containerMember: {
        margin: 10,
        justifyContent: "center",
        backgroundColor: "#0898ff",
        alignItems: "center",
    },
    memberText: {
        color: "#FFFFFF",
        padding: 30,
        fontSize: 20,
    },
});
