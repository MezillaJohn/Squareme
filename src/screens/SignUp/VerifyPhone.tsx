import {View} from 'react-native';
import AuthHeader from '../../component/AuthHeader/AuthHeader';
import AppScreen from '../../component/AppScreen/AppScreen';
import OtpInput from '../../component/OtpInput/OtpInput';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import {useEffect, useState} from 'react';
import AppText from '../../component/AppText/AppText';
import AppButton from '../../component/Buttons/AppButton';
import {COLORS, FONTS} from '../../constants/theme';
import {NavScreenProps} from '../../Navigation/NavTypes';
import {routes} from '../../Navigation/routes';

const VerifyPhone = ({navigation}: NavScreenProps) => {
  const [otpValue, setOtpValue] = useState(['', '', '', '']);
  const [seconds, setSeconds] = useState(0);
  const handleOtpChange = (newValue: Array<string>) => {
    setOtpValue(newValue);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer as NodeJS.Timeout);
    };
  }, [seconds]);

  const handleNextPage = () => {
    navigation.navigate(routes.SUCCESS, {
      title: 'Verification successful',
      subTitle: 'Your phone number has been verified successfully.',
      route: 'pin',
    });
  };

  const formattedSeconds = `0.${seconds}${
    seconds === 0 ? '0' : seconds < 10 ? '0' : ''
  }`;

  return (
    <AppScreen
      scrollview
      scrollEnabled={false}
      style={{
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <View>
        <AuthHeader
          title="Verify Phone Number"
          subTitle={`Please input the five digit code that was sent to your phone number below`}
        />
        <View style={style.otpContainer}>
          <OtpInput
            length={6}
            value={otpValue}
            disable={false}
            onChange={handleOtpChange}
          />
        </View>

        <View style={{marginTop: moderateScale(20)}}>
          <AppText
            style={{
              textAlign: 'center',
              marginBottom: moderateScale(30),
              fontFamily: FONTS.DMSans_Medium,
              color: COLORS.purple,
            }}>
            {formattedSeconds}
          </AppText>
          <AppText
            style={{
              textAlign: 'center',
              fontSize: moderateScale(13),
              fontFamily: FONTS.DMSans_Medium,
            }}>
            Having trouble receiving SMS?{' '}
            <AppText
              style={{
                fontSize: moderateScale(13),
                fontFamily: FONTS.DMSans_Medium,
                color: COLORS.purple,
              }}>
              Resend
            </AppText>
            {'\n'}Or try other options below
          </AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: moderateScale(12),
          marginBottom: moderateScale(48),
        }}>
        <AppButton
          btnStyle={{flex: 1}}
          outlinePrimary
          isOutlined
          title="Call me"
          disabled={seconds !== 0}
        />
        <AppButton
          onPress={handleNextPage}
          btnStyle={{flex: 1}}
          color={COLORS.white}
          isPrimary
          title="Whatsapp"
          disabled={seconds !== 0}
        />
      </View>
    </AppScreen>
  );
};

export default VerifyPhone;

const style = ScaledSheet.create({
  otpContainer: {
    marginTop: '50@ms',
    alignSelf: 'center',
  },
});
