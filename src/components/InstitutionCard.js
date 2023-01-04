/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InstitutionCard = props => {
  const handleCard = props.handleCard;
  const [isChecked, setIsChecked] = useState(false);
  const iconName = isChecked ? "checkbox-marked" : "checkbox-blank-outline";
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
    <ImageBackground style={{height:hp(70), paddingVertical:hp(3.2), width:wp(90), paddingHorizontal:wp(7)}} source={require('../assets/images/Image_bg.png')}>
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => {
            handleCard('Individual');
        }}>
          <View style={{backgroundColor:'white', padding:wp(2), borderRadius:wp(2), paddingHorizontal:wp(5.5), marginRight:wp(6), width:wp(35)}}>
            <Text style={styles.headingStyle}>Individual</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            handleCard('Institution');
        }}>
          <View style={{backgroundColor:'#EAC675', padding:wp(2), borderRadius:wp(2), paddingHorizontal:wp(4)}}>
            <Text style={styles.headingStyle}>Institution</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:hp(1)}}>
        <View style={{marginVertical:hp(1)}}><TextInput style={styles.textInputBar} placeholder='Name of Institution' backgroundColor='#DEDEDE'/></View>
        <View style={{marginVertical:hp(1)}}><TextInput style={styles.textInputBar} placeholder='Contact Person' backgroundColor='#DEDEDE'/></View>
        <View style={{marginVertical:hp(1)}}><TextInput style={styles.textInputBar} placeholder='Phone Number' backgroundColor='#DEDEDE'/></View>
        <View style={{marginVertical:hp(1), marginBottom:hp(3)}}><TextInput style={styles.textInputBar} placeholder='Number of Attendees' backgroundColor='#DEDEDE'/></View>
        <View style={{marginTop:wp(-3), flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity onPress={() => {
                setIsChecked(!isChecked);
            }}>
                <View style={{marginRight:wp(1)}}>
                    <Icon name={iconName} size={20} color='#103994'/>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={{color:'#103994', fontSize:hp(1.5), fontWeight:'600'}}>Confirm Your Presence</Text>
            </View>
        </View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center', marginTop:hp(3)}}>
        <TouchableOpacity onPress={() => {
            navigation.push('Home');
        }}>
            <View style={{backgroundColor:'#103994', width:wp(55), justifyContent:'center', alignItems:'center', height:hp(6), borderRadius:hp(2)}}>
                <Text style={{color:'white', fontSize:hp(2), fontWeight:'600'}}>SignUp</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center', alignItems:'center', marginTop:hp(2)}}>
          <Text style={{color:'black', fontWeight:'500'}}>Follow us on</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:hp(3), paddingHorizontal:wp(9)}}>
          <Image style={{height:hp(3), width:hp(3)}} source={require('../assets/images/Instagram_Icon.png')}/>
          <Image style={{height:hp(3), width:hp(3)}} source={require('../assets/images/Facebook_Icon.png')}/>
          <Image style={{height:hp(3), width:hp(4)}} source={require('../assets/images/Youtube_Icon.png')}/>
          <Image style={{height:hp(3), width:hp(3.5)}} source={require('../assets/images/Twitter_Icon.png')}/>
        </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'white',
        height:hp(80),
        borderRadius:hp(1.5),
        padding:hp(2.5),
        justifyContent:'center',
        alignItems:'center',
      },
      headingStyle: {
        color: '#103994',
        fontSize:hp(2.5),
        fontWeight:'600',
      },
      textInputBar:{
        borderRadius:wp(2),
        padding:wp(3),
        fontWeight:'600',
      }
  });
  

export default InstitutionCard;