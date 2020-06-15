import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, SafeAreaView, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ProgressCircle from 'react-native-progress-circle'
import LottieView from 'lottie-react-native'
import Colors from '../../constants/Colors';
import BleManager from 'react-native-ble-manager';

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

  //for sake of demo
  useInterval(() => {
    const rand = randomInteger(-1,1);
    setHeartBeat(heartBeat + rand)
    setPercent(Math.floor(100*heartBeat/160))
  }, 2000);

  // useEffect(() => {
  //   bluetooth()
  // }, [])

  const bluetooth = () => {
    const deviceUUID =
      Platform.OS === 'ios'
        ? 'A0AA0000-000A-00AA-AAAA-AA000AA00A00'
        : 'A0:00:0A:00:A0:00'
    BleManager.startDeviceScan(null, null, async (error, device) => {
      if (error) {
        console.error(error)
        BleManager.cancelDeviceConnection(deviceUUID)
      }
      console.log(device)
      if (device && device.localName === 'Device XX-00') {
        const jsonDataServiceUUID = 'A0AA0000-000A-00AA-AAAA-AA000AA00A00'

        const jsonFormattedCharacteristicUUID ='A0AA0000-000A-00AA-AAAA-AA000AA00A00'

        BleManager.stopDeviceScan()
        await BleManager.connectToDevice(deviceUUID)

        await BleManager.discoverAllServicesAndCharacteristicsForDevice(deviceUUID)

        const read = await BleManager.readCharacteristicForDevice(
          deviceUUID,
          jsonDataServiceUUID,
          jsonFormattedCharacteristicUUID,
        )
        if (read.value) {
          console.log(read)
          const responseJson = Buffer.from(read.value, 'base64').toString()
          console.log(responseJson)
          setHeartBeat(responseJson);
        }
      }
    })
  }

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
