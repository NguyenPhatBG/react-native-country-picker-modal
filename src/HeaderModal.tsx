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
      </View>
    );
  }
}

HeaderModal.defaultProps = {
  withCloseButton: true,
  closeButtonPosition: 'right',
}
