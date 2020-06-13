import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, SafeAreaView
} from 'react-native';
import HeartBeat from '../../components/HeartBeat/HeartBeat';
import Colors from '../../constants/Colors';
import Header from './../../components/Header/Header'

const MainPage = (props) => {
  const dispatch = useDispatch();

  return (
    <>
    <SafeAreaView style={{ flex: 0, backgroundColor:Colors.primary }} />
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.container}>
        <HeartBeat />
      </View>
    </SafeAreaView>
    </>
  )
}

const styles= {
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}


export default MainPage;
