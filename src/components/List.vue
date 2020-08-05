<template>
  <div class="list uk-child-width-expand" uk-grid>
    <div class="done-list">
      <h2>Done 💤</h2>
      <ul class="uk-list uk-list-hyphen">
          <li v-for="todo in todoDone" :key="todo.id">{{todo.text}}</li>
      </ul>
    </div>
    <div class="not-done-list">
      <h2>Not done 😒</h2>
      <ul class="uk-list uk-list-hyphen">
          <li v-for="todo in todoNotDone" :key="todo.id">{{todo.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array,
  },
  computed: {
    todoDone() {
      return this.todos.filter((item) => item.done);
    },
    todoNotDone() {
      return this.todos.filter((item) => !item.done);
    },
  },
  mounted() {
    console.log(this.todos);
  },
};
</script>

<style scoped>
.list {
 margin: 50px 0;
}
</style>
