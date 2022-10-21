import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import { IconAdd, IconReduce } from "../../../assets";

interface Props {
  icon?: string;
  onPress?: () => void;
}

const IconButton = ({ icon, onPress }: Props) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  // const Icon = () => {
  //   switch (icon.toString()) {
  //     case "reduce":
  //       return <IconReduce />;
  //     default:
  //       return <IconAdd />;
  //   }
  // };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.background}>
        <Text style={{ fontWeight: "bold" }}>
          {icon === "reduce" ? "-" : "+"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    borderRadius: 14,
  },
});

export default IconButton;
