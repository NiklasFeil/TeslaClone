import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from './styles';

const StyledButton = (props) => {

    const {type, content, onPress} = props;

    const backgroundColor = type === "primary" ? "#171A20A0" : "#FFFFFFA0";
    const textColor = type === "primary" ? "#FFFFFFC6" : "#171A20CC";

    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress ={() => onPress()}
            >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;