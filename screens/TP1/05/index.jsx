import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setCounter((old) => old - 1)}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCounter((old) => old + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 30,
    margin: 20,
  },
  buttonTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#DDD",
    padding: 4,
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 15,
  },
});
