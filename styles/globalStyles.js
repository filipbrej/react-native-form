import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    titleText: {
        fontFamily: 'montserrat-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        marginVertical: 10
    },
    errorText: {
        color: 'red'
    }
})