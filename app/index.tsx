import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<
    { id: string; text: string }[]
  >([]);

  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    
    setTask('');
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a task"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />

      <Button
        title="Add Task"
        onPress={addTask}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={styles.task}
            onPress={() => deleteTask(item.id)}
          >
            {item.text}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },

  task: {
    backgroundColor: '#eee',
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});