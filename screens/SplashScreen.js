import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/Logo.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495e57",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#f4ce14",
  },
});

export default SplashScreen;