import React from 'react'
import {
  Image,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle
} from 'react-native'
import PropTypes from 'prop-types'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  }
});

interface CloseButtonProps {
  cancelIsText?: boolean
  cancelText?: string
  cancelTextStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  image?: ImageSourcePropType
  onPress?(): void
}

const CloseButtonAndroid = (props: CloseButtonProps) => {
  let closeImage = require('./assets/images/close.android.png')

  if (props.image) {
    closeImage = props.image
  }
  const { onBackgroundTextColor } = useTheme()
  return (
    <View style={[styles.container, props.style]}>
      <TouchableNativeFeedback
        background={
          Platform.Version < 21
            ? TouchableNativeFeedback.SelectableBackground()
            : TouchableNativeFeedback.SelectableBackgroundBorderless()
        }
        onPress={props.onPress}
      >
        <View>
          {props.cancelIsText ? (
            <Text style={props.cancelTextStyle}>{props.cancelText}</Text>
          ) : (
            <Image
              source={closeImage}
              style={[
                styles.imageStyle,
                props.imageStyle,
                { tintColor: onBackgroundTextColor }
              ]}
            />
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const CloseButtonIOS = (props: CloseButtonProps) => {
  let closeImage = require('./assets/images/close.ios.png')

  if (props.image) {
    closeImage = props.image
  }
  const { onBackgroundTextColor } = useTheme()
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress}>
        {props.cancelIsText ? (
            <Text style={props.cancelTextStyle}>{props.cancelText}</Text>
          ) : (
            <Image
              source={closeImage}
              style={[
                styles.imageStyle,
                props.imageStyle,
                { tintColor: onBackgroundTextColor }
              ]}
            />
        )}
      </TouchableOpacity>
    </View>
  )
}

const propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.any,
  cancelText: 'Cancel'
}
CloseButtonIOS.prototype = propTypes
CloseButtonAndroid.prototype = propTypes

export default Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS
})
