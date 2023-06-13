import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import LoginField from "./LoginField";

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

const Login = () => {
  const submitHandler = (values: loginValues) => {
    const { email, password } = values;
    Alert.alert(`Email: ${email}, password: ${password}`);
  };

  return (
    <View>
      <Text>Formulario de Login</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={loginInitialValues}
        onSubmit={async (values, actions) => {
          submitHandler(values);
          actions.setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
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
            />

            <Button
              title="Enviar"
              disabled={!isValid}
              onPress={() => handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
