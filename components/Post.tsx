// VENDOR imports
import React from 'react';
import {
  Image,
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

type Props = {
  author: string;
  width: number;
  height: number;
  uri: string;
};

const DOUBLE_PRESS_DELAY: number = 300;

export const Post = (props: Props) => {
  let lastTap: number | null = null;
  const [deviceWidth, setDeviceWidth] = React.useState(
    Dimensions.get('window').width,
  );
  React.useEffect(() => {
    console.log('Device width is ', deviceWidth);
  }, [deviceWidth]);

  const [userImageId, setUserImageId] = React.useState<number>(
    Math.floor(Math.random() * 1000),
  );
  const [isLike, setIsLike] = React.useState<boolean>(false);

  // Callbacks
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
      <UserBar imageId={userImageId} name={props.author} />
      <TouchableOpacity
        activeOpacity={1}
        style={styles.postImage}
        onPress={toggleLike}>
        <Image
          resizeMode="center"
          style={{
            width: deviceWidth,
            // we create a constant that relates
            // device width with the image width
            // Then, we use the same constant for h
            height: Math.floor((deviceWidth / props.width) * props.height),
            flex: 1,
            alignSelf: 'center',
          }}
          source={{uri: props.uri}}
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
    flexGrow: 1,
    flexShrink: 1,
  },
});
