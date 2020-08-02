<template>
  <div class="footer uk-child-width-expand uk-background-muted uk-padding-small" uk-grid>
    <div class="uk-text-center">
      {{year}} - Made with ❤ by Dj0nny
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>
