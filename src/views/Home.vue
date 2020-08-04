<template>
  <div class="home">
    <AddTodoForm @todoAdded="addTodo" />
    <TodoList :list="todos" @markedTodo="updateTodoList" @deletedTodo="updateTodoList" />
  </div>
</template>

<script>
import AddTodoForm from '../components/AddTodoForm.vue';
import TodoList from '../components/TodoList.vue';

export default {
  name: 'Home',
  data: () => ({
    todos: [],
  }),
  components: {
    AddTodoForm,
    TodoList,
  },
  methods: {
    addTodo(e) {
      const newTodo = {
        id: e.id,
        text: e.text,
        done: false,
      };
      this.todos.push(newTodo);
      localStorage.setItem('todoList', JSON.stringify(this.todos));
    },
    updateTodoList(e) {
      localStorage.setItem('todoList', JSON.stringify(e));
      this.todos = e;
    },
  },
  mounted() {
    if (localStorage.getItem('todoList') === null) {
      localStorage.setItem('todoList', JSON.stringify([]));
    } else {
      this.todos = JSON.parse(localStorage.getItem('todoList'));
    }
  },
};
</script>
