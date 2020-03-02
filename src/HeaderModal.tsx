import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle
} from 'react-native'
import CloseButton from './CloseButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    alignSelf: 'center',
    position: 'absolute',
    bottom: -5,
    transform: [
      { rotate: '180deg' }
    ],
  }
})

interface HeaderModalProps {
  cancelIsText?: boolean
  cancelText?: string
  cancelTextStyle?: StyleProp<TextStyle>
  withFilter?: boolean
  withCloseButton?: boolean
  closeButtonImage?: ImageSourcePropType
  closeButtonStyle?: StyleProp<ViewStyle>
  closeButtonImageStyle?: StyleProp<ImageStyle>
  closeButtonPosition: string
  borderBottomColor: string
  onClose(): void
  renderFilter(props: HeaderModalProps): ReactNode
}
export const HeaderModal = (props: HeaderModalProps) => {
  const {
    cancelIsText,
    cancelText,
    cancelTextStyle,
    withFilter,
    withCloseButton,
    closeButtonImage,
    closeButtonStyle,
    closeButtonImageStyle,
    onClose,
    borderBottomColor,
    renderFilter,
    closeButtonPosition
  } = props

  if (closeButtonPosition === 'left') {
    return (
      <View style={styles.container}>
        {withCloseButton && <CloseButton
          cancelIsText={cancelIsText}
          cancelText={cancelText}
          cancelTextStyle={cancelTextStyle}
          image={closeButtonImage}
          style={closeButtonStyle}
          imageStyle={closeButtonImageStyle}
          onPress={onClose}
        />}
        {withFilter && renderFilter(props)}
        <View style={[styles.triangle, { borderBottomColor }]} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {withFilter && renderFilter(props)}
        {withCloseButton && <CloseButton
          cancelIsText={cancelIsText}
          cancelText={cancelText}
          cancelTextStyle={cancelTextStyle}
          image={closeButtonImage}
          style={closeButtonStyle}
          imageStyle={closeButtonImageStyle}
          onPress={onClose}
        />}
        <View style={[styles.triangle, { borderBottomColor}]} />
      </View>
    );
  }
}

HeaderModal.defaultProps = {
  withCloseButton: true,
  closeButtonPosition: 'right',
  borderBottomColor: '#FFBC00',
}
