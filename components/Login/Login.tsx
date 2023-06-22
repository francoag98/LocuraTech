import { Formik, Form, Field, useField } from "formik";
import React, { useState } from "react";
import { Alert, Button, Text, View, StyleSheet, Pressable } from "react-native";
import * as yup from "yup";
import StyledTextInput from "./StyledTextInput";
import StyledText from "../StyledText";
import theme from "../../theme";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Debe introducir un correo valido.")
    .required("El correo electrónico es requerido."),
  password: yup
    .string()
    .min(5, "Contraseña muy corta")
    .max(10, "Contraseña muy larga")
    .required("La contraseña es requerida."),
});

export interface loginValues {
  password: string;
  email: string;
}

const loginInitialValues: loginValues = {
  password: "",
  email: "",
};

const Login = () => {
  const submitHandler = (values: loginValues) => {
    const { email, password } = values;
    // TODO condicional si ha ocurrido un error en el back
    if (false)
      Alert.alert(
        "Hubo un error!",
        "Vuelva a intentarlo más tarde.",
        [
          {
            text: "Ok",
          },
        ],
        {
          cancelable: true,
        }
      );
    else Alert.alert(`Email: ${email}, password: ${password}`);
  };

  interface FormikInputProps {
    name: string;
    placeholder: string;
    secure?: boolean;
  }
  
  const FormikInputValues = ({
    name,
    placeholder,
    secure,
  }: FormikInputProps) => {
    const [field, meta, helpers] = useField(name);
    return (
      <StyledTextInput
        handleChange={(value: string) => helpers.setValue(value)}
        placeholder={placeholder}
        value={field}
        error={meta.error}
        password={secure}
      />
    );
  };

  return (
    <View style={styles.conatiner}>
      <StyledText fontWeight="bold" fontSize="title" color="primary">
        Inicia Sesión
      </StyledText>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={loginInitialValues}
        onSubmit={async (values, actions) => {
          submitHandler(values);
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit, isValid }) => (
          <View>
            <FormikInputValues name="email" placeholder="Correo Electronico" />
            <FormikInputValues
              name="password"
              placeholder="Contraseña"
              secure
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
