import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, SafeAreaView, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ProgressCircle from 'react-native-progress-circle'
import LottieView from 'lottie-react-native'
import Colors from '../../constants/Colors';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const HeartBeat = (props) => {
  const [heartBeat, setHeartBeat] = useState(64)
  const [percent, setPercent] = useState(0)

  useInterval(() => {
    const rand = randomInteger(-1,1);
    setHeartBeat(heartBeat + rand)
    setPercent(Math.floor(100*heartBeat/160))
  }, 2000);

  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={percent}
        radius={160}
        borderWidth={15}
        color={Colors.primary}
        shadowColor="#FFF"
        bgColor="#000"
      >
        <View style={styles.display}>
          <Text style={{ color: "#FFF", fontSize: 90 }}>{heartBeat}</Text>
          <View style={styles.unityContainer}>
            <LottieView style={{ marginTop: -5, width: 80, height: 80 }} source={require('./heart.json')} autoPlay loop speed={0.5} />
            <Text style={{ marginTop: -40, color: "grey", fontSize: 30 }}>bpm</Text>
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
    backgroundColor: Colors.secondary
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
