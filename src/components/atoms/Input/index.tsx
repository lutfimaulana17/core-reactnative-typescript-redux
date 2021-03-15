import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { colors } from '../../../utils'
 
interface Props {
    label: string;
    secureTextEntry?: boolean;
  }
  
const Input: React.FC<Props> = (props) => {
    const [border, setBorder] = useState(colors.border)

    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }

    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                onFocus={onFocusForm} 
                onBlur={onBlurForm} 
                style={[styles.input, {borderColor: border}]} 
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}


export default Input

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        padding: 12
    }
})
