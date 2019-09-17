import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles }from '../style'
import basketIcon from '../images/basket.png'

function Row (record) {
    return (        
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Image source={basketIcon} style={styles.icon}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.items}>{record.items} Items</Text>
                <Text style={styles.address}>{record.address}</Text>
            </View>
            <View>
                <Text style={styles.date}>{record.date}</Text>
                <Text style={styles.price}>$ {record.total}</Text>
            </View>
        </View>
    )
}

export default Row