<template>
  <div class="add-todo-form">
    <form @submit.prevent="handleAdd">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add Todo</legend>
        <div class="uk-margin uk-child-width-expand" uk-grid>
          <div class="uk-width-2-3@m">
            <input class="uk-input" type="text" placeholder="Todo" v-model="newTodo.text">
          </div>
          <div class="uk-width-1-3@m">
            <button type="submit" class="uk-button-primary">Add Todo</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddTodoForm',
  data: () => ({
    newTodo: {
      text: '',
    },
  }),
  methods: {
    handleAdd() {
      this.newTodo.id = uuidv4();
      this.$emit('todoAdded', this.newTodo);
    },
  },
};
</script>

<style scoped>
.uk-button-primary {
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
