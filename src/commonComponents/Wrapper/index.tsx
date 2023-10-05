import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import {colors} from '../../utilities/constants/colors';

type WrapperProps = {
  children: ReactNode;
  wrapperBackgroundColor?: string;
  statusBarBackgroundColor?: string;
};

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  wrapperBackgroundColor = colors.black2,
  statusBarBackgroundColor = colors.black2,
}) => (
  <View style={[styles.container, {backgroundColor: wrapperBackgroundColor}]}>
    {Platform.OS === 'ios' && (
      <View style={{height: 30, backgroundColor: statusBarBackgroundColor}}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
      </View>
    )}
    <View style={styles.container}>{children}</View>
    <SafeAreaView />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1},
});
