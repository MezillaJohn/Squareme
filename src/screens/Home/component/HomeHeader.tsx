import {View, Text, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters/extend';
import AppText from '../../../component/AppText/AppText';
import {COLORS} from '../../../constants/theme';
import Notification from '../../../../assets/svgs/notification.svg';
import Barcode from '../../../../assets/svgs/barcodeWhite.svg';

const HomeHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(48),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: moderateScale(6),
        }}>
        <View>
          <Image
            style={{width: moderateScale(32), height: moderateScale(32)}}
            source={require('../../../../assets/images/user.png')}
            resizeMode="cover"
          />
        </View>
        <View>
          <AppText
            style={{
              fontSize: moderateScale(12),
              color: COLORS.grayThree,
              lineHeight: 18,
            }}>
            Hello,
          </AppText>
          <AppText style={{color: COLORS.primaryTwo, lineHeight: 18}}>
            David Oloye
          </AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: moderateScale(8),
        }}>
        <Barcode />
        <Notification />
      </View>
    </View>
  );
};

export default HomeHeader;
