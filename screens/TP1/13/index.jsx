import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [newTaskValue, setNewTaskValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function newTask(title) {
    setTasks((prevState) => [
      ...prevState,
      {
        id: getNewRandomId(),
        title,
        done: false,
      },
    ]);
  }

  function removeTask(id) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function doneTask(id) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          task.done = true;
        }

        return task;
      })
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua tarefa"
          onChangeText={(value) => setNewTaskValue(value)}
          value={newTaskValue}
        />

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => {
            const normalizedValue = newTaskValue.trim();

            if (!normalizedValue.length) return;

            newTask(normalizedValue);
            setNewTaskValue("");
          }}
        >
          <Text style={styles.saveBtnText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      {tasks.length ? (
        <FlatList
          data={tasks}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <Item item={item} onRemove={removeTask} onDone={doneTask} />
          )}
          contentContainerStyle={styles.flatListContentContainer}
        />
      ) : (
        <Text style={styles.textEmpty}>Nenhuma tarefa cadastrada</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 30,
  },
  formContainer: {
    alignItems: "center",
    gap: 15,
  },
  textInput: {
    padding: 10,
    borderRadius: 3,
    borderWidth: 2,
    width: "100%",
  },
  saveBtn: {
    backgroundColor: "#DDD",
    padding: 8,
    borderRadius: 5,
    width: "100%",
  },
  saveBtnText: {
    fontSize: 20,
    textAlign: "center",
  },
  textEmpty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
  },
  flatListContentContainer: {
    gap: 10,
  },
});

function Item({ item, onDone, onRemove }) {
  return (
    <View style={itemStyles.container}>
      <Text
        style={
          item.done
            ? [itemStyles.taskTitle, itemStyles.doneTaskTitle]
            : itemStyles.taskTitle
        }
      >
        {item.title}
      </Text>

      <TouchableOpacity
        style={{
          ...itemStyles.button,
          opacity: item.done ? 0.5 : 1,
        }}
        disabled={item.done}
        onPress={() => onDone(item.id)}
      >
        <Ionicons name="checkmark" size={25} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={itemStyles.button}
        onPress={() => onRemove(item.id)}
      >
        <Ionicons name="trash" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    elevation: 5,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  taskTitle: {
    fontSize: 18,
    flex: 1,
  },
  doneTaskTitle: {
    textDecorationLine: "line-through",
  },
  button: {
    backgroundColor: "#1e7acf",
    padding: 8,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: "#DDD",
  },
});

function getNewRandomId() {
  return Math.random().toString(36).substring(7) + Date.now().toString(36);
}
