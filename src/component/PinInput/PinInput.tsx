import {View} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import {COLORS} from '../../constants/theme';
import AppText from '../AppText/AppText';
import Seperator from '../../../assets/svgs/seperator.svg';

const PinInput = ({
  value,
  length,
  seperator,
  seperatorLength,
}: {
  value: string[];
  length: number;
  seperator: boolean;
  seperatorLength: number;
}) => {
  return (
    <View style={style.container}>
      {[...new Array(length)]?.map((_, index) => (
        <React.Fragment key={index}>
          {seperator && seperatorLength === index && (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Seperator width={moderateScale(8)} height={moderateScale(2)} />
            </View>
          )}
          <View style={style.input}>
            <AppText>{value[index] || ''}</AppText>
          </View>
        </React.Fragment>
      ))}
    </View>
  );
};

export default PinInput;

const style = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: '4@ms',
  },

  input: {
    width: '36@ms',
    height: '44@ms',
    backgroundColor: '#F2F8FF',
    borderRadius: 8,
    color: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
