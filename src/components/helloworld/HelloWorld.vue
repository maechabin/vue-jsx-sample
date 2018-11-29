<template>
  <h1>Hello {{ world }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public world: string = 'world';
}
</script>

<style>
h1 {
  font-size: 64px;
  color: #3ab981;
}
</style>