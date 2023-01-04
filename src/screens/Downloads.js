/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import {Footer} from '../components/Footer';

const DownloadScreen = props => {
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
            DOWNLOADS
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon color="#EAC675" name="more-vertical" size={hp(2.5)} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{borderRadius:hp(1), justifyContent:'center', alignItems:'center', marginTop:hp(5)}}>
        <Image style={{height:hp(15), width:wp(90), borderTopLeftRadius:hp(1), borderTopRightRadius:hp(1)}} source={require('../assets/images/image.png')}/>
        <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(90), borderBottomLeftRadius:hp(1), borderBottomRightRadius:hp(1), flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp(3), height:hp(5), alignItems:'center'}}>
            <Text style={{fontSize:hp(2), color:'rgba(16, 57, 148, 1)', fontWeight:'500'}}>Prospectus</Text>
            <TouchableOpacity><Text style={{color:'rgba(112, 124, 239, 1)', textDecorationLine:'underline', fontSize:hp(1.5)}}>Download</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{borderRadius:hp(1), justifyContent:'center', alignItems:'center', marginTop:hp(2)}}>
        <Image style={{height:hp(15), width:wp(90), borderTopLeftRadius:hp(1), borderTopRightRadius:hp(1)}} source={require('../assets/images/image.png')}/>
        <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(90), borderBottomLeftRadius:hp(1), borderBottomRightRadius:hp(1), flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp(3), height:hp(5), alignItems:'center'}}>
            <Text style={{fontSize:hp(2), color:'rgba(16, 57, 148, 1)', fontWeight:'500'}}>Brochures</Text>
            <TouchableOpacity><Text style={{color:'rgba(112, 124, 239, 1)', textDecorationLine:'underline', fontSize:hp(1.5)}}>Download</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{borderRadius:hp(1), justifyContent:'center', alignItems:'center', marginTop:hp(2)}}>
        <Image style={{height:hp(15), width:wp(90), borderTopLeftRadius:hp(1), borderTopRightRadius:hp(1)}} source={require('../assets/images/image.png')}/>
        <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(90), borderBottomLeftRadius:hp(1), borderBottomRightRadius:hp(1), flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp(3), height:hp(5), alignItems:'center'}}>
            <Text style={{fontSize:hp(2), color:'rgba(16, 57, 148, 1)', fontWeight:'500'}}>Flyers</Text>
            <TouchableOpacity><Text style={{color:'rgba(112, 124, 239, 1)', textDecorationLine:'underline', fontSize:hp(1.5)}}>Download</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'white', padding:hp(1),marginHorizontal:wp(5), borderRadius:hp(0.6), marginTop:hp(3)}}>
        <Text style={{color:'black', fontWeight:'500'}}>Follow us on</Text>
        <Image style={{height:hp(3), width:hp(3)}} source={require('../assets/images/Instagram_Icon.png')}/>
        <Image style={{height:hp(3), width:hp(3)}} source={require('../assets/images/Facebook_Icon.png')}/>
        <Image style={{height:hp(3), width:hp(4)}} source={require('../assets/images/Youtube_Icon.png')}/>
        <Image style={{height:hp(3), width:hp(3.5)}} source={require('../assets/images/Twitter_Icon.png')}/>
      </View>
      <Footer navigation={navigation}/>
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

export default DownloadScreen;
