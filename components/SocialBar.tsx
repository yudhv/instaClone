// VENDOR imports
import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Icon} from 'react-native-elements';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

// imports

type Props = {
  isLike: boolean;
};

const SocialButtonBar = (props: Props) => {
  return (
    <View style={styles.buttonBar}>
      <SimpleLineIcon
        style={{...styles.icon, color: props.isLike ? 'red' : 'black'}}
        name="heart"
        size={25}
        color="red"
      />
      <SimpleLineIcon style={styles.icon} name="bubble" size={25} />
      <FeatherIcon style={styles.icon} name="send" size={25} />
      <View style={{flexGrow: 1}} />
      <FontAwesomeIcon style={styles.icon} name="bookmark" size={25} />
    </View>
  );
};

export const SocialBar = (props: Props) => {
  return (
    <View style={styles.socialBar}>
      <SocialButtonBar isLike={props.isLike} />
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
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});
