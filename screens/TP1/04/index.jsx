import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [randomQueryParam, setRandomQueryParam] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: `https://picsum.photos/200?${randomQueryParam}` }}
      />
      <Text>Aperte o botão abaixo</Text>

      <Button
        title="Alterar imagem"
        onPress={() => setRandomQueryParam(Math.random())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 30,
    margin: 20,
  },
});
