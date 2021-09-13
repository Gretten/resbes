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
export default {
    name: 'ProfilePage',
    methods: {
        logout: function() {
            this.$store.commit('clearUsername');
            this.$store.commit('clearAuth');
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>