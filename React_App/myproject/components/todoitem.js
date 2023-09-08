import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {

    return (

        <View style={styles.item}>
            <Text style={styles.textprop}>
                {item.text}
            </Text>
            <TouchableOpacity style={styles.delete} onPress={() => pressHandler(item.key)}>
                <View>
                    <MaterialIcons name='delete' size={18} color='#333' />
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,

    },
    textprop: {
        flex: 10
    },
    delete: {
        flex: 1,
        alignItems: 'flex-end',
    }
})