// Exercice 1
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function App() {
    const obj = [
        { id: "1", name: "Stan", age: 45 },
        { id: "2", name: "Francine", age: 45 },
        { id: "3", name: "hayley", age: 18 },
        { id: "4", name: "Steve", age: 14 },
        { id: "5", name: "Roger", age: 1020 },
        { id: "6", name: "Klaus", age: 30 },
    ];

    const [family, setFamily] = useState(obj);

    return (
        <View style={styles.container}>
            {family.map((member) => {
                return (
                    <View key={member.id} style={styles.containerMember}>
                        <Text style={styles.memberText}>
                            Nom: {member.name} | Age: {member.age}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        // justifyContent: "flex-start", pour afficher en haut on peut tres bien s'en passer du flex-start et rien mettre
        padding: 10,
        marginTop: 20,
    },
    containerMember: {
        margin: 10,
        justifyContent: "center",
        backgroundColor: "#0898ff",
        alignItems: "center",
    },
    memberText: {
        color: "#FFFFFF",
        padding: 14,
        fontSize: 21,
    },
});
