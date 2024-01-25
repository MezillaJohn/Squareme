import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ViewProps,
  ScrollView,
  ViewStyle,
  StatusBarStyle,
  RegisteredStyle,
} from 'react-native';
import {COLORS} from '../../constants/theme';
import React from 'react';
import {moderateScale} from 'react-native-size-matters/extend';

interface ScreenProps extends ViewProps {
  containerStyle?: ViewStyle | RegisteredStyle<ViewStyle>;
  scrollview?: boolean;
  showBackHeader?: boolean;
  scrollEnabled?: boolean;
  keyboardAvoiding?: boolean;
  barStyle?: StatusBarStyle;
  statusBackground?: string;
  refreshControl?: any;
}

const AppScreen = (props: ScreenProps): JSX.Element => {
  const {
    children,
    style,
    containerStyle,
    scrollview,
    scrollEnabled = true,
    barStyle,
    statusBackground,
    refreshControl,
  } = props;

  return (
    <SafeAreaView style={[styles.screen, containerStyle]}>
      <StatusBar
        backgroundColor={statusBackground ? statusBackground : COLORS.white}
        barStyle={barStyle ? barStyle : 'dark-content'}
      />
      {scrollview ? (
        <ScrollView
          refreshControl={refreshControl}
          scrollEnabled={scrollEnabled}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style}
          style={[styles.view]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.view, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  view: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
});

export default AppScreen;
