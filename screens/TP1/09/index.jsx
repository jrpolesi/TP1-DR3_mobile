import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [number, setNumber] = useState(null);

  const isEven = number && number % 2 === 0;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={number === null ? "" : String(number)}
        onChangeText={(value) => {
          if (/^-?([0-9]|-)*$/.test(value)) {
            const newValue = parseInt(value);

            if (!Number.isNaN(newValue)) {
              setNumber(parseInt(value) ?? null);
            } else if (value === "-") {
              setNumber("-");
            } else {
              setNumber(null);
            }
          }
        }}
      />

      <View style={styles.resultContainer}>
        {number !== null && number !== "-" ? (
          <Text style={styles.text}>
            O número {number} é {isEven ? "par" : "ímpar"}
          </Text>
        ) : (
          <Text>Aguardando...</Text>
        )}
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
  input: {
    justifyContent: "center",
    padding: 10,
    borderRadius: 3,
    borderWidth: 2,
    width: "100%",
    maxWidth: 200,
  },
  resultContainer: {
    gap: 15,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
