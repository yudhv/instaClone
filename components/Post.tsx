// VENDOR imports
import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors, DebugInstructions} from 'react-native/Libraries/NewAppScreen';

// imports
import {UserBar} from './UserBar';
import {SocialBar} from './SocialBar';
import {uri} from '../modules/constants';

const DOUBLE_PRESS_DELAY: number = 300;

export const Post = (props) => {
  let lastTap: number | null = null;
  const [deviceWidth, setDeviceWidth] = React.useState(
    Dimensions.get('window').width,
  );
  const [imageId, setImageId] = React.useState<number>(
    Math.floor(Math.random() * 1000),
  );
  const [userImageId, setUserImageId] = React.useState<number>(
    Math.floor(Math.random() * 1000),
  );
  const [isLike, setIsLike] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log('Device width is ', deviceWidth);
    console.log('Image ID is ', imageId);
  }, [deviceWidth]);

  const toggleLike = () => {
    const now = Date.now();
    if (lastTap != null && now - lastTap <= DOUBLE_PRESS_DELAY) {
      console.log('Setting like status to ', !isLike);
      setIsLike(!isLike);
    } else {
      lastTap = now;
    }
  };

  return (
    <View style={styles.post}>
      <UserBar imageId={userImageId} />
      <TouchableOpacity
        activeOpacity={1}
        style={styles.postImage}
        onPress={toggleLike}>
        <ImageBackground
          style={{width: '100%', flex: 1}}
          source={{uri: uri + '/id/' + imageId + '/600'}}
        />
      </TouchableOpacity>
      <SocialBar isLike={isLike} />
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
