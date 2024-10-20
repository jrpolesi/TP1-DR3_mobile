import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const QUESTIONS = [
  {
    id: 1,
    title: "Qual é o maior planeta do sistema solar?",
    options: ["Júpiter", "Saturno", "Netuno", "Urano"],
    correct: "Júpiter",
    userAnswer: null,
  },
  {
    id: 2,
    title: "Qual é o menor planeta do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
    userAnswer: null,
  },
  {
    id: 3,
    title: "Qual é o planeta mais quente do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Vênus",
    userAnswer: null,
  },
  {
    id: 4,
    title: "Qual é o planeta mais frio do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Netuno"],
    correct: "Netuno",
    userAnswer: null,
  },
  {
    id: 5,
    title: "Qual é o planeta mais distante do sol?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Netuno",
    userAnswer: null,
  },
  {
    id: 6,
    title: "Qual é o planeta mais próximo do sol?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
    userAnswer: null,
  },
  {
    id: 7,
    title: "Qual é o planeta com maior número de luas?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Júpiter",
    userAnswer: null,
  },
  {
    id: 8,
    title: "Qual é o planeta com menor número de luas?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
    userAnswer: null,
  },
  {
    id: 9,
    title: "Qual é o planeta mais denso do sistema solar?",
    options: ["Mercúrio", "Vênus", "Terra", "Marte"],
    correct: "Terra",
    userAnswer: null,
  },
  {
    id: 10,
    title: "Qual é o planeta menos denso do sistema solar?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Saturno",
    userAnswer: null,
  },
];

const primaryColor = "#3481c4";

export default function App() {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [isStarted, setIsStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(answer) {
    setQuestions((prevState) =>
      prevState.map((question) => {
        if (question.id === questions[currentQuestion].id) {
          question.userAnswer = answer;
        }

        return question;
      })
    );
  }

  const currentQuestionData = questions[currentQuestion];

  const isLast = currentQuestion === questions.length - 1;
  const isFinished = isLast && !!currentQuestionData.userAnswer;

  const correctAnswers = questions.filter(
    (question) => question.correct === question.userAnswer
  ).length;

  const finishedText = `Você fez ${correctAnswers * 3} de ${
    questions.length * 3
  } pontos`;

  return (
    <View style={styles.container}>
      {isStarted ? (
        <View style={styles.gameContainer}>
          <Text style={styles.progressText}>
            {currentQuestion + 1} / {questions.length}
          </Text>

          {isFinished ? (
            <Text style={styles.finishedText}>{finishedText}</Text>
          ) : (
            <Question
              key={currentQuestionData.id}
              title={currentQuestionData.title}
              options={currentQuestionData.options}
              correct={currentQuestionData.correct}
              userAnswer={currentQuestionData.userAnswer}
              onAnswer={handleAnswer}
            />
          )}

          <TouchableOpacity
            style={{
              ...styles.nextBtn,
              opacity: currentQuestionData.userAnswer ? 1 : 0.5,
            }}
            disabled={!currentQuestionData.userAnswer}
            onPress={() => {
              if (isFinished) {
                setCurrentQuestion(0);
                setQuestions((prevState) =>
                  prevState.map((question) => ({
                    ...question,
                    userAnswer: null,
                  }))
                );
                setIsStarted(false);
                return;
              }

              setCurrentQuestion((prev) => prev + 1);
            }}
          >
            <Text style={styles.btnText}>
              {isLast ? "Reiniciar" : "Próxima"}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => setIsStarted(true)}
        >
          <Text style={styles.btnText}>Iniciar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  gameContainer: {
    gap: 20,
  },
  progressText: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "flex-end",
    color: primaryColor,
    fontWeight: "bold",
  },
  nextBtn: {
    backgroundColor: primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  startBtn: {
    backgroundColor: primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 26,
    marginTop: 40,
    borderRadius: 5,
    alignSelf: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: 18,
  },
  finishedText: {
    fontSize: 24,
    textAlign: "center",
  },
});

function Question({ title, options, correct, userAnswer, onAnswer }) {
  const isAnswered = !!userAnswer;

  return (
    <View style={questionStyles.container}>
      <Text style={questionStyles.title}>{title}</Text>

      <FlatList
        data={options}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => {
          let textColor = "unset";

          if (item === correct && isAnswered) {
            textColor = "green";
          } else if (item !== correct && isAnswered) {
            textColor = "red";
          }

          return (
            <TouchableOpacity
              style={questionStyles.option}
              onPress={() => onAnswer(item)}
              disabled={isAnswered}
            >
              <View
                style={{
                  ...questionStyles.radio,
                  backgroundColor: userAnswer === item ? primaryColor : "unset",
                }}
              />
              <Text style={{ ...questionStyles.optionLabel, color: textColor }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const questionStyles = StyleSheet.create({
  container: {
    gap: 16,
  },
  title: {
    fontSize: 22,
  },
  option: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
  },
  optionLabel: {
    fontSize: 18,
  },
});
