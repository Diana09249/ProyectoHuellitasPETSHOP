import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

const IconButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} style={styles.pressed} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pressed: {
    fontSize: 24, 
    opacity: 0.7,
    color: color,
  },
});

export default IconButton;