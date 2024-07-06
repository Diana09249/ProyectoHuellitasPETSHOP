import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ title, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
});

export default CategoryItem;
