import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [birthDatetime, setBirthDatetime] = useState("");

  const { years, months, days, hours, minutes } = birthDatetime.length
    ? calculateAge(birthDatetime)
    : {};

  const isInvalidDateTime =
    birthDatetime.length &&
    !/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/.test(birthDatetime);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="00/00/0000 00:00"
        value={birthDatetime}
        onChangeText={(value) => setBirthDatetime(value)}
      />

      {birthDatetime.length ? (
        isInvalidDateTime ? (
          <Text style={styles.text}>
            Formato inválido, o formato deve ser "00/00/0000 00:00"
          </Text>
        ) : (
          <Text style={styles.text}>
            Você tem {years} anos, {months} meses, {days} dias, {hours} horas e{" "}
            {minutes} minutos.
          </Text>
        )
      ) : (
        <Text style={styles.text}>Aguardando...</Text>
      )}
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
  text: {
    textAlign: "center",
  },
});

function calculateAge(birthDate) {
  const formattedBirthDate = birthDate.replace(
    /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/,
    "$3-$2-$1T$4:$5:00"
  );

  const now = new Date();
  const birth = new Date(formattedBirthDate);

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
