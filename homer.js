import React, { Component } from "react"
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class HomerScreen extends Component {
    render(){
        return(
            <View>
                <Text> Uma mensagem de bom dia random </Text>
                <View style={styles.textodonick}>
                    <Image source={require("../assets/cerbit.jpg")} style={styles.imagemdocerbit}/>
                    <Text> CERBITAO DA MASSA </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imagemdocerbit : {
        width: 120,
        height: 120,
        borderRadius: 60
    }, 
    textodonick : {
        flexDirection: "row",
        alignItems: "center"
    }
})