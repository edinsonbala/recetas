import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from "./InputField";
import { AppContext } from '../contexts/app';

export default function Search({set}) {

  const [search, setSearch] = useState("");
  useEffect(() => {
    set(search);
  }, [search]);
  return (
    <>
      <View style={styles.searchContainer}>
        <InputField
          placeholder="Search by name"
          type={1}
          set={setSearch}
          containerStyle={styles.input}
          value={search}
        />
       
      </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "4%",
    marginTop: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    marginRight: "5%",
    borderColor:"transparent"
  },
  filterDisplay: {
    backgroundColor: "#161619",
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    width: '90%',
    marginLeft: "5%",
    marginBottom: 10,
  },
  filterText: {
    color: '#fff',
  }
});
