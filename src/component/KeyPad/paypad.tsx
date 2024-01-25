import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import AppText from '../AppText/AppText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';

interface ButtonProps {
  onPress?: () => void;
  title: any;
  size?: boolean;
  payPadDisabled: boolean;
  color: string;
}

export default function PayPad({
  title,
  onPress,
  size,
  payPadDisabled,
  color,
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={payPadDisabled}
      style={style.liteBtn}
      onPress={onPress}>
      <AppText
        style={{
          color: color ? color : COLORS.primary,
          fontSize: moderateScale(21),
          bottom: size ? 9 : 0,
        }}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const style = ScaledSheet.create({
  liteBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 32,
  },
});
