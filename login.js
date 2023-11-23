import React, { Component } from "react"
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class LoginScreen extends Component {
    render(){
        return (
           <View style={styles.container}>
            <Text style={styles.textinutil}> Login com sua conta Spotify </Text>
            <Image
              source={require("../assets/fone.jpg")}
              style={styles.IMAGEMDOFONI}>
            </Image>
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
    },

    textinutil: {
        color: "white",
        fontSize: 22
    },

    IMAGEMDOFONI: {
        width: 171,
        height: 159,
    }
})