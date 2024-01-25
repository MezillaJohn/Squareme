import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import React, {useRef} from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters/extend';
import {COLORS} from '../../constants/theme';
import AppText from '../AppText/AppText';

type OtpInputProps = {
  length: number;
  value: Array<string>;
  disable: boolean;
  onChange(value: Array<string>): void;
};

const OtpInput = ({
  length,
  value,
  disable,
  onChange,
}: OtpInputProps) => {
  const inputRef = useRef<Array<TextInput>>([]);

  const onChangeValue = (text: string, index: number) => {
    const newValue = value?.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }
      return item;
    });

    onChange(newValue);
  };

  const handleOnChangeText = (text: string, index: number) => {
    onChangeValue(text, index);
    if (text.length !== 0) {
      return inputRef?.current[index + 1]?.focus();
    }
    inputRef?.current[index - 1]?.focus();
  };

  const handleBackSpace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {nativeEvent} = event;
    if (nativeEvent.key === 'BackSpace') {
      handleOnChangeText('', index);
    }
  };

  return (
    <View style={style.container}>
      {[...new Array(length)]?.map((item, index) => {
        return (
          <TextInput
            ref={ref => {
              if (ref && !inputRef.current.includes(ref)) {
                inputRef.current = [...inputRef.current, ref];
              }
            }}
            maxLength={1}
            contextMenuHidden
            selectTextOnFocus
            editable={!disable}
            key={index}
            style={style.input}
            keyboardType="decimal-pad"
            testID={`OTPInput-${index}`}
            onChangeText={text => handleOnChangeText(text, index)}
            onKeyPress={event => handleBackSpace(event, index)}
          />
        );
      })}
    </View>
  );
};

export default OtpInput;

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
    textAlign: 'center',
  },
});
