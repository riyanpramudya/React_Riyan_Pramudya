import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(){
    const openMenu = () => {

    }
    return(
        <View style={styles.header}>
            <MaterialIcons name={'menu'} size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text  style={styles.headerText}></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        position: 'absolute',
        left: 16,

    }
})