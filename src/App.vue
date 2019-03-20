<template>
  <div class="resume">
    <info-panel></info-panel>
    <content-panel></content-panel>
    <language-selection></language-selection>
  </div>

</template>

<script>
  import InfoPanel from './components/InfoPanel.vue';
  import ContentPanel from './components/ContentPanel.vue';
  import LanguageSelection from './components/LanguageSelection.vue';

  export default {
    components: {
      'info-panel': InfoPanel,
      'content-panel': ContentPanel,
      'language-selection':LanguageSelection
    }
  }
</script>
<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.resume{
  height: 45cm;
}
body{
  font-family: 'Lato', sans-serif;
}
</style>
