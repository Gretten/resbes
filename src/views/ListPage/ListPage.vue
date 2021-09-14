<template>

    <div v-if="!getListData.length" class="spinner-container d-flex align-items-center justify-content-center">
         <Spinner />
    </div>
    <div v-else> 
        <b-form-group
          label="Поиск по имени"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-1"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Введите имя"
            ></b-form-input>
          </b-input-group>
        </b-form-group>


        <b-table 
            striped 
            hover 
            id='listTable'
            :items="getListData"
            :perPage="perPage"
            :currentPage="currentPage"
            :fields="fields"
            :filter="filter"
            @filtered="onFiltered"
            :filterIncludedFields="['Name']"
        ></b-table>

        <b-pagination
            v-model="currentPage"
            :totalRows="totalRows"
            :perPage="perPage"
            ariaContros="listTable"
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
            filter: '',
            perPage: 10,
            currentPage: 1,
            totalRows: 1,
            fields: [
                { key: 'Name', sortable: true },
                { key: 'Postiton', sortable: true },
                { key: 'Office', sortable: true },
                { key: 'Age', sortable: true },
                { key: 'Start', sortable: true },
                { key: 'Salary', sortable: true },
                { key: 'Currency', sortable: true }
                ],
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