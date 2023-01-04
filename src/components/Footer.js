/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Footer = props => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Icon size={hp(3)} color="#103994" name="home" />
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#103994'}}>Home</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Gallery');
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Icon size={hp(3)} color="#585858" name="home" />
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#585858'}}>Gallery</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Icon size={hp(3)} color="#585858" name="Home" />
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#585858'}}>Quiz</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Icon size={hp(3)} color="#585858" name="Home" />
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#585858'}}>Pass</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(8),
    backgroundColor: '#EAC675',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
});
