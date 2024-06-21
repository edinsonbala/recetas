import React, { useState,useEffect } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function InputField({ placeholder, containerStyle, icon, set, value, type = 0, textType = "" }) {
  const [inputValue, setInputValue] = useState(value.toString()); 
  const [ocultar, setOcultar] = useState(type === 2);
  useEffect(() => {
    setInputValue(value.toString());
 }, [value]);
  const onChangeText = (text) => {
    if (type === 0 || type === 2) {
      if (Array.isArray(set)) {
        set[0](prevState => ({
          ...prevState, 
          [set[1]]: text 
        }));
      } else {
        set(text);
      }
    }
    setInputValue(text);
  };

  const enviar = () => {
    set(inputValue);
  };

  useEffect(() => {
    if(inputValue==""){
      set("");
    }
 }, [inputValue]);
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 25,
        borderColor: Colors.light.borderColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
         backgroundColor: "#f4f9ff",
        ...containerStyle,
       
      }}
    >
      <TextInput
        secureTextEntry={ocultar}
        value={inputValue}
        placeholder={placeholder}
        style={{ flex: 1, paddingRight: 15 }}
        onChangeText={onChangeText}
        autoCapitalize="none"
        keyboardType={textType === 'numeric' ? 'numeric' : 'default'}
      />
      {type === 0 && icon && icon}
      {type === 1 && <TouchableOpacity onPress={() => enviar()}><FontAwesome name="search" size={24} color="#b30733" /></TouchableOpacity>}
      {type === 2 && (
        <TouchableOpacity onPress={() => setOcultar(!ocultar)}>
          {ocultar ? (
            <Entypo name="eye-with-line" size={24} color="#666" />
          ) : (
            <Entypo name="eye" size={24} color="#666" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
