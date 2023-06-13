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

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Debe introducir un correo valido.")
    .required("El correo electrónico es requerido."),
  password: yup.string().required("La contraseña es requerida."),
});

interface loginValues {
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
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Correo Electrónico"
            />
            {errors.email && <Text>{errors.email}</Text>}

            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Contraseña"
            />
            {errors.password && <Text>{errors.password}</Text>}

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
