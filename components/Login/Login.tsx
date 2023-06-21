import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { Alert, Button, Text, View, StyleSheet, Pressable } from "react-native";
import * as yup from "yup";
import LoginField from "./LoginField";
import StyledText from "../StyledText";
import theme from "../../theme";

const styles = StyleSheet.create({
  conatiner: {
    width: "80%",
  },
  container_button: {
    marginVertical: 16,
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    elevation: 3,
    marginVertical: 8,
  },
  button_text: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    letterSpacing: 1,
    color: theme.colors.textDefault,
  },
  button_enabled: {
    backgroundColor: theme.colors.primary,
  },
  button_disabled: {
    backgroundColor: "grey",
  },
});

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Debe introducir un correo valido.")
    .required("El correo electrónico es requerido."),
  password: yup.string().required("La contraseña es requerida."),
});

export interface loginValues {
  password: string;
  email: string;
}

const loginInitialValues: loginValues = {
  password: "",
  email: "",
};

const mockValues: loginValues = {
  email: "example@com",
  password: "1234",
};

const Login = () => {
  const submitHandler = (values: loginValues) => {
    const { email, password } = values;
    Alert.alert(`Email: ${email}, password: ${password}`);
  };

  return (
    <View style={styles.conatiner}>
      <StyledText fontWeight="bold" fontSize="title" color="primary">
        Inicia Sesión
      </StyledText>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={mockValues}
        onSubmit={async (values, actions) => {
          submitHandler(values);
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, isValid }) => (
          <View>
            <LoginField
              handleChange={handleChange("email")}
              placeholder="Correo Electrónico"
              value={values.email}
              error={errors.email}
            />
            <LoginField
              handleChange={handleChange("password")}
              placeholder="Contraseña"
              value={values.password}
              error={errors.password}
              password
            />

            <Pressable
              style={[
                styles.button,
                isValid ? styles.button_enabled : styles.button_disabled,
              ]}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.button_text}>Enviar</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      {/* TODO Aplicar ruteo */}
      <StyledText>¿Ya tienes cuenta?</StyledText>
      <Text>¿Olvidaste tu contraseña?</Text>
    </View>
  );
};

export default Login;
