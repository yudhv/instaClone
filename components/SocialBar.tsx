// VENDOR imports
import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Icon} from 'react-native-elements';

// imports

const SocialButtonBar = () => {
  return (
    <View style={styles.buttonBar}>
      {/* <Icon name="bru" type="heart-outline" /> */}
      <Icon name="ei-archive" type="evilicon" />
      <Text>Add jsx for the 4 buttons here</Text>
    </View>
  );
};

export const SocialBar = () => {
  return (
    <View style={styles.socialBar}>
      <SocialButtonBar />
    </View>
  );
};

const styles = StyleSheet.create({
  socialBar: {
    flex: 2,
    width: '100%',
  },
  buttonBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: Colors.darkred,
  },
});
