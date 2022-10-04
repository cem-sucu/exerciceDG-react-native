// Exercice 1
import React, { useState } from "react";
import {
    StatusBar,
    View,
    StyleSheet,
    Text,
    FlatList,
    RefreshControl,
} from "react-native";

export default function App() {
    StatusBar.setBarStyle("dark-content", true);
    const obj = [
        { name: "Stan", age: 45 },
        { name: "Francine", age: 45 },
        { name: "hayley", age: 18 },
        { name: "Steve", age: 14 },
        { name: "Roger", age: 1020 },
        { name: "Klaus", age: 30 },
        { name: "Poli", age: 99 },
        { name: "Moris", age: 77 },
        { name: "Zeus", age: 0 },
        { name: "Athena", age: 32 },
        { name: "Aphrodite", age: 8 },
    ];

    const [family, setFamily] = useState(obj);
    const [invert, setInvert] = useState(false);

    const onRefresh = () => setInvert(!invert);

    return (
        <View style={styles.container}>
            <FlatList
                data={family}
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
                horizontal={true}
                inverted={invert}
                refreshControl={
                    <RefreshControl refreshing={false} onRefresh={onRefresh} />
                }
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
