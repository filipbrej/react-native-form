import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/globalStyles'


import Card from '../shared/card'
import ReviewForm from './reviewForm'
export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReiews] = useState([
        {title: "zelda", rating: 5, body: 'lorem ipsum', key: 1},
        {title: "mario", rating: 3, body: 'lorem ipsum', key: 2},
        {title: "metroid", rating: 4, body: 'lorem ipsum', key: 3},
    ])

    const addReview = (review) => {
        review.key = Math.random().toString()
        setReiews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons name='close' size={24} onPress={() => setModalOpen(false)} style={{...styles.modalToggle, ...styles.modalClose}} />
                    <ReviewForm addReview={addReview} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name='add' size={24} onPress={() => setModalOpen(true)} style={styles.modalToggle} />

            <FlatList data={reviews}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(`Details`, item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                      )}
            ></FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 50,
        marginBottom: 0,
        alignSelf: 'flex-end',
        right: 30
    }
})