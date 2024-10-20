import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

calculatorVector = [
  [7, 8, 9, "/"],
  [4, 5, 6, "*"],
  [1, 2, 3, "-"],
  [0, ".", "+", "="],
];

const OPERATIONS = ["+", "-", "*", "/"];

export default function App() {
  const [operation, setOperation] = useState("");
  const [error, setError] = useState(null);

  function handlePress(value) {
    if (error) {
      setError(null);
      setOperation("");
    }

    if (value === "=") {
      try {
        const result = eval(operation);
        setOperation(result);
      } catch (error) {
        setError("Operação inválida");
      }
    } else if (OPERATIONS.includes(value)) {
      setOperation((prevState) => {
        const currOperation = value;
        const prevOperation = prevState[prevState.length - 2];

        const isOperation = OPERATIONS.includes(prevOperation);

        if (isOperation && currOperation !== "-") {
          return prevState.slice(0, -2) + `${currOperation} `;
        }

        if (isOperation && currOperation === "-") {
          return (prevState += ` ${currOperation}`);
        }

        return (prevState += ` ${currOperation} `);
      });
    } else {
      setOperation((prevState) => {
        const lastValue = prevState.split(" ").at(-1);

        if (/\./.test(lastValue) && value === ".") {
          return prevState;
        }

        return (prevState += value);
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <Text>{operation || "Digite um número..."}</Text>
        )}
      </View>

      <View style={styles.calculator}>
        <View style={styles.digitsContainer}>
          {calculatorVector.map((row, index) => (
            <View style={styles.rowContainer} key={index}>
              {row.map((value) => (
                <Digit key={value} value={value} onPress={handlePress} />
              ))}
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            setOperation("");
            setError(null);
          }}
        >
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 30,
    alignItems: "center",
  },
  display: {
    width: "100%",
    padding: 15,
    borderRadius: 3,
    borderWidth: 2,
    backgroundColor: "#DDD",
    alignItems: "flex-end",
  },
  displayText: {
    fontSize: 25,
    textAlign: "right",
    fontFamily: "monospace",
  },
  digitsContainer: {
    gap: 15,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  calculator: {
    gap: 15,
  },
  clearButton: {
    backgroundColor: "#DDD",
    borderRadius: 5,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  clearButtonText: {
    fontSize: 20,
    fontFamily: "monospace",
  },
});

function Digit({ value, onPress }) {
  return (
    <TouchableOpacity style={digitStyles.button} onPress={() => onPress(value)}>
      <Text style={digitStyles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const digitStyles = StyleSheet.create({
  button: {
    backgroundColor: "#DDD",
    borderRadius: 5,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "monospace",
  },
});
