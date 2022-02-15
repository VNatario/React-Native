import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function Button (){
    return(

        <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7} 
                // onPress={handleNewAddNewSkill}   
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#a370f7',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,

    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
})