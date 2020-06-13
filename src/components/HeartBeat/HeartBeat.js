import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, SafeAreaView, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ProgressCircle from 'react-native-progress-circle'

const HeartBeat = (props) => {
  const dispatch = useDispatch();

  const heartBeat = useSelector(state => state.heartBeat.heartBeat)

  return (
    <View style={styles.container}>
      <ProgressCircle
            percent={30}
            radius={150}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#000"
        >
        <View style={styles.display}>
          <Text style={{color: "#FFF", fontSize: 90}}>{heartBeat}</Text>
          <View style={styles.unityContainer}>
            <Icon
              name='md-heart'
              size={50}
              color="#FF0000"
            />
            <Text style={{color: "grey", fontSize: 30}}>bpm</Text>
          </View>
        </View>
      </ProgressCircle>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  display: {
    display: 'flex',
    flexDirection: 'row'
  },
  unityContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  }
})


export default HeartBeat;
