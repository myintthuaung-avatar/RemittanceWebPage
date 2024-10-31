<template>
    <v-dialog persistent v-model="dialog" width="50%">
        <v-card>
            <v-toolbar dark color="rgb(0 208 250)">
                <v-toolbar-title dark>{{ formname }}</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn @click.stop="ClearData()" icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">

                <v-card flat>
                    <v-col cols="12" md="12" class="mt-8">
                        <v-row dense>
                            <v-col cols="12" md="12">
                                <v-row dense>
                                    <v-col cols="12" md="4">
                                        <label class="font-weight-regular">Country<span
                                                class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-autocomplete v-model="model.country_id" item-title='text' item-value='value'
                                            variant="outlined" density="compact" :items="countrylist"
                                            :rules="countryrule"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <label class="font-weight-regular">Name<span class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-text-field v-model="model.name" variant="outlined" density="compact"
                                            :rules="staterule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="9" class="mt-n3">
                                        <v-card-actions class="text-right">
                                            <v-spacer></v-spacer>
                                            <v-btn type="submit" size="small" variant="outlined"
                                                color="primary">Save</v-btn>
                                            <v-btn dark size="small" variant="outlined" color="warning"
                                                @click.stop="ClearCancel()">Clear</v-btn>
                                        </v-card-actions>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-card>

            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
import Model from "@/models/stateDivision.js";
import Service from "@/services/statedivision.service";
import DropDownService from "@/services/dropdown.service.js";
export default {
    data() {
        return {
            formname:'',
            dialog: false,
            model: new Model(),
            countrylist: [],
            countryrule: [(v) => !!v || "Please Select Country !"],
            staterule: [(v) => !!v || "Please Fill State Name !"],
        }
    },

    methods: {

        Show(fname) {
            this.dialog = true;
            if (fname == "new") {
                this.formname = "State Division Entry";
            } else {
                this.formname = "Edit State Division Entry";
            }
        },
        ValidateModel() {
            return this.$refs.form.validate();
        },
        SaveOrUpdate() {
            var vm = this;
            vm.ValidateModel();
            if (vm.valid == true) {
                Service.SaveOrUpdate(vm.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            vm.$root.AlertDialog.Show({ message: message, color: 'success' });
                            vm.$emit("AfterSaved");
                            vm.ClearData();
                        } else {
                            vm.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                    }
                });
            }
        },

        ClearData() {
            this.model.country_id = null ;
            this.model.name = "";
            this.dialog = false;
        },
        ClearCancel() {
            //this.model = [];
            this.model.name = '';
            this.model.country_id = null;
            this.transaction_daterule = false;
        },
    },
     created() {
        DropDownService.GetCountryList().then((result) => {
            this.countrylist = result.data;
        })
    },
}
</script>
<style scoped>
.v-text-field fieldset,
.v-text-field .v-input__control {
    height: 37px;
}

.v-row {
    text-align: right;
}

.v-messages__message {
    text-align: left;
}

.font-weight-regular {
    font-size: 14px;
}

.v-text-field.v-text-field--enclosed {
    font-weight: 500;
}
</style>