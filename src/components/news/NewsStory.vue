<template>
    <li v-if="newsItem">
        <a :href="newsItem.url" target="_blank"><h4>{{newsItem.title}}</h4></a>
        <p>{{newsItem.description}}</p>
    </li>
</template>

<script>
export default {
  props: {
    newsItem: Object
  }
};
</script>

<style scoped>
li {
  text-align: left;
  list-style: none;
}
h4 {
  margin: 0px;
}
p {
  margin: 0px;
}
</style>