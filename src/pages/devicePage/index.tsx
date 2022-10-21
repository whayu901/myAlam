import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from "react-native";

const { GetUniqueId } = NativeModules;

const DevicePage = ({ navigation }: any) => {
  const [deviceID, setDeviceID] = useState("");

  const getDeviceID = () => {
    GetUniqueId.getId((response: any) => setDeviceID(response));
  };

  useEffect(() => {
    getDeviceID();
  });

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.page}>
          <Text
            style={{ fontWeight: "bold", textAlign: "center", fontSize: 16 }}>
            Your Device ID:
          </Text>
          <Text
            style={{
              fontWeight: "400",
              textAlign: "center",
              fontSize: 14,
              marginTop: 15,
            }}>
            {deviceID}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 16,
    backgroundColor: "white",
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default DevicePage;
