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
            <TouchableOpacity onPress={() => {this.props.navigation.replace("Home")}} style={styles.button}>
                <Text> Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textinutil}> Precisa de uma conta? </Text>
            </TouchableOpacity>
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
        fontSize: 18
    },

    IMAGEMDOFONI: {
        width: 171,
        height: 159,
    },
    
    button: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 40
    }, 
})