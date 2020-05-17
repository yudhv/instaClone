// VENDOR imports
import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {Colors, DebugInstructions} from 'react-native/Libraries/NewAppScreen';

// imports
import {UserBar} from './UserBar';
import {SocialBar} from './SocialBar';
import {uri} from '../modules/constants';

export const Post = (props) => {
  const [deviceWidth, setDeviceWidth] = React.useState(
    Dimensions.get('window').width,
  );
  const [imageId, setImageId] = React.useState<number>(
    Math.floor(Math.random() * 1000),
  );
  const [userImageId, setUserImageId] = React.useState<number>(
    Math.floor(Math.random() * 1000),
  );
  React.useEffect(() => {
    console.log('Device width is ', deviceWidth);
    console.log('Image ID is ', imageId);
  }, [deviceWidth]);
  return (
    <View style={styles.post}>
      <UserBar imageId={userImageId} />
      <ImageBackground
        style={styles.postImage}
        source={{uri: uri + '/id/' + imageId + '/600'}}
      />
      <SocialBar />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  postImage: {
    flex: 8,
    width: '100%',
  },
});
