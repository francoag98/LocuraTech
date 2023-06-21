import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { loginValues } from "./Login";
import { FormikErrors } from "formik";
import theme from "../../theme";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginVertical: 8,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  error: {
    color: "red",
    fontSize: theme.fontSizes.body,
  },
});

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
  password?: boolean;
}

const LoginField = ({
  value,
  placeholder,
  error,
  handleChange,
  password,
}: LoginFieldProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={password}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default LoginField;
