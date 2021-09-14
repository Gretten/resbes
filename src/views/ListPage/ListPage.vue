<template>

    <div v-if="!getListData.length" class="spinner-container d-flex align-items-center justify-content-center">
         <Spinner />
    </div>
    <div v-else> 
        <b-table 
            striped 
            hover 
            id='listTable'
            :items="getListData"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
        ></b-table>

        <b-pagination
            v-model="currentPage"
            :totalRows="rows"
            :perPage="perPage"
            ariaControls="listTable"
        ></b-pagination>

    </div>

    
</template>

<script>
import Spinner from '@/components/Spinner/Spinner'
import { mapGetters } from 'vuex'

export default {
    name: 'ListPage',
    components: {
        Spinner
    },
    data() {
        return {
            fields: [
                { key: 'Name', sortable: true },
                { key: 'Postiton', sortable: true },
                { key: 'Office', sortable: true },
                { key: 'Age', sortable: true },
                { key: 'Start', sortable: true },
                { key: 'Salary', sortable: true },
                { key: 'Currency', sortable: true }
                ],
            perPage: 10,
            currentPage: 1,
        }
    },
    computed: {
        ...mapGetters([
            'getListData'
        ]),
        rows() {
            return this.getListData.length
        }
    },
    created: function() {
        this.$store.dispatch('fetchListData')
    },
    methods: {
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
      },
    }
}
</script>

<style>
    .spinner-container {
        min-height: 300px;
    }
    .sr-only {
        display: none;
    }
</style>