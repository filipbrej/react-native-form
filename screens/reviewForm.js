import React from 'react'
import { View, StyleSheet, Button, TextInput, Text } from 'react-native'
import { Formik } from 'formik'
import { globalStyles } from '../styles/globalStyles'
import * as yup from 'yup'

import FlatButton from '../shared/button'

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container}>
            <Formik 
                validationSchema={ReviewSchema}
                initialValues={{title: '', body: '', rating: ''}} onSubmit={(values, actions) => {
                    addReview(values)
                    actions.resetForm()
                }}>{(props) => (
                <View>
                    <TextInput 
                        style={globalStyles.input} 
                        placeholder='Review Title' 
                        onChangeText={props.handleChange('title')}
                        value={props.values.title} 
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                    <TextInput 
                        multiline
                        minHeight={100}
                        style={globalStyles.input} 
                        placeholder='Review Body' 
                        onChangeText={props.handleChange('body')}
                        value={props.values.body} 
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                    <TextInput 
                    keyboardType='numeric'
                        style={globalStyles.input} 
                        placeholder='Rating' 
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating} 
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                    <FlatButton text='Submit' onPress={props.handleSubmit} />
                </View>
            )}
            </Formik>
        </View>
    )
};
