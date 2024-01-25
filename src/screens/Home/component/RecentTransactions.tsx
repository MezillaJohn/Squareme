import {View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters/extend';
import AppText from '../../../component/AppText/AppText';
import {COLORS, FONTS} from '../../../constants/theme';
import History from '../../../../assets/svgs/history.svg';

const RecentTransactions = () => {
  return (
    <View style={{marginTop: moderateScale(40)}}>
      <AppText
        style={{
          color: COLORS.graySix,
          fontFamily: FONTS.DMSans_SemiBold,
          fontSize: moderateScale(16),
          marginBottom: moderateScale(33),
        }}>
        Recent Transactions
      </AppText>

      <View style={{alignItems: 'center'}}>
        <History />
        <AppText
          style={{
            fontSize: moderateScale(17),
            color: '#4F4F4F',
            fontFamily: FONTS.DMSans_SemiBold,
            textAlign: 'center',
            marginBottom: moderateScale(8),
            marginTop: moderateScale(11.6),
          }}>
          No recent transaction
        </AppText>
        <AppText
          style={{
            fontFamily: FONTS.DMSans_Medium,
            fontSize: moderateScale(12),
            color: '#9A9A9A',
            textAlign: 'center',
            lineHeight: 20,
          }}>
          You have not performed any transaction, you{'\n'}can start sending and
          requesting money from{'\n'}your contacts.
        </AppText>
      </View>
    </View>
  );
};

export default RecentTransactions;
