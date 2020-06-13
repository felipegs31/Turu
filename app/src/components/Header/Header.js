import React from 'react';
import {
  View, Text, StyleSheet, Image, StatusBar, TouchableOpacity
} from 'react-native';
import Colors from '../../constants/Colors';
import MenuIcon from './../../components/UI/MenuIcon';
import { withNavigation } from 'react-navigation';

const Header = (props) => {

  return (
    <>
      <StatusBar backgroundColor={Colors.primary}/>
        <View style={{ ...styles.container, backgroundColor: Colors.primary }}>
            <View style={{flexDirection: 'row'}}>
                <MenuIcon navigate={() => props.navigation.toggleDrawer()} />
                <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('./../../assets/logo.jpeg')} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerTitleBold}>TURU</Text>
                </View>
            </View>
        </View>
      </>
  )
}

export default withNavigation(Header)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: Colors.primary,
    padding: 10,
    alignItems: 'center',
    width: "100%",
    justifyContent: 'space-between'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  logo: {
    width: 28,
    height: 28,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleBold: {
    color: '#FFDE59',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
  },
  iconMargin: {
    marginRight: 20,
    position: 'relative'
  },
  badge: {
    position: 'absolute',
    top: 10,
    backgroundColor: "#ff0000",
    left: -20,
    borderRadius: 23,
    width: 23,
    height: 23,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
