import React, { useState, useCallback, useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";

import {
  CartPhoto,
  CartTitleAndBrand,
  CartAddButton,
  CartInput,
  CartReduceButton,
} from "../../atoms";

interface Props {
  data: any;
}

const Cart = ({ data }: Props) => {
  const [price, setPrice] = useState(data.price);
  const [amount, setAmount] = useState(1);

  const addAmount = useCallback(() => {
    setAmount((prev) => {
      if (prev >= data.stock) {
        setPrice(prev * data.price);
        return prev;
      }
      setPrice((prev + 1) * data.price);
      return prev + 1;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reduceAmount = useCallback(() => {
    setAmount((prev) => {
      if (prev <= 1) {
        setPrice(data.price);
        return 1;
      }
      setPrice((prev - 1) * data.price);
      return prev - 1;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateAmount = useCallback((text: any) => {
    if (text.length > 0) {
      const updatedAmount = Number(text);
      if (updatedAmount <= 1) {
        setPrice(data.price);
        setAmount(1);
      } else if (updatedAmount > 1 && updatedAmount <= data.stock) {
        setPrice(updatedAmount * data.price);
        setAmount(updatedAmount);
      } else {
        setAmount(updatedAmount);
      }
    } else {
      setPrice(0);
      setAmount(0);
    }
  }, []);

  const updateSubmitAmount = useCallback((event: any) => {
    const { text } = event.nativeEvent;
    if (text.length > 0) {
      const updatedAmount = Number(text);
      if (updatedAmount <= 1) {
        setPrice(data.price);
        setAmount(1);
      } else if (updatedAmount > 1 && updatedAmount <= data.stock) {
        setPrice(updatedAmount * data.price);
        setAmount(updatedAmount);
      } else {
        setPrice(data.stock * data.price);
        setAmount(data.stock);
      }
    } else {
      setPrice(data.price);
      setAmount(1);
    }
  }, []);

  const rupiahFormat = (angka: any, prefix: any) => {
    const numberString: any = angka.toString().replace(/[^,\d]/g, "");
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? "Rp." + rupiah : "";
  };

  const memoizedRupiahFormat = useMemo(
    () => rupiahFormat(price, "Rp."),
    [price],
  );

  return (
    <View style={styles.page}>
      <CartPhoto photo={data.photo} />
      <View style={styles.textContainer}>
        <CartTitleAndBrand
          title={data.title}
          brand={data.brand}
          variant={data.variant}
        />
        <View style={styles.subtotalContainer}>
          <View style={styles.countContainer}>
            <CartReduceButton onPress={reduceAmount} />
            <CartInput
              amount={amount}
              updateAmount={updateAmount}
              onSubmit={updateSubmitAmount}
            />
            <CartAddButton onPress={addAmount} />
          </View>
          <Text style={styles.price}>{memoizedRupiahFormat}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 16,
    flexDirection: "row",
    height: 111,
    backgroundColor: "white",
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  subtotalContainer: {
    marginTop: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    color: "#3ED598",
    fontWeight: "800",
    textAlign: "right",
  },
});

export default Cart;
