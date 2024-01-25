import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppScreen from '../../component/AppScreen/AppScreen';
import {COLORS, FONTS} from '../../constants/theme';
import {routes} from '../../Navigation/routes';
import {NavScreenProps} from '../../Navigation/NavTypes';
import KeyPad from '../../component/KeyPad/KeyPad';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import ScanQRCode from '../../../assets/svgs/scan-barcode.svg';
import Clock from '../../../assets/svgs/clock.svg';
import AppText from '../../component/AppText/AppText';
import Naira from '../../../assets/svgs/Naira.svg';
import FadedButtons from '../../component/Buttons/FadedButtons';

const Menu = ({navigation}: NavScreenProps) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [disable, setDisable] = React.useState(true);

  const OTPlength = 6;

  useEffect(() => {
    if (pressedKeys?.length === OTPlength) {
      setDisable(true);
      navigation.navigate(routes.CONFIRM_PIN);
    } else {
      setDisable(false);
    }
  }, [pressedKeys]);

  const handlePadPress = (buttonValue: string) => {
    const newPressedKeys = [...pressedKeys, buttonValue];
    setPressedKeys(newPressedKeys);
  };

  const deleteHandler = () => {
    const newPressedKeys = pressedKeys.slice(0, -1);
    setPressedKeys(newPressedKeys);
  };

  return (
    <AppScreen
      style={{
        backgroundColor: COLORS.primaryTwo,
        justifyContent: 'space-between',
      }}>
      <View style={style.top}>
        <ScanQRCode width={moderateScale(24)} height={moderateScale(24)} />
        <View style={style.balance}>
          <AppText style={style.walletBalance}>Wallet Balance</AppText>
          <AppText style={style.balanceValue}># 5,200</AppText>
        </View>
        <Clock width={moderateScale(24)} height={moderateScale(24)} />
      </View>

      <View style={{marginBottom: moderateScale(32)}}>
        <View style={style.valueWrapper}>
          <View>
            <Naira width={moderateScale(21)} height={moderateScale(54)} />
          </View>
          <View>
            <AppText style={style.keyValue}>0</AppText>
          </View>
        </View>

        <KeyPad
          color={COLORS.whiteThree}
          disable={disable}
          Amount={pressedKeys.join('')}
          deleteHandler={deleteHandler}
          handlePadPress={handlePadPress}
          addPoint
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: moderateScale(24),
            marginTop: moderateScale(14),
          }}>
          <FadedButtons title="Request" />
          <FadedButtons title="Send" />
        </View>
      </View>
    </AppScreen>
  );
};

export default Menu;

const style = ScaledSheet.create({
  top: {
    marginTop: moderateScale(63),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  balance: {
    backgroundColor: '#9F56D41A',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(24),
    borderRadius: 12,
  },

  walletBalance: {
    textAlign: 'center',
    color: COLORS.whiteThree,
    fontFamily: FONTS.WorkSans_Regular,
    fontSize: moderateScale(12),
  },

  balanceValue: {
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(17),
    fontFamily: FONTS.WorkSans_Regular,
  },

  valueWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: moderateScale(8),
    marginBottom: 14,
  },

  keyValue: {
    fontSize: moderateScale(64),
    fontFamily: FONTS.Poppins_Regular,
    color: COLORS.white,
  },
});
