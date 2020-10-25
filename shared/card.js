import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowColor: '#333',
        shadowRadius: 2,
        margin: 5,
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
})