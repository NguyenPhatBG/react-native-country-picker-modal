import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle
} from 'react-native'
import CloseButton from './CloseButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

interface HeaderModalProps {
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
