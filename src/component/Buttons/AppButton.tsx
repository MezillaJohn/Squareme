import {Pressable, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constants/theme';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {moderateScale} from 'react-native-size-matters';
import AppText from '../AppText/AppText';

interface Props {
  title: string;
  fontSize?: number;
  color?: string;
  isOutlined?: boolean;
  onPress?: () => void;
  isPrimary?: boolean;
  outlinePrimary?: boolean;
  btnStyle?: ViewStyle;
  disabled?: boolean;
}

const AppButton = ({
  title,
  fontSize,
  color,
  isOutlined,
  onPress,
  isPrimary,
  outlinePrimary,
  btnStyle,
  disabled,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        style.buttonWrapper,
        isOutlined && style.btnOutlined,
        // isPrimary && style.btnPurple,
        {
          borderColor:
            outlinePrimary && disabled
              ? '#B6B6B6'
              : outlinePrimary
              ? COLORS.primary
              : COLORS.white,
          backgroundColor:
            isPrimary && disabled
              ? '#D3D3D3'
              : isOutlined
              ? 'transaparent'
              : !isPrimary && !disabled && !isOutlined
              ? COLORS.white
              : COLORS.primary,
        },
        btnStyle,
      ]}>
      <AppText
        style={[
          style.buttonTitle,
          {
            fontSize: fontSize ? moderateScale(fontSize) : moderateScale(16),
            color: color
              ? color
              : disabled && isOutlined
              ? '#C4C4C4'
              : outlinePrimary
              ? COLORS.primary
              : COLORS.dark,
          },
        ]}>
        {title}
      </AppText>
    </Pressable>
  );
};

export default AppButton;

const style = ScaledSheet.create({
  buttonWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '36@ms',
    paddingVertical: '14@ms',
    borderRadius: '8@ms',
  },

  // btnPurple: {
  //   backgroundColor: COLORS.primary,
  // },

  btnOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },

  buttonTitle: {
    fontFamily: FONTS.DMSans_Medium,
  },
});
