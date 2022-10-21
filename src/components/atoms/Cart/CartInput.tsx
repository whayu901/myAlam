import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  amount: any;
  updateAmount: any;
  onSubmit: (e: any) => void;
}

const CartInput = ({ amount, updateAmount, onSubmit }: Props) => {
  return (
    <TextInput
      style={styles.amount}
      keyboardType="number-pad"
      autoComplete="off"
      autoCapitalize="none"
      autoCorrect={false}
      value={amount.toString()}
      maxLength={3}
      placeholder="1"
      defaultValue="1"
      onChangeText={updateAmount}
      onSubmitEditing={onSubmit}
      onEndEditing={onSubmit}
    />
  );
};

const styles = StyleSheet.create({
  amount: {
    marginHorizontal: 8,
    width: 50,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 4,
  },
});

export default CartInput;
