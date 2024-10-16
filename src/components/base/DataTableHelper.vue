
<template>
<v-data-table-server
    v-model="selected"
    v-model:items-per-page="datatable.options.itemsPerPage"
    :headers="headers"
    :footer-props="datatable.footerProps"
    :items-length="datatable.total"
    :items="datatable.items"
    :loading="loading" loading-text="Loading... Please wait" 
    @update:options="loadItems" :show-select="show_select" return-object
  >

  <template v-slot:[`item.id`]="{ item }">
         <slot
        name="item.id"
        :item="item" />
      </template>
      </v-data-table-server>
  </template>
  
  <script>
  import DataTable from '../../utilities/datatable.js'
  
  export default {
  
    props: {
      headers: [],
      dataLoader: Function,
      show_select: Boolean,
      value: [],
    },
  
    data() {
      return {
        loading: false,
        resetting: false,
        datatable: new DataTable(),
      };
    },

    computed: {
        selected: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        },
    },
  
    methods: {

      loadItems ({ page, itemsPerPage, sortBy }) {
        this.loading = true

        this.dataLoader({ page, itemsPerPage, sortBy }).then((resp) => {
          this.datatable.items = [];
          this.datatable.total = 0;
          console.log(resp);
          if(resp.data) {
            
            this.datatable.items = resp.data.data;
            this.datatable.total =  resp.data.recordsTotal;
          }
          this.resetting = false;
          this.loading = false;
        });
      },

      Reload() {
        this.loadItems(this.datatable.getParams());
      },

    
  
    },
    
  }
  </script>