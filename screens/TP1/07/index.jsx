import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>

      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => {
            setCounter((old) => old - 1);
          }}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#AAA" : "#DDD",
            ...styles.button,
          })}
        >
          <Text style={styles.buttonTitle}>-</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            setCounter((old) => old + 1);
          }}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#AAA" : "#DDD",
            ...styles.button,
          })}
        >
          <Text style={styles.buttonTitle}>+</Text>
        </Pressable>
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
