import {View} from 'react-native';
import React from 'react';
import AppScreen from '../../component/AppScreen/AppScreen';
import SuccessIcon from '../../../assets/svgs/success.svg';
import AppText from '../../component/AppText/AppText';
import AppButton from '../../component/Buttons/AppButton';
import {COLORS, FONTS} from '../../constants/theme';
import {moderateScale} from 'react-native-size-matters/extend';
import {NavScreenProps} from '../../Navigation/NavTypes';
import {StackActions} from '@react-navigation/native';

const Success: React.FC = ({route, navigation}: NavScreenProps) => {
  const params = route.params;
  const final = route.params.final;

  const handleNextPage = () => {
    if (final) {
      navigation.reset({
        index: 0,
        routes: [{name: params.route}],
      });
    } else {
      navigation.dispatch(StackActions.replace(params.route));
    }
  };

  return (
    <AppScreen style={{justifyContent: 'space-between'}}>
      <View style={{alignItems: 'center', marginTop: moderateScale(113)}}>
        <SuccessIcon />
        <View style={{marginTop: moderateScale(16.55)}}>
          <AppText
            style={{
              textAlign: 'center',
              fontSize: moderateScale(16),
              fontFamily: FONTS.DMSans_Bold,
              marginBottom: moderateScale(8),
            }}>
            {params.title}
          </AppText>
          <AppText
            style={{
              textAlign: 'center',
              fontFamily: FONTS.DMSans_Medium,
              fontSize: moderateScale(13),
              color: COLORS.grayFour,
            }}>
            {params.subTitle}
          </AppText>
        </View>
      </View>
      <View style={{marginBottom: moderateScale(57)}}>
        <AppButton
          onPress={handleNextPage}
          isPrimary
          color={COLORS.white}
          fontSize={14}
          title="Okay!"
        />
      </View>
    </AppScreen>
  );
};

export default Success;
