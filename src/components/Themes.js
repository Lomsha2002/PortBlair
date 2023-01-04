/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const DATA = [
  {
    no: 1,
    name: 'National Championship Class',
  },
  {
    no: 2,
    name: 'TRADITIONAL PHILATELY',
  },
  {
    no: 3,
    name: 'POSTAL HISTORY',
  },
  {
    no: 4,
    name: 'POSTAL STATIONERY',
  },
  {
    no: 5,
    name: 'AEROPHILATELY/ ASTROPHILATELY ',
  },
  {
    no: 6,
    name: 'THEMATIC',
  },
  {
    no: 7,
    name: 'MAXIMAPHILY',
  },
  {
    no: 8,
    name: 'REVENUE',
  },
];

export const Themes = () => {
  const renderItem = ({item}) => {
    <View>
      <Text>{item.no}</Text>
      <Text>{item.name}</Text>
    </View>;
  };
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
