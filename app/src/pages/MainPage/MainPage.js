import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, SafeAreaView
} from 'react-native';
import HeartBeat from '../../components/HeartBeat/HeartBeat';

const MainPage = (props) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <HeartBeat />
    </SafeAreaView>
  )
}

const styles= {
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}


export default MainPage;
