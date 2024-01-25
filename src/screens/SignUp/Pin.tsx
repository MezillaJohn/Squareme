import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AppScreen from '../../component/AppScreen/AppScreen';
import AuthHeader from '../../component/AuthHeader/AuthHeader';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import KeyPad from '../../component/KeyPad/KeyPad';
import PinInput from '../../component/PinInput/PinInput';
import {COLORS} from '../../constants/theme';
import {NavScreenProps} from '../../Navigation/NavTypes';
import {routes} from '../../Navigation/routes';

const Pin = ({navigation}: NavScreenProps) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [disable, setDisable] = React.useState(true);

  const OTPlength = 6;

  useEffect(() => {
    if (pressedKeys?.length === OTPlength) {
      setDisable(true);
      navigation.navigate(routes.CONFIRM_PIN);
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
    const padValue = newPressedKeys.join('');
    const newAmount = parseFloat(padValue);

    setPressedKeys(newPressedKeys);
  };

  return (
    <AppScreen
      style={{justifyContent: 'space-between', flex: 1}}
      scrollEnabled
      scrollview>
      <View>
        <AuthHeader
          title="Set Your Security PIN"
          subTitle="Set a six-digit PIN that you would use for all transactions"
        />
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

export default Pin;

const style = ScaledSheet.create({
  otpContainer: {
    marginTop: '50@ms',
    alignSelf: 'center',
  },
});
