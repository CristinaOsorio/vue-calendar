<template>
  <v-app>
   <Calendar/>
  </v-app>
</template>

<script>
  import Calendar from './components/Calendar.vue'

export default {

  name: 'App',
  components: {
    Calendar
  },
  data: () => ({
    //
  }),
};
</script>
