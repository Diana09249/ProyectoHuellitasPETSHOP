import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductItem = ({ title, imageUrl, price, onAddToCart, onAddToFavorites }) => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleButtons}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>S/. {price}</Text>
      {showButtons && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
            <Text style={styles.buttonText}>Añadir al Carrito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={onAddToFavorites}>
            <Text style={styles.buttonText}>Añadir a Favoritos</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductItem;
