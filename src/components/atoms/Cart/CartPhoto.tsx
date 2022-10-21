import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

interface Props {
  photo: any;
}

const CartPhoto = ({ photo }: Props) => {
  return <Image source={photo} style={styles.photo} />;
};

const styles = StyleSheet.create({
  photo: {
    width: 80,
    height: 80,
  },
});

export default memo(CartPhoto);
