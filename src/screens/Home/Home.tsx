import {View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppScreen from '../../component/AppScreen/AppScreen';
import HomeHeader from './component/HomeHeader';
import WalletBalanceAction from './component/WalletBalanceAction';
import QuickAction from './component/QuickAction';
import RecentTransactions from './component/RecentTransactions';

const Home = () => {
  return (
    <LinearGradient
      locations={[0.73, 1.2]}
      style={{flex: 1}}
      colors={['rgba(255, 255, 255, 1)', 'rgba(0, 198, 251, 0.2)']}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 0}}>
      <AppScreen scrollview containerStyle={{backgroundColor: 'transaparent'}}>
        <HomeHeader />
        <WalletBalanceAction />
        <QuickAction />
        <RecentTransactions />
      </AppScreen>
    </LinearGradient>
  );
};

export default Home;
