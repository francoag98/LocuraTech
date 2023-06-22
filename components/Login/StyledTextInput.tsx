import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { loginValues } from "./Login";
import { FieldInputProps, FormikErrors } from "formik";
import theme from "../../theme";

interface StyledTextInputProps {
  value: FieldInputProps<string>;
  handleChange: (value: string) => void;
  placeholder: string;
  error?: string;
  password?: boolean;
}

const StyledTextInput = ({
  value,
  placeholder,
  error,
  handleChange,
  password,
}: StyledTextInputProps) => {
  const textStyles = [styles.input, error ? styles.input_error : undefined];
  return (
    <View>
      <TextInput
        style={textStyles}
        onChangeText={handleChange}
        value={value as unknown as string}
        placeholder={placeholder}
        secureTextEntry={password}
      />
      {error && <Text style={styles.error_text}>{error}</Text>}
    </View>
  );
};

export default StyledTextInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginVertical: 8,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  input_error: {
    borderBottomColor: "red",
  },
  error_text: {
    color: "red",
    fontSize: theme.fontSizes.body,
  },
});
