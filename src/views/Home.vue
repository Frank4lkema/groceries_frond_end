<template>
  <div class="home">
    <Lists/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lists from '@/components/Lists.vue' // @ is an alias to /src

@Component({
  components: {
    Lists
  }
})
export default class Home extends Vue {}
</script>
