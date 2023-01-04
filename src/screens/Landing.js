/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Landing = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageDivStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/Header_Image.png')}
        />
      </View>
      <View style={styles.midContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headingStyle}>INDIA POST</Text>
          <Text style={[styles.headingStyle, {fontSize: hp(1.8)}]}>
            Presents
          </Text>
          <Text
            style={[
              styles.headingStyle,
              {fontSize: hp(2.8), fontWeight: '400', marginTop: hp(2)},
            ]}>
            AMRITPEX 2023
          </Text>
          <View style={{paddingVertical: hp(2)}}>
            <Image
              style={{height: hp(25), width: wp(100)}}
              source={require('../assets/images/Logo.png')}
            />
          </View>
          <View
            style={{
              borderBottomColor: '#EAC67566',
              borderBottomWidth: 1,
              width: wp(30),
            }}
          />
          <View style={{marginVertical: hp(1)}}>
            <Text
              style={[
                styles.headingStyle,
                {fontSize: hp(1.7), fontWeight: '400'},
              ]}>
              PRAGATI MAIDAN, NEW DELHI
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#EAC67566',
              borderBottomWidth: 1,
              width: wp(30),
            }}
          />
          <Text
            style={[
              styles.headingStyle,
              {fontSize: hp(2), marginVertical: hp(1.5)},
            ]}>
            in
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: wp(55),
            height: hp(5),
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              65
            </Text>
            <Text style={styles.textStyle}>Days</Text>
          </View>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              17
            </Text>
            <Text style={styles.textStyle}>Hours</Text>
          </View>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              29
            </Text>
            <Text style={styles.textStyle}>Minutes</Text>
          </View>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              60
            </Text>
            <Text style={styles.textStyle}>Seconds</Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{margin: hp(5)}}
          onPress={() => {
            navigation.push('WalkThrough1');
          }}>
          <View style={styles.button}>
            <Text style={{color: '#103993', fontWeight: '800'}}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAC675',
    // paddingVertical: 30,
  },
  imageDivStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(3.5),
  },
  imageStyle: {
    height: hp(7),
    width: wp(50),
  },
  midContainer: {
    backgroundColor: '#103993',
    height: hp(70),
    width: '100%',
    paddingVertical: hp(5),
  },
  headingStyle: {
    fontSize: hp(2.5),
    fontWeight: '500',
    color: 'white',
  },
  textStyle: {
    color: '#103993',
    fontSize: hp(1),
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: wp(70),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    borderRadius: 10,
  },
});

export default Landing;
