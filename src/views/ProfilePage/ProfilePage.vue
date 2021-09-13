<template>
    <b-row>
        <b-col>
            <div class="d-flex justify-content-end">
                <b-button @click="logout" variant="danger">Выйти</b-button> 
            </div>

        </b-col>
    </b-row>
</template>

<script>
import authAdapter from '@/api/Local/AuthAdapter/AuthAdapter'
export default {
    name: 'ProfilePage',
    methods: {
        logout: function() {
            authAdapter.removeLogin();
            this.$store.commit('clearUsername');
            this.$store.commit('clearAuth');
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>