// VENDOR imports
import React from 'react';
import {ImageBackground, Text, StyleSheet, View, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// imports
import {uri} from '../modules/constants';

type Props = {
  imageId: number;
};

export const UserBar = (props: Props) => {
  return (
    <View style={styles.userBar}>
      <Image
        style={styles.profileImage}
        source={{uri: uri + '/id/' + props.imageId + '/60'}}
      />
      <Text style={styles.userName}>username</Text>
      <View style={{flexGrow: 1}} />
      <Text style={styles.menu}>...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userBar: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    paddingTop: 5,
    marginLeft: 10,
    paddingBottom: 5,
  },
  userName: {
    fontWeight: '100',
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  menu: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    paddingRight: 15,
    alignSelf: 'center',
  },
});