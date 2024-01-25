import React from 'react';
import OnBoardingLayout from './component/OnBoardingLayout';
import LogoBlue from '../../../assets/svgs/logoBlue.svg';
import Indicator from '../../../assets/svgs/secondLine.svg';
import {moderateScale} from 'react-native-size-matters/extend';
import {NavScreenProps} from '../../Navigation/NavTypes';

const SecondOnboarding = ({navigation}: NavScreenProps) => {
  const handleNext = () => {
    navigation.navigate('getStarted');
  };

  const handleSkip = () => {
    navigation.navigate('landing');
  };

  return (
    <OnBoardingLayout
      handleNext={handleNext}
      handleSkip={handleSkip}
      logo={
        <LogoBlue width={moderateScale(154.19)} height={moderateScale(20)} />
      }
      indicator={<Indicator />}
      image={require('../../../assets/images/second.png')}
      title={`A super secure way to pay${'\n'}your bills`}
      subTitle={`Pay your bills with the cheapest rates in town.`}
    />
  );
};

export default SecondOnboarding;
