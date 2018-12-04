<template>
    <li v-if="newsItem">
        {{newsItem.title}}
    </li>
</template>

<script>
export default {
  props: {
    newsItem: Object
  }
};
</script>

<style>

</style>
