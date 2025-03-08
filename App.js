import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import { CheckBox, Button } from '@rneui/themed';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', description: 'Buy groceries', completed: false },
    { id: '2', description: 'Finish React Native project', completed: false },
    { id: '3', description: 'Go for a run', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: (tasks.length + 1).toString(),
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTaskCompletion(item.id)}
        containerStyle={styles.checkboxContainer}
      />
      <Text style={item.completed ? styles.completedText : styles.taskText}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>To-do List</Text>

        { }
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />

        { }
        <Button
          title="Add Task"
          onPress={addTask}
          buttonStyle={styles.addButton}
        />

        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  content: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    marginBottom: 15,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
  completedText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
  checkboxContainer: {
    backgroundColor: '#f9f9f9',
    borderWidth: 0,
    marginRight: 10,
  },
});

export default App;
