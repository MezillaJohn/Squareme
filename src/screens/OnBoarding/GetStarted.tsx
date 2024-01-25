import React from 'react';
import OnBoardingLayout from './component/OnBoardingLayout';
import LogoWhite from '../../../assets/svgs/logoWhite.svg';
import Indicator from '../../../assets/svgs/lineThree.svg';
import {moderateScale} from 'react-native-size-matters/extend';
import {NavScreenProps} from '../../Navigation/NavTypes';

const GetStarted = ({navigation}: NavScreenProps) => {
  const handleGetStarted = () => {
    navigation.navigate('landing');
  };

  return (
    <OnBoardingLayout
      handleGetStarted={handleGetStarted}
      logo={
        <LogoWhite width={moderateScale(154.19)} height={moderateScale(20)} />
      }
      indicator={<Indicator />}
      image={require('../../../assets/images/third.png')}
      title={`Spend your money easily${'\n'}without any complications`}
      subTitle={``}
      isLast
    />
  );
};

export default GetStarted;
