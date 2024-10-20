import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [pressedBtn, setPressedBtn] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={{ color: pressedBtn?.color ?? "unset" }}>
        {!pressedBtn ? "Aperte um botão" : pressedBtn?.label}
      </Text>

      <View style={styles.btnContainer}>
        <Button
          color="red"
          title="Vermelho"
          onPress={() => setPressedBtn({ label: "Vermelho", color: "red" })}
        />
        <Button
          color="green"
          title="Verde"
          onPress={() => setPressedBtn({ label: "Verde", color: "green" })}
        />
        <Button
          color="blue"
          title="Azul"
          onPress={() => setPressedBtn({ label: "Azul", color: "blue" })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    margin: 20,
  },
  btnContainer: {
    flex: 1,
    gap: 15,
    width: "100%",
    maxWidth: 200,
  },
});
