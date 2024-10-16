<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="12">
        <v-card>
          <template v-slot:title>
            FMTS
          </template>

          <v-col>
            <v-toolbar density="compact" color="white" class="mb-2">
              <v-col cols="12" md="2">
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <v-btn size="small" variant="outlined" color="#000080" @click="NewItem" v-bind="props"> New</v-btn>
                  </template>
                  <span class="text-center">Entry</span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" md="4"></v-col>
              <v-col cols="12" md="5">
                <v-card-text>
                  <v-text-field :elevation="0" density="compact" v-model="model.name" variant="solo" label="Search"
                    single-line hide-details clearable @click:clear="ResetFilter"
                    v-on:keyup.enter="Filter"></v-text-field>
                </v-card-text>
              </v-col>
            </v-toolbar>
            <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false
              v-model="selected">

              <template v-slot:[`item.id`]="{ item }">
                <v-btn variant="text" icon size="x-small" @click="EditItem(item)"
                  color="warning"><v-icon>mdi-pencil</v-icon>
                  <v-tooltip activator="parent" location="bottom">Edit</v-tooltip>
                </v-btn>
                <v-btn variant="text" icon size="small" @click="DeleteItem(item)"
                  color="red"><v-icon>mdi-delete-outline</v-icon>
                  <v-tooltip activator="parent" location="bottom">Delete</v-tooltip>
                </v-btn>
              </template>
            </DataTableHelper>
            <Entry @AfterSaved="ResetFilter" ref="EntryModal" />
          </v-col>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
    
    <script>
    
    import Service from "@/services/fmts.service.js";
    import Model from "@/models/fmts.js";
    import DataTableHelper from "@/components/base/DataTableHelper";
    import Entry from "./Entry.vue";
    export default {
      components: {
        DataTableHelper, Entry
      },
    
      data() {
        return {
          excelloading: false,
          loading: true,
          model: new Model(),
          selected: [],
          headers: [
          { title: 'Actions', width:140, key: 'id'},
            { title: 'License No', key: 'license_no',width:220},
            { title: 'Transaction Date', key: 'transaction_date', width:220},
            { title: 'Identity Type', key: 'identity_typename',width:220 },
            { title: 'Account No', key: 'account_no', width:220},
            { title: 'Account Name', key: 'account_name',width:220 },
            { title: 'Institution Code', key: 'accountkeeperinstitutioncode',width:220 },
            { title: 'Currency', key: 'currency_name', width:220},
            { title: 'Country', key: 'country_name',width:220 },
            {title:'Status', key:'status', width:220}

          ],
        };
      },
      
      computed: {
        getUserInfo() {
          return JSON.parse(localStorage.getItem("user"));
        },
        getTableHeaders() {
          let hideColumns = [];
          if(this.showActionButtons === false) {
              hideColumns.push('actions');
          }
          return this.headers.filter((e)=> {
              return !hideColumns.includes(e.value);
          });
        },
    
        getSel() {
          return this.selected.length;
        },
    
       
      },
    
      methods: {
    
        GetAllData(params) {
          this.model.status = -1;
          return Service.GetAll(params, this.model);
        },
    
        Filter() {
          this.$refs.DataTable.Reload(true);
        },
    
        AdvancedFilter() {
          this.$refs.SearchModal.Show(this.model);
        },
    
        AfterAdvancedFilter(model) {
          this.model = model;
          this.$refs.DataTable.Reload(true);
        },
    
        ResetFilter() {
          this.model = new Model();
          this.model.status = -1;
          this.$refs.DataTable.Reload(true);
        },
    
        ShowLoading(val) {
          this.$refs.DataTable.loading = val;
        },
    
        NewItem(){
          this.$refs.EntryModal.Show("new");
        },
    
        EditItem(item){
          var vm = this;
          vm.ShowLoading(true);
          Service.GetById(item.id).then(
              (response)=> {
                window.console.log(response.data)
              vm.$refs.EntryModal.model = response.data;
              vm.$refs.EntryModal.disabled = true;
            
              vm.ShowLoading(false);
              vm.$refs.EntryModal.Show("edit");
          });
        },
    
        DeleteItem(item){
          var vm = this;
          vm.$root.ConfirmBoxModal.open().then(res => {
              if(res) {
                vm.ShowLoading(true);
                  Service.Delete(item.id).then(
                      (response) =>{ 
                          if(response.data){
                              var message = response.data.messages[0];
                              if (response.data.success) {
                                  vm.$root.AlertDialog.Show({ message: message, color: 'success'});
                                  vm.ResetFilter();
    
                              } else {
                                  vm.$root.AlertDialog.Show({ message: message , color: 'error'});
                              }
                          }
                      },
                      (error) => {
                      console.error(error);
                      vm.ShowLoading(false);
                  })
              }
            }); 
        },
        ShowPasswordReset(item) {
          this.$refs.PasswordResetModal.Show(item);
        },
    
      },
    
    };
    </script>
    