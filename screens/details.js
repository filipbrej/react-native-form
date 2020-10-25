import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import Card from '../shared/card'

export default function Details({ route, navigation }) {

    const { title, body, rating } = route.params
    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
            </Card>
        </View>
    )
};
