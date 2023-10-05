import React, {FC} from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';
import {styles} from './styles';
import {colors} from '../../utilities/constants/colors';

type TextInputComponentProps = {
  placeholder?: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
  renderLeftView: React.ReactNode;
  renderRightView: React.ReactNode;
};

const TextInputComponent: FC<TextInputComponentProps> = ({
  placeholder = '',
  inputRef,
  onChangeText = () => {},
  value,
  label,
  renderLeftView,
  renderRightView,
  ...props
}) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputView}>
        {renderLeftView && renderLeftView()}
        <TextInput
          {...(props as TextInputProps)}
          ref={inputRef}
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardAppearance={'dark'}
          placeholderTextColor={colors.grey4}
        />
        {renderRightView && renderRightView()}
      </View>
    </>
  );
};

export default TextInputComponent;
