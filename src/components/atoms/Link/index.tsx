import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'

interface Props {
    label: string;
    onPress(): any;
}

const Link: React.FC<Props>  = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.text}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: {
        color: colors.text.secondary,
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 16
    }
})
