/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import {AcitvityCard} from '../components/ActivityCard';
import { Footer } from '../components/Footer';

const DATA = [
  {
    id: 1,
    eventName: 'Postcard Writing by Daakroom',
    date: 'Sunday, February 12th, 2023',
    time: '11:00 AM',
  },
  {
    id: 2,
    eventName: 'Postcard Writing by Daakroom',
    date: 'Sunday, February 12th, 2023',
    time: '11:00 AM',
  },
  {
    id: 3,
    eventName: 'Postcard Writing by Daakroom',
    date: 'Sunday, February 12th, 2023',
    time: '11:00 AM',
  },
  {
    id: 4,
    eventName: 'Postcard Writing by Daakroom',
    date: 'Sunday, February 12th, 2023',
    time: '11:00 AM',
  },
  {
    id: 4,
    eventName: 'Postcard Writing by Daakroom',
    date: 'Sunday, February 12th, 2023',
    time: '11:00 AM',
  },
  {
    id: 4,
    eventName: 'Postcard Writing by Daakroom',
    date: 'Sunday, February 12th, 2023',
    time: '11:00 AM',
  },
  {
    id: 4,
    eventName: 'Postcard Writing by Daakroom',
    date: 'Sunday, February 12th, 2023',
    time: '11:00 AM',
  },
];

const ActivitiesScreen = props => {
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
            ACTIVITIES
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
          borderBottomColor: 'rgba(141, 141, 141, 0.6)',
          borderBottomWidth: 1,
          marginHorizontal: wp(8),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#F8F8F8', fontSize: hp(1.4)}}>Select Date</Text>
          <Text style={{color: '#F8F8F8', fontSize: hp(1.4)}}>
            February, 2023
          </Text>
        </View>
        <View style={{marginVertical:hp(1), flexDirection:'row', justifyContent:'space-around'}}>
          <TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(10), justifyContent:'center', alignItems:'center', borderRadius:hp(0.3), paddingVertical:hp(0.4)}}>
              <Text>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(10), justifyContent:'center', alignItems:'center', borderRadius:hp(0.3), paddingVertical:hp(0.4)}}>
              <Text>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(10), justifyContent:'center', alignItems:'center', borderRadius:hp(0.3), paddingVertical:hp(0.4)}}>
              <Text>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(10), justifyContent:'center', alignItems:'center', borderRadius:hp(0.3), paddingVertical:hp(0.4)}}>
              <Text>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(10), justifyContent:'center', alignItems:'center', borderRadius:hp(0.3), paddingVertical:hp(0.4)}}>
              <Text>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 1)', width:wp(10), justifyContent:'center', alignItems:'center', borderRadius:hp(0.3), paddingVertical:hp(0.4)}}>
              <Text>All</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={DATA}
          renderItem={({item}) => (
            <AcitvityCard
              eventName={item.eventName}
              date={item.date}
              time={item.time}
            />
          )}
        />
      </View>
      <Footer/>
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

export default ActivitiesScreen;
