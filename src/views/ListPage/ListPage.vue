<template>

    <div v-if="!getListData.length" class="spinner-container d-flex align-items-center justify-content-center">
         <Spinner />
    </div>
    <Table v-else :items="getListData"/>
</template>

<script>
import Table from '@/components/Table/Table'
import Spinner from '@/components/Spinner/Spinner'
import { mapGetters } from 'vuex'

export default {
    name: 'ListPage',
    components: {
        Table,
        Spinner
    },
    data() {
        return {
            isLoaded: false,
        }
    },
    computed: {
        ...mapGetters([
            'getListData'
        ])
    },
    created: function() {
        this.$store.dispatch('fetchListData')
    },

}
</script>

<style>
    .spinner-container {
        min-height: 300px;
    }
</style>