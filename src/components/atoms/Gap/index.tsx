import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    height?: number;
    width?: number;
  }
  
const Gap: React.FC<Props> = (props) => {
    return <View style={{ height: props.height, width: props.width}} />
}


export default Gap

const styles = StyleSheet.create({})
