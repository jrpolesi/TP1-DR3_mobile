import { StyleSheet, TextInput, View } from "react-native";

export default function App() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Sua data de nascimento" />
    </View>
  );
}

const styles = StyleSheet.create({});

function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  let hours = now.getHours() - birth.getHours();
  let minutes = now.getMinutes() - birth.getMinutes();

  if (days < 0) {
    months--;
    const lastDayOfMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += lastDayOfMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (hours < 0) {
    minutes -= hours;
    hours += 24;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
  };
}
