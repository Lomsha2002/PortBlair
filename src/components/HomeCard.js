/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const HomeCard = () => {
  return (
    <View style={styles.container}>
      <View style={{marginRight:wp(3)}}>
        <Image style={{height:hp(12), width:hp(12)}} source={require('../assets/images/image.png')}/>
      </View>
      <View style={{flex:1}}>
        <View style={{marginBottom:hp(1)}}>
          <Text style={{color:'black', fontWeight:'600'}}>Wall Painting Competition, 18th Dec 2022.</Text>
        </View>
        <View>
          <Text style={{color:'black'}}>Public Relations and Awareness Workshop, Jaipur</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#D9D9D9',
    flexDirection:'row',
    padding:hp(2),
    borderRadius:hp(1.5),
    marginBottom:hp(3)
  },
});
