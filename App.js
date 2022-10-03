// Exercice 1
import React, { useState } from "react";
import {
    StatusBar,
    View,
    StyleSheet,
    Text,
    ScrollView,
    RefreshControl,
    Alert,
} from "react-native";

export default function App() {
    StatusBar.setBarStyle("dark-content", true);
    const obj = [
        { id: "1", name: "Stan", age: 45 },
        { id: "2", name: "Francine", age: 45 },
        { id: "3", name: "hayley", age: 18 },
        { id: "4", name: "Steve", age: 14 },
        { id: "5", name: "Roger", age: 1020 },
        { id: "6", name: "Klaus", age: 30 },
    ];

    const [family, setFamily] = useState(obj);
    const [refresh, setRefresh] = useState(false);

    /*     //TODO methode qui va permettre de rafraichir la page au bout de 2 seconde
    const wait = (timeout) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };

    const onRefreshing = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false)); //avec le const wait crée cela permet de rafraichr automatique apres 2s
        console.warn("la page se rafrîchie"); // message warning
    }); //TODO fin de la methode*/

    //TODO méthode pour rafraichir la page en passant par la validation via le alert généré
    const onRefresh = () => {
        setRefresh(true);
        Alert.alert("Infos", "voulez vous lancez le refresh ?", [
            {
                text: "D'accord",
                onPress: () => console.warn("la page s'est rafraichie"),
                style: "cancel",
            },
        ]);
        setRefresh(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={onRefresh}
                        tintColor="#dc143c"
                        title="rafraichisement"
                    />
                }
            >
                {family.map((member) => {
                    return (
                        <View key={member.id} style={styles.containerMember}>
                            <Text style={styles.memberText}>
                                Nom: {member.name} | Age: {member.age}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
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
        fontSize: 40,
    },
});
