import OnBoardingLayout from './component/OnBoardingLayout';
import LogoWhite from '../../../assets/svgs/logoWhite.svg';
import Indicator from '../../../assets/svgs/firstLine.svg';
import {moderateScale} from 'react-native-size-matters/extend';
import {NavScreenProps} from '../../Navigation/NavTypes';

const FirstOnboarding = ({navigation}: NavScreenProps) => {
  const handleNext = () => {
    navigation.navigate('secondOnboarding');
  };

  const handleSkip = () => {
    navigation.navigate('landing');
  };

  return (
    <OnBoardingLayout
      handleNext={handleNext}
      handleSkip={handleSkip}
      logo={
        <LogoWhite width={moderateScale(154.19)} height={moderateScale(20)} />
      }
      indicator={<Indicator />}
      image={require('../../../assets/images/first.png')}
      title={`Fast and easy payments to${'\n'}anyone.`}
      subTitle={`Receive funds sent to you in seconds.`}
    />
  );
};

export default FirstOnboarding;
