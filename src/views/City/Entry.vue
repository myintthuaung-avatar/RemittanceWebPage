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
                                            @click="onCountryChange()" :rules="countryrule"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <label class="font-weight-regular">State Division<span
                                                class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-autocomplete v-model="model.state_division_id" item-title='text' clearable
                                            this.statedivisionlist item-value='value' variant="outlined"
                                            density="compact" :items="statedivisionlist"
                                            :rules="staterule"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <label class="font-weight-regular">Name<span class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-text-field v-model="model.name" variant="outlined" density="compact"
                                            :rules="namerule"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="9">
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
import Model from "@/models/city.js";
import Service from "@/services/city.service.js";
import DropDownService from "@/services/dropdown.service.js";
export default {
    data() {
        return {
            formname: '',
            dialog: false,
            model: new Model(),
            countrylist: [],
            statedivisionlist:[],
            countryrule: [(v) => !!v || "Please Select Country !"],
            staterule: [(v) => !!v || "Please Select State !"],
            namerule: [(v) => !!v || "Please Fill city Name !"],
        }
    },
    watch: {
        'model.country_id'(val) {
            if (val != null) {
                DropDownService.GetStateDivisionByCountry(val).then((result) => {
                    this.statedivisionlist = result.data;
                })
            }
        },
    },

    methods: {

        Show(fname) {
            this.dialog = true;
            if (fname == "new") {
                this.formname = "City Entry";
            } else {
                this.formname = "Edit City Entry";
            }
        },
        ValidateModel() {
            return this.$refs.form.validate();
        },
        onCountryChange() {
            this.model.state_division_id = null;
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
            this.model.name = "";
            this.model.state_division_id = null;
            this.model.country_id = null;
            this.dialog = false;
        },
        ClearCancel() {
            //this.model = [];
            this.model.name = "";
            this.model.state_division_id = null;
            this.model.country_id = null;
            this.transaction_daterule = false;
        },
    },
    created() {
        DropDownService.GetCountryList().then((result) => {
            this.countrylist = result.data;
        })
        DropDownService.GetStateDivisionList().then((result) => {
            this.statedivisionlist = result.data;
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
    text-align: right;
}

.font-weight-regular {
    font-size: 14px;
}

.v-text-field.v-text-field--enclosed {
    font-weight: 500;
}
</style>