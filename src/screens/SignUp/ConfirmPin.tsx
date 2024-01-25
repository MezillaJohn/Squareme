import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AppScreen from '../../component/AppScreen/AppScreen';
import AuthHeader from '../../component/AuthHeader/AuthHeader';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import KeyPad from '../../component/KeyPad/KeyPad';
import PinInput from '../../component/PinInput/PinInput';
import {COLORS} from '../../constants/theme';
import AppText from '../../component/AppText/AppText';
import {NavScreenProps} from '../../Navigation/NavTypes';

const ConfirmPin = ({navigation}: NavScreenProps) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [disable, setDisable] = React.useState(true);

  const OTPlength = 6;

  useEffect(() => {
    if (pressedKeys?.length === OTPlength) {
      setDisable(true);
      navigation.navigate('success', {
        title: 'PIN Set Successfully!',
        subTitle: 'Your security pin has been set successfully.',
        route: 'home',
        final: true,
      });
    } else {
      setDisable(false);
    }
  }, [pressedKeys]);

  const handlePadPress = (buttonValue: string) => {
    const newPressedKeys = [...pressedKeys, buttonValue];
    const padValue = newPressedKeys.join('');
    const newAmount = parseFloat(padValue);
    setPressedKeys(newPressedKeys);
  };

  const deleteHandler = () => {
    const newPressedKeys = pressedKeys.slice(0, -1);
    setPressedKeys(newPressedKeys);
  };

  return (
    <AppScreen
      style={{justifyContent: 'space-between', flex: 1}}
      scrollEnabled
      scrollview>
      <View>
        <AuthHeader title="Set Your Security PIN" subTitle="" />

        <AppText style={{marginTop: moderateScale(11)}}>
          Input your six digit PIN again
        </AppText>
        <View style={style.otpContainer}>
          <PinInput
            seperator
            seperatorLength={3}
            length={6}
            value={pressedKeys}
          />
        </View>
      </View>

      <View style={{marginBottom: moderateScale(92)}}>
        <KeyPad
          color={COLORS.primary}
          disable={disable}
          Amount={pressedKeys.join('')}
          deleteHandler={deleteHandler}
          handlePadPress={handlePadPress}
          addPoint
        />
      </View>
    </AppScreen>
  );
};

export default ConfirmPin;

const style = ScaledSheet.create({
  otpContainer: {
    marginTop: '48@ms',
    alignSelf: 'center',
  },
});
