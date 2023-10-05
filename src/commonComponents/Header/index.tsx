import React, {useCallback, ReactNode} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../utilities/constants/colors';
import styles from './style';
import {scale} from 'react-native-size-matters';

type HeaderProps = {
  wrapperBackgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  showBottomBorder?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;

  leftIconSource?: ReactNode;
  onLeftPress?: () => void;
  disableLeft?: boolean;
  leftButtonStyle?: StyleProp<ViewStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;

  rightIconSource?: ReactNode;
  onRightPress?: () => void;
  disableRight?: boolean;
  rightButtonStyle?: StyleProp<ViewStyle>;
  renderRightButton?: () => ReactNode;
  rightIconStyle?: StyleProp<ViewStyle>;

  title?: string;
  titleColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  renderCenterTitle?: () => ReactNode;
  titlePosition?: 'center' | 'left' | 'right';
};

export const Header: React.FC<HeaderProps> = ({
  wrapperBackgroundColor,
  containerStyle,
  showBottomBorder,
  wrapperStyle,

  leftIconSource,
  onLeftPress,
  disableLeft,
  leftButtonStyle,

  rightIconSource,
  onRightPress,
  disableRight,
  rightButtonStyle,
  renderRightButton,

  title,
  titleColor = colors.black1,
  titleStyle,
  renderCenterTitle,
  titlePosition = 'center',
}) => {
  const renderLeft = useCallback(() => {
    if (disableLeft || !leftIconSource) {
      return <View style={styles.leftStyle} />;
    }

    return (
      <View>
        {leftIconSource && (
          <Pressable
            onPress={onLeftPress}
            style={[styles.leftStyle, leftButtonStyle]}>
            {leftIconSource}
          </Pressable>
        )}
      </View>
    );
  }, [disableLeft, leftButtonStyle, leftIconSource, onLeftPress]);

  const renderRight = useCallback(() => {
    if (renderRightButton) {
      return renderRightButton();
    }
    if (!disableRight && rightIconSource) {
      return (
        <View>
          {rightIconSource && (
            <Pressable
              onPress={onRightPress}
              style={[styles.rightStyle, rightButtonStyle]}>
              {rightIconSource}
            </Pressable>
          )}
        </View>
      );
    }
    return <View style={styles.leftStyle} />;
  }, [
    disableRight,
    onRightPress,
    renderRightButton,
    rightButtonStyle,
    rightIconSource,
  ]);

  const renderTitle = useCallback(() => {
    if (renderCenterTitle) {
      return renderCenterTitle();
    }
    if (title) {
      return (
        <View
          style={[
            styles.titleContainer,
            titlePosition === 'center' && scale(10),
          ]}>
          <Text
            style={[
              {
                ...styles.titleStyle,
                color: titleColor,
                textAlign: titlePosition,
              },
              titleStyle,
            ]}
            numberOfLines={1}>
            {title}
          </Text>
        </View>
      );
    }
    return <View />;
  }, [renderCenterTitle, title, titleColor, titlePosition, titleStyle]);

  return (
    <View
      style={[
        {...styles.wrapper, backgroundColor: wrapperBackgroundColor},
        wrapperStyle,
      ]}>
      <View
        style={[
          styles.container,
          showBottomBorder && styles.borderBottom1px,
          containerStyle,
        ]}>
        {renderLeft()}
        {renderTitle()}
        {renderRight()}
      </View>
    </View>
  );
};
