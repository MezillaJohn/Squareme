import {View, TextInput, Pressable} from 'react-native';
import React from 'react';
import AppScreen from '../../component/AppScreen/AppScreen';
import AuthHeader from '../../component/AuthHeader/AuthHeader';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import {COLORS, FONTS} from '../../constants/theme';
import AppButton from '../../component/Buttons/AppButton';
import AppText from '../../component/AppText/AppText';
import Referreral from '../../../assets/svgs/referral.svg';
import NigLogo from '../../../assets/svgs/NGN.svg';
import Down from '../../../assets/svgs/downArrow.svg';
import {NavScreenProps} from '../../Navigation/NavTypes';
import {routes} from '../../Navigation/routes';

const PhoneNum = ({navigation}: NavScreenProps) => {
  const handleProceed = () => {
    navigation.navigate(routes.VERIFY_PHONE);
  };
  return (
    <AppScreen scrollEnabled scrollview style={{flex: 1}}>
      <AuthHeader
        title="Enter Your Phone Number"
        subTitle="We'll send an SMS with a code to verify your phone number"
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{rowGap: moderateScale(20), marginTop: moderateScale(50)}}>
          <View style={[style.inputWrapper]}>
            <View style={[style.inputStyle, style.country]}>
              <NigLogo width={moderateScale(20)} height={moderateScale(20)} />
              <AppText
                style={{
                  marginLeft: moderateScale(4),
                  marginRight: moderateScale(6),
                  color: COLORS.grayThree,
                }}>
                +234
              </AppText>
              <Down />
            </View>
            <View style={[style.inputStyle, style.inputContainer]}>
              <TextInput
                placeholderTextColor={COLORS.grayTwo}
                placeholder="Phone Number"
                style={[style.textInput]}
              />
            </View>
          </View>
          <View style={[style.inputStyle, style.referralContainer]}>
            <TextInput
              placeholderTextColor={COLORS.purple}
              placeholder="Have a referral ID?"
              style={[style.referral]}
            />
            <Referreral
              width={moderateScale(16.92)}
              height={moderateScale(16.14)}
            />
          </View>
        </View>
        <View style={{marginBottom: moderateScale(44)}}>
          <AppButton
            onPress={handleProceed}
            title="Proceed"
            color={COLORS.white}
            isPrimary
            fontSize={14}
          />
          <View style={style.loginWrapper}>
            <AppText style={{color: COLORS.darkTwo}}>
              Already have an account?
            </AppText>
            <Pressable>
              <AppText
                style={{
                  fontFamily: FONTS.DMSans_Medium,
                  color: COLORS.purple,
                }}>
                {' '}
                Login here
              </AppText>
            </Pressable>
          </View>
        </View>
      </View>
    </AppScreen>
  );
};

export default PhoneNum;

const style = ScaledSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    columnGap: '12@ms',
  },
  textInput: {
    height: '100%',
    paddingHorizontal: '16@ms',
    fontSize: '12@ms0.3',
    color: COLORS.dark,
  },
  inputContainer: {
    flex: 0.8,
  },
  country: {
    flex: 0.2,
    paddingLeft: '12@ms',
    paddingRight: '16@ms',
    justifyContent: 'flex-start',
  },
  inputStyle: {
    borderColor: COLORS.grayOne,
    borderWidth: 1,
    height: '48@ms0.001',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  referral: {
    fontSize: '13@ms0.3',
    fontFamily: FONTS.DMSans_Medium,
    color: COLORS.dark,
    height: '100%',
    flex: 1,
    paddingRight: '17@ms',
  },
  referralContainer: {
    paddingLeft: '17@ms',
    paddingRight: '23@ms',
  },

  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
});
