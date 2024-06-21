import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Categories } from '@/api/themealdb';

export default function Category({ setCategory }) {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  const index = async () => {
    const list = await Categories({});
    if (list.success) {
      setCategories(list.data);
    }
  };

  useEffect(() => {
    index();
  }, []);

  const handlePress = (category) => {
    if (activeCategory === category) {
      setActiveCategory('');
      setCategory('');
    } else {
      setActiveCategory(category);
      setCategory(category);
    }
  };

  return (
    <View style={styles.container}>
      {categories?.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, activeCategory === category.strCategory && styles.buttonActive]}
          onPress={() => handlePress(category.strCategory)}
        >
          <Image
            source={{ uri: category.strCategoryThumb }}
            style={styles.imagen}
          />
          <Text style={[styles.buttonText, activeCategory === category.strCategory && styles.buttonTextActive]}>
            {category.strCategory}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  button: {
    backgroundColor: '#f4f9ff',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#516780',
    fontSize: 16,
    marginLeft: 5, 
  },
  buttonActive: {
    backgroundColor: '#ef4c00',
  },
  buttonTextActive: {
    color: 'white',
  },
  imagen: {
    width: 20,
    height: 15,
  },
});
