import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const MenuIcon = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.navigate}
    >
      <Icon
        name='ios-menu'
        size={28}
        color='#fff'
      />
    </TouchableOpacity>
  )
}

export default MenuIcon

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})