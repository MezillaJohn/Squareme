import {View, Text} from 'react-native';
import React from 'react';
import AppText from '../../../component/AppText/AppText';
import {moderateScale} from 'react-native-size-matters/extend';
import {COLORS, FONTS} from '../../../constants/theme';
import Mobile from '../../../../assets/svgs/mobile.svg';
import GiftCard from '../../../../assets/svgs/giftcard.svg';
import Card from '../../../../assets/svgs/card.svg';

const QuickAction = () => {
  return (
    <View style={{marginTop: moderateScale(38.5)}}>
      <AppText
        style={{
          color: COLORS.graySix,
          fontFamily: FONTS.DMSans_SemiBold,
          fontSize: moderateScale(16),
          marginBottom: moderateScale(21),
        }}>
        Quick Access
      </AppText>

      <View style={{flexDirection: 'row', columnGap: moderateScale(30)}}>
        <View style={{rowGap: moderateScale(18)}}>
          <Mobile />
          <AppText
            style={{
              fontFamily: FONTS.DMSans_SemiBold,
              color: COLORS.darkThree,
            }}>
            Pay Bills
          </AppText>
        </View>
        <View style={{rowGap: moderateScale(18)}}>
          <GiftCard />
          <AppText
            style={{
              fontFamily: FONTS.DMSans_SemiBold,
              color: COLORS.darkThree,
            }}>
            Giftcards
          </AppText>
        </View>
        <View style={{rowGap: moderateScale(18)}}>
          <Card />
          <AppText
            style={{
              fontFamily: FONTS.DMSans_SemiBold,
              color: COLORS.darkThree,
            }}>
            Cards
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default QuickAction;
