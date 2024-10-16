<template>
    <div>
        <v-dialog persistent v-model="dialog" width="60%">
            <v-card>
                <v-toolbar dark color="rgb(0 208 250)">
                    <v-toolbar-title dark>{{ formname }}</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-btn @click.stop="ClearData()" icon>
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
                    <v-col cols="12" md="12">
                        <v-row>
                            <!-- <v-card flat> -->
                            <v-col cols="12" md="1"></v-col>
                            <v-col cols="12" md="10" class="mt-6">
                                <v-row dense>
                                    <v-col cols="12" md="6">
                                        <v-row dense>
                                            <v-col cols="12" md="6"><label class="font-weight-regular">Code<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="6"><v-text-field v-model="model.code" item-title='text'
                                                    item-value='value' variant="outlined" density="compact"
                                                    :rules="coderule"></v-text-field></v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-row dense>
                                            <v-col cols="12" md="6"><label class="font-weight-regular">Nature<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="6"><v-autocomplete v-model="model.nature"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :items="naturelist"
                                                    :rules="naturerule"></v-autocomplete></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-row dense>
                                            <v-col cols="12" md="3"><label
                                                    class="font-weight-regular">Description</label></v-col>
                                            <v-col cols="12" md="9">
                                                <!-- <v-textarea label="Description" v-model="model.description"
                                                    row-height="25" rows="3" variant="outlined" auto-grow shaped
                                                    :rules="descrule"></v-textarea> -->
                                                <v-textarea :rules="descrule" placeholder="Enter Description"
                                                    v-model="model.description" counter></v-textarea>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12">
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
                            <v-col cols="12" md="1"></v-col>
                        </v-row>
                        <!-- </v-card> -->
                    </v-col>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Model from "@/models/cashBookType.js";
import Service from "@/services/cashBookType.service.js";
import DropDownService from "@/services/dropdown.service.js";
export default {
    data() {
        return {
            formname: '',
            dialog: false,
            model: new Model(),
            naturelist: ["+","-"],
            statedivisionlist: [],
            coderule: [(v) => !!v || "Please Fill Code !"],
            naturerule: [(v) => !!v || "Please Select State !"],
            descrule: [(v) => !! v || "Please Fill Description !"]
        }
    },

    methods: {

        Show(fname) {
            this.dialog = true;
            if (fname == "new") {
                this.formname = "Cash Book Type Entry";
            } else {
                this.formname = "Edit Cash Book Type Entry";
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
            this.model.code = '';
            this.model.description = '';
            this.model.nature = '';
            this.dialog = false;
        },
        ClearCancel() {
            //this.model = [];
            this.model.code = '';
            this.model.description = '';
            this.model.nature = '';
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