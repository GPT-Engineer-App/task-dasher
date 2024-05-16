import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Text fontSize="3xl" fontWeight="bold">Todo App</Text>
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <VStack w="100%" spacing={3} mt={5}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md">
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <Text flex="1" textDecoration={task.completed ? "line-through" : "none"}>
                {task.text}
              </Text>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;