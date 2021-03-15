import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { colors } from '../../../utils'

interface Props {
    label: string;
}
  
const Button: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}


export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.main,
        paddingVertical: 10,
        borderRadius: 10,
    },
    label: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.text.button
    }
})
