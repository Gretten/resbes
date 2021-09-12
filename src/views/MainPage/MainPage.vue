<template>
    <b-row>
        <b-col>
            <div>Привет, {{ username ? username : 'гость'}}!</div>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'MainPage',
      computed: {
        ...mapGetters({
      username: 'getUsername',
    })
  }

}
</script>

<style>

</style>