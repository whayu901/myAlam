import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { datas } from "../../assets";
import { Cart, ProgressBar } from "../../components";

const CartPage = ({ navigation }: any) => {
  const nav = useNavigation();
  const cartItem = ({ item }: any) => <Cart data={item} />;

  const openAboutPage = () => {
    navigation.navigate("DevicePage");
  };

  useEffect(() => {
    nav.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Button onPress={openAboutPage} title="About" color="#3ED598" />
      ),
    });
  });

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <FlatList
          data={datas}
          renderItem={cartItem}
          keyExtractor={(_, index: number) => index.toString()}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
        <View style={{ position: "absolute", width: "100%", bottom: 0 }}>
          <ProgressBar backgroundColor="#444444" completedColor="#3ED598" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    position: "relative",
  },
  listContent: {
    paddingBottom: 82,
  },
});

export default CartPage;
