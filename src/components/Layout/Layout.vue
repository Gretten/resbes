<template>
  <b-container>
      <b-row>
         <Header />
      </b-row>
      <b-row>
          <slot />
      </b-row>
  </b-container>
</template>

<script>
    import Header from '@/components/Header/Header.vue'
    export default {
        name: 'Layout',
        components: {
            Header,
        },
    }
</script>
