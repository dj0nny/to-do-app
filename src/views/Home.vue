<template>
  <div class="home">
    <AddTodoForm @todoAdded="addTodo" />
  </div>
</template>

<script>
import AddTodoForm from '../components/AddTodoForm.vue';

export default {
  name: 'Home',
  data: () => ({
    todos: [],
  }),
  components: {
    AddTodoForm,
  },
  methods: {
    addTodo(e) {
      const newTodo = {
        text: e.text,
        done: false,
      };
      this.todos.push(newTodo);
      localStorage.setItem('todoList', JSON.stringify(this.todos));
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
