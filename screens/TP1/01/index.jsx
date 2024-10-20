import { View, Text } from "react-native";

export default function App() {
  const name = "José Ricardo Kremer Polesi";
  const currentHour = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View>
      <Text>
        Olá, {name}! Agora são {currentHour}
      </Text>
    </View>
  );
}
