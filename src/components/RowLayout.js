import React from 'react'
import { View, Text } from 'react-native'
import { styles }from '../style'

const RowLayout = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

export default RowLayout
