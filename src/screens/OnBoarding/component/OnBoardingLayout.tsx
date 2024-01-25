import {
  View,
  ImageBackground,
  ImageSourcePropType,
  ViewStyle,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppScreen from '../../../component/AppScreen/AppScreen';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import {COLORS, FONTS} from '../../../constants/theme';
import AppText from '../../../component/AppText/AppText';
import AppButton from '../../../component/Buttons/AppButton';
import {ReactNode} from 'react';

interface OnBoardingLayoutProps {
  logo: ReactNode;
  indicator?: ReactNode;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  containerStyle?: ViewStyle;
  isLast?: boolean;
  handleNext?: () => void;
  handleSkip?: () => void;
  handleGetStarted?: () => void;
}

const OnBoardingLayout = ({
  image,
  logo,
  indicator,
  title,
  subTitle,
  isLast,
  handleNext,
  handleSkip,
  handleGetStarted,
}: OnBoardingLayoutProps) => {
  return (
    <ImageBackground resizeMode="cover" source={image} style={{flex: 1}}>
      <LinearGradient
        locations={[0.06, 0.65]}
        style={{flex: 1}}
        colors={['rgba(0, 0, 0, 1)', 'rgba(105, 105, 105, 0)']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}>
        <AppScreen
          style={{justifyContent: 'space-between', flex: 1}}
          containerStyle={{backgroundColor: 'transaparent'}}>
          <View style={style.logo}>{logo}</View>

          <View>
            <View style={style.indicator}>{indicator}</View>
            <View style={style.textWrapper}>
              <AppText style={style.title}>{title}</AppText>
              <AppText style={style.subTitle}>{subTitle}</AppText>
            </View>

            {!isLast && (
              <View style={[style.actionWrapper, style.btnContainer]}>
                <Pressable onPress={handleSkip}>
                  <AppText
                    style={{
                      color: COLORS.whiteOne,
                      fontSize: moderateScale(15),
                    }}>
                    Skip
                  </AppText>
                </Pressable>
                <AppButton onPress={handleNext} title="Next" />
              </View>
            )}

            {isLast && (
              <View style={style.btnContainer}>
                <AppButton
                  onPress={handleGetStarted}
                  fontSize={14}
                  title="Get Started"
                />
              </View>
            )}
          </View>
        </AppScreen>
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnBoardingLayout;

const style = ScaledSheet.create({
  logo: {marginTop: moderateScale(50)},
  indicator: {marginBottom: moderateScale(24)},
  textWrapper: {marginBottom: moderateScale(71)},
  title: {
    fontSize: moderateScale(24),
    fontFamily: FONTS.DMSans_Bold,
    lineHeight: moderateScale(31.25),
    color: COLORS.white,
    marginBottom: moderateScale(18),
  },
  subTitle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.DMSans_Regular,
    lineHeight: moderateScale(18.23),
    color: COLORS.white,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnContainer: {
    marginBottom: moderateScale(40),
  },
});
