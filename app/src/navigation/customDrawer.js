import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    DrawerItems
  } from 'react-navigation';

import {
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Button
} from 'react-native';
import DrawerProfile from './DrawerProfile';
import Colors from '../constants/Colors';

export default function customDrawer(props) {
  const dispatch = useDispatch();

  const logout = () => {
    console.log('logout')
  }

  return (
    <View style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
              <DrawerProfile />
              <DrawerItems {...props} />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: Colors.grey,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 15
  }
});
