<template>
  <div class="container-fluid px-0">
    <div class="row no-gutters">
      <div class="col-sm-12 col-xl-3">
        <info-panel></info-panel>
      </div>
      <div class="col-sm-12 col-xl-9">
        <content-panel></content-panel>
      </div>
      <div class="col-sm-12">
        <language-selection></language-selection>
      </div>
    </div>
  </div>
</template>

<script>
  import InfoPanel from './components/1_InfoPanel/InfoPanel.vue';
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
.resume{
  height: 45cm;
}
body{
  font-family: 'Lato', sans-serif;
}
.infoPanelTitle {
       font-weight: 100;
       letter-spacing: 5px;
       text-transform: uppercase;
       font-size: 1em;
       text-align: center;
       margin: 30px 0;
}
.infoItem {
  margin-bottom: 10px;
}

h1, h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
}
h1 {
    color: #333333;
    font-size: 1.2em;
}
h2 {
    color: #555555;
    font-size: 0.9em;
}

</style>
