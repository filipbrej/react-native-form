import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default function FlatButton({ text }) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 7,
        backgroundColor: 'skyblue',
        width: 300,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})