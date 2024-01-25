import {View, Pressable} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constants/theme';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import BackArrow from '../../../assets/svgs/backArrow.svg';
import AppText from '../AppText/AppText';
import {useNavigation} from '@react-navigation/native';

const AuthHeader = ({title, subTitle}: {title: string; subTitle: string}) => {
  const {goBack} = useNavigation();
  return (
    <View
      style={{
        marginTop: moderateScale(58),
        // alignItems: 'flex-start',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
          columnGap: moderateScale(25),
          marginBottom: moderateScale(32),
        }}>
        <Pressable style={{marginLeft: -1}} onPress={() => goBack()}>
          <BackArrow />
        </Pressable>
        <AppText
          style={{
            fontSize: moderateScale(18),
            fontFamily: FONTS.DMSans_Bold,
            color: COLORS.primary,
          }}>
          {title}
        </AppText>
      </View>
      <View>
        <AppText
          style={{
            textAlign: 'center',
            fontFamily: FONTS.DMSans_Medium,
            color: COLORS.darkTwo,
          }}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

export default AuthHeader;

const style = ScaledSheet.create({});
