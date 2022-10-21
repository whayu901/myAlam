import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: any;
  brand: any;
  variant: any;
}

const CartTitleAndBrand = ({ title, brand, variant }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.brand}>
        {brand} - {variant}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "600",
  },
  brand: {
    marginTop: 4,
    fontSize: 14,
    color: "#747474",
    fontWeight: "600",
  },
});

export default memo(CartTitleAndBrand);
