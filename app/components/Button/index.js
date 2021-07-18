import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default Button = ({ children, ...props }) => (
    <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});