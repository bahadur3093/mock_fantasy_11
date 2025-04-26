import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface ITitleProps {
  children: ReactNode;
  classes?: string;
}

const Title = ({ children, classes }: ITitleProps) => {
  return (
    <View>
      <Text className={`font-extrabold tracking-wide ${classes}`}>
        {children}
      </Text>
    </View>
  );
};

export default Title;
