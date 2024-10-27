import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const normalizedValue = inputValue.replace(/\s\s+/g, " ").toLowerCase();

  const { isTextPalindrome, reversedText } = isPalindrome(normalizedValue);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        value={normalizedValue}
        autoCapitalize="none"
        onChangeText={(value) => setInputValue(value)}
      />

      <View style={styles.resultContainer}>
        {normalizedValue.trim() ? (
          <Text style={styles.text}>
            O texto "{normalizedValue}" {isTextPalindrome ? "É" : "NÃO é"} um
            palíndromo ( {normalizedValue} {isTextPalindrome ? "==" : "!="}{" "}
            {reversedText})
          </Text>
        ) : (
          <Text>Aguardando...</Text>
        )}
      </View>
    </View>
  );
}

function isPalindrome(value) {
  const normalizedValue = value.trim().toLowerCase();

  const reversedValue = normalizedValue.split("").reverse().join("");

  return {
    isTextPalindrome: normalizedValue === reversedValue,
    reversedText: reversedValue,
  };
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
