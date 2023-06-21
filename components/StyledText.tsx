import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  title: {
    fontSize: theme.fontSizes.title,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
});

interface styledTextProps {
  children: React.ReactNode,
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  ...rest
}: styledTextProps) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subHeading,
    fontSize === "title" && styles.title,
    fontWeight === "bold" && styles.bold,
  ];
  return <Text style={textStyles} {...rest}>
    {children}
  </Text>;
};

export default StyledText;
