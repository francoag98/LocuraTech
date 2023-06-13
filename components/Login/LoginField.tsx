import React from "react";
import { Text, TextInput, View } from "react-native";
import { loginValues } from "./Login";
import { FormikErrors } from "formik";

interface LoginFieldProps {
  placeholder: string;
  error?: string;
  value: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const LoginField = ({
  value,
  placeholder,
  error,
  handleChange,
}: LoginFieldProps) => {
  return (
    <View>
      <TextInput
        onChangeText={handleChange}
        value={value}
        placeholder={placeholder}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default LoginField;
