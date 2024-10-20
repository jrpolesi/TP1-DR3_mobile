import { View, Text, Image, StyleSheet } from "react-native";

const DATA = {
  title: "Um filme qualquer",
  image: "https://picsum.photos/300/400",
  cinema: "Cineflix",
  time: "19:30",
};

export default function App() {
  return (
    <View style={styles.container}>
      <Card {...DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
});

function Card({ title, image, cinema, time }) {
  return (
    <View style={cardStyles.container}>
      <Text style={cardStyles.title}>{title}</Text>
      <Image style={cardStyles.image} source={{ uri: image }} />
      <Text style={cardStyles.cinema}>{cinema}</Text>
      <Text style={cardStyles.time}>{time}</Text>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#fff",
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    maxWidth: "100%",
    width: 300,
    height: 400,
    marginBottom: 10,
  },
  cinema: {
    marginBottom: 12,
    color: "#555",
  },
  time: {
    color: "#555",
    fontSize: 18,
    fontWeight: "bold",
  },
});
