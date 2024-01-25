import {View, Text, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters/extend';
import AppText from '../../../component/AppText/AppText';
import Value from '../../../../assets/svgs/BlurValue.svg';
import {COLORS, FONTS} from '../../../constants/theme';

const WalletBalanceAction = () => {
  return (
    <View
      style={{
        marginTop: moderateScale(32),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AppText>Wallet Balance</AppText>

      <View style={{marginTop: moderateScale(13)}}>
        <Image
          style={{width: 154, height: 55}}
          source={require('../../../../assets/images/value.png')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: moderateScale(16),
          marginTop: moderateScale(30.5),
        }}>
        <View
          style={{
            backgroundColor: COLORS.primaryTwo,
            width: moderateScale(123),
            height: moderateScale(44),
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText
            style={{fontFamily: FONTS.DMSans_Medium, color: COLORS.white}}>
            Fund
          </AppText>
        </View>
        <View
          style={{
            backgroundColor: '#E1E1E1',
            width: moderateScale(123),
            height: moderateScale(44),
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText style={{fontFamily: FONTS.DMSans_Medium, color: '#747474'}}>
            Withdraw
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default WalletBalanceAction;
