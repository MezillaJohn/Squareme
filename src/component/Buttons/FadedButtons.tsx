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

const FadedButtons = ({
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
        {
          backgroundColor: COLORS.grayFive,
        },
        btnStyle,
      ]}>
      <AppText
        style={[
          style.buttonTitle,
          {
            fontSize: fontSize ? moderateScale(fontSize) : moderateScale(16),
            color: '#949494',
            fontFamily: FONTS.Poppins_SemiBold,
          },
        ]}>
        {title}
      </AppText>
    </Pressable>
  );
};

export default FadedButtons;

const style = ScaledSheet.create({
  buttonWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '43@ms',
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
