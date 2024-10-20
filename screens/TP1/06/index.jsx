import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>

      <View style={styles.btnContainer}>
        <TouchableHighlight
          onPress={() => setCounter((old) => old - 1)}
          style={styles.button}
          underlayColor="#DDD"
        >
          <Text style={styles.buttonTitle}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setCounter((old) => old + 1)}
          style={styles.button}
          underlayColor="#DDD"
        >
          <Text style={styles.buttonTitle}>+</Text>
        </TouchableHighlight>
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
    backgroundColor: "#BBB",
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
