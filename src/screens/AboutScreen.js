/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Footer} from '../components/Footer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AboutScreen = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(3),
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon color="#EAC675" name="arrow-left" size={hp(2.5)} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: hp(2),
              color: '#EAC675',
              letterSpacing: 2,
              fontWeight: '500',
            }}>
            ABOUT
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon color="#EAC675" name="more-vertical" size={hp(2.5)} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: hp(3.5),
        }}>
        <Image
          source={require('../assets/images/AmritPex_Font.png')}
          style={{height: hp(2.6), width: hp(28)}}
        />
      </View>
      <View style={{paddingHorizontal: wp(6)}}>
        <Text style={{color: '#EAC675', marginBottom: hp(2)}}>
          What is AMRITPEX 2023?
        </Text>
        <Text style={{color: '#DADADA', lineHeight: hp(3), fontSize:hp(2)}}>
          AMRITPEX-2023 is a National Philatelic Exhibition for celebrating
          Azadi Ka Amrit Mahotsav which is to be held from 11th to 15th February
          2023, in cooperation with (PCI). The exhibition will highlight India’s
          history, culture, art, and heritage over the years through stamps and
          pictorial collections. {'\n'}
          For more than 150 years, the Department of Posts (DoP) has been the
          backbone of the country's communication and has played a crucial role
          in the country's social and economic development. With 1,56,434 post
          offices, the DoP has the most widely distributed postal network in the
          world.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#DFDFDF',
          marginHorizontal: wp(6),
          paddingVertical: hp(1.5),
          paddingHorizontal: wp(1.5),
          borderRadius: hp(1),
          marginVertical: hp(3),
        }}>
        <Text style={{color: '#103994', letterSpacing: 1}}>
          <Text style={{fontWeight: '600'}}>Dates</Text> - 11-15 February 2023
        </Text>
        <Text style={{color: '#103994', letterSpacing: 1}}>
          <Text style={{fontWeight: '600'}}>Location</Text> - Pragati Maidan,
          New Delhi{' '}
        </Text>
      </View>
      <View>
        <Text style={{fontSize:hp(2.0), color:'white', paddingHorizontal:wp(3), marginBottom:hp(2)}}>Themes</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp(3)}}>
          <Text style={{fontSize:hp(2.0), color:'white'}}>01</Text>
          <Text style={{fontSize:hp(2.0), color:'white'}}>AZADI KA AMRIT</Text>
          <TouchableOpacity><Text style={{fontSize:hp(1.5), color:'white'}}>View</Text></TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#103994',
    flex: 1,
    paddingTop: hp(3),
  },
});

export default AboutScreen;
