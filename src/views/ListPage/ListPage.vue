<template>

    <div v-if="!objectsLength" class="spinner-container d-flex align-items-center justify-content-center">
         <Spinner />
    </div>
    <div v-else>
        <b-container>
            <b-row>                
                <b-col>
                    <div>
                        <span>Show</span> <b-form-select v-model="perPage" :options="options"></b-form-select> <span>entries</span>
                    </div>
                </b-col>
                <b-col>
                    <b-form-group
                        label="Search"
                        label-for="filter-input"
                        label-cols-sm="2"
                        label-align-sm="right"
                        label-size="md"
                        class="d-flex align-items-center"
                        >
                        <b-form-input
                            size="sm"
                            id="filter-input"
                            v-model="filter"
                            type="search"
                            placeholder="search"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-container>
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
            :filter-function="customFilter"
        ></b-table>

        <b-pagination
            v-model="currentPage"
            :totalRows="maxRows"
            :perPage="perPage"
            ariaControls="listTable"
        ></b-pagination>
        <p>Showing {{ firstStep }} to {{ nextStep }} of {{ objectsLength }} </p>
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
            options: [
                { value: 5, text: '5' },
                { value: 6, text: '6' },
                { value: 7, text: '7' },
                { value: 8, text: '8' },
                { value: 9, text: '9'},
                { value: 10, text: '10'}
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
    computed: {
        ...mapState({
            objects: state => state.list.listData,
            objectsLength: state => state.list.listData.length
        }),
        firstStep: function() {
            if(this.currentPage === 1) {
                return 1;
            } return (this.currentPage * this.perPage) - this.perPage
        },
        nextStep: function() {
            if(this.currentPage === 1) {
                return this.perPage;
            } else if((this.currentPage * this.perPage) > this.objectsLength) {
                return this.objectsLength;
            } else {
                return (this.currentPage * this.perPage);
            }
        }
    },
    created: function() {
        this.$store.dispatch('fetchListData');
    },
    methods: {
        onFiltered(filteredItems) {
            this.maxRows = filteredItems.length;
            this.currentPage = 1;
      },
      customFilter(rowContent, search) {
          const name = rowContent.Name.toLowerCase();
          const searchStr = search.toLowerCase();
          return name.startsWith(searchStr);
      }
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