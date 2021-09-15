<template>

    <div v-if="!objectsLength" class="spinner-container d-flex align-items-center justify-content-center">
         <Spinner />
    </div>
    <div v-else> 
        <b-form-group
          label="Поиск по имени"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Начните печатать для поиска..."
            ></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-table 
            striped 
            hover 
            id='listTable'
            :items="objects"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
        ></b-table>

        <b-pagination
            v-model="currentPage"
            :totalRows="maxRows"
            :perPage="perPage"
            ariaControls="listTable"
        ></b-pagination>
    </div>

</template>

<script>
import Spinner from '@/components/Spinner/Spinner'
import { mapState } from 'vuex';

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
            maxRows: this.objectsLength,
            filter: null,
            filterOn: ['Name'],
        }
    },    
    mounted: function() {
        this.maxRows = this.objectsLength;
    },
    computed: mapState({
        objects: state => state.listData,
        objectsLength: state => state.listData.length
    }),
    created: function() {
        this.$store.dispatch('fetchListData');
    },
    methods: {
        onFiltered(filteredItems) {
            this.maxRows = filteredItems.length;
            this.currentPage = 1;
      },
    },
    watch: {
        objects: function (val) {
            this.maxRows = val.length;
        }
    },
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