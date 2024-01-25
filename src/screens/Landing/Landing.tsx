import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import AppScreen from '../../component/AppScreen/AppScreen';
import {COLORS} from '../../constants/theme';
import Logo from '../../../assets/svgs/logoWhite.svg';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import AppButton from '../../component/Buttons/AppButton';
import {NavScreenProps} from '../../Navigation/NavTypes';

const Landing = ({navigation}: NavScreenProps) => {
  const handleCreateAccount = () => {
    navigation.navigate('phone');
  };

  return (
    <AppScreen
      style={{justifyContent: 'space-between', alignItems: 'center'}}
      containerStyle={{backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <View></View>
      <View>
        <Logo width={moderateScale(239)} height={moderateScale(31)} />
      </View>
      <View style={style.btnWrapper}>
        <View style={style.btn}>
          <AppButton
            onPress={handleCreateAccount}
            fontSize={14}
            title="Create an account"
          />
        </View>
        <View>
          <AppButton
            fontSize={14}
            color={COLORS.white}
            isOutlined
            title="I have an account"
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Landing;

const style = ScaledSheet.create({
  btnWrapper: {
    marginBottom: moderateScale(41),
    alignSelf: 'stretch',
  },
  btn: {
    marginBottom: moderateScale(14),
  },
});
