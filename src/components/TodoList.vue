<template>
  <div class="todo-list-wrapper">
    <div class="empty" v-if="list.length === 0">
      No items
    </div>
    <div class="todo-list" v-else>
      <div class="todo" :class="{ done: todo.done }" v-for="todo in list" :key="todo.id">
        <span class="delete" @click="deleteTodo(todo.id)"><span uk-icon="trash"></span></span> <span @click="markAsDone(todo.id)" class="todo-text">{{todo.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data: () => ({
    newList: [],
  }),
  props: {
    list: Array,
  },
  methods: {
    markAsDone(id) {
      this.list.forEach((item) => {
        if (item.id === id) {
          // eslint-disable-next-line no-param-reassign
          item.done = !item.done;
        }
      });
      this.$emit('markedTodo', this.list);
    },
    deleteTodo(id) {
      this.newList = this.list.filter((item) => item.id !== id);
      this.$emit('deletedTodo', this.newList);
    },
  },
};
</script>

<style scoped>
.todo {
  cursor: pointer;
  padding: 5px 0;
  margin-bottom: 15px;
}

.delete {
  display: inline-block;
  margin-right: 20px;
}

.todo.done .todo-text {
  text-decoration: line-through;
}
</style>
