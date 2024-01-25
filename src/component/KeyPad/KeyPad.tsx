import React from 'react';
import {Pressable, View} from 'react-native';
import PayPad from './paypad';
import {ScaledSheet} from 'react-native-size-matters/extend';
import LessThan from '../../../assets/svgs/lessThan.svg';

interface Props {
  Amount: string;
  handlePadPress: any;
  deleteHandler: any;
  addPoint?: boolean;
  disable: boolean;
  color: string;
}

const KeyPad = ({
  handlePadPress,
  deleteHandler,
  addPoint,
  disable,
  color,
}: Props) => {
  const backSpace = () => {
    return (
      <Pressable onPress={deleteHandler}>
        <LessThan />
      </Pressable>
    );
  };

  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [addPoint ? '.' : '00', '0', backSpace()],
  ];

  return (
    <>
      <View>
        <View style={style.viewBottom}>
          {rows.map((row, rowIndex) => (
            <View key={rowIndex} style={style.row}>
              {row.map((title, colIndex) => (
                <PayPad
                  color={color}
                  key={colIndex}
                  payPadDisabled={disable && title !== backSpace()}
                  title={title}
                  onPress={() => handlePadPress(title.toString())}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default KeyPad;

const style = ScaledSheet.create({
  viewBottom: {
    paddingHorizontal: 52,
    // paddingVertical: '3%',
  },

  row: {
    flexDirection: 'row',
    // minWidth: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    columnGap: '88@ms',
    rowGap: 48,
  },
});
