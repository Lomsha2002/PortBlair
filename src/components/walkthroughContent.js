/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const WalkthroughContent = () => {
  return (
    <View>
      <View style={styles.imageDivStyle}>
        <Image style={styles.imageStyle} source={require('../assets/images/Logo.png')}/>
      </View>
      <View style={{marginHorizontal:wp(5)}}>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:hp(10)}}>
            <Text style={styles.headingStyle}>Lorem ipsum dolor sit amet consectetur. In malesuada.</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:hp(4)}}>
            <Text style={styles.textStyle}>Lorem ipsum dolor sit amet consectetur. Eleifend donec pretium in porta cras felis.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#103993',
//     flex: 1,
//   },
  imageDivStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp(18),
  },
  imageStyle:{
    height:hp(24),
    width:wp(100),
  },
  headingStyle:{
    fontSize:hp(3),
    fontWeight:'600',
    color:'white',
  },
  textStyle:{
    fontSize:hp(2),
    fontWeight:'600',
    color:'white',
  },
});

export default WalkthroughContent;