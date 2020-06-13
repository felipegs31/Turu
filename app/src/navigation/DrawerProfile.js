import React, { useState, useEffect, useCallback } from 'react';

import {
  View, Text, StyleSheet
} from 'react-native';

export default function DrawerProfile(props) {

  return (
    <View style={styles.container}>
      <View style={styles.emptyAvatar}>
        <Text style={{color: '#fafafa', fontSize: 20}}>Foto</Text>
      </View>
      <Text style={styles.name}>Felipe</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  emptyAvatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#bdbdbd",
    color: '#fafafa',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom:10
  },
  name: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5
  },
});
