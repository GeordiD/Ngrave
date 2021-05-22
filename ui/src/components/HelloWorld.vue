<template>
  <div id="vex">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { NGrave } from '@/ngrave/Ngrave';
import Vex from 'vexflow';

export default class HelloWorld extends Vue {

    beforeMount() {
        setTimeout(() => { new NGrave('vex', 1000, 500).draw(); }, 500);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#vex {
    height: 100vh;
    width: 100%;
}
</style>
