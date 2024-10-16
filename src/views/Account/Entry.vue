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
                                        <label class="font-weight-regular">Account No<span
                                                class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-text-field v-model="model.account_no" variant="outlined" density="compact"
                                            :rules="accountrule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <label class="font-weight-regular">Description<span
                                                class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-text-field v-model="model.description" variant="outlined" density="compact"
                                            :rules="descriptionrule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <label class="font-weight-regular">Company<span
                                                class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-autocomplete v-model="model.company_id" item-title='text' item-value='value'
                                            variant="outlined" density="compact" :items="companylist"
                                            @click="onCompanyChange()" :rules="companyrule"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <label class="font-weight-regular">Department<span
                                                class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-autocomplete v-model="model.department_id" item-title='text'
                                            item-value='value' variant="outlined" density="compact"
                                            :items="departmentlist" :rules="departmentrule"></v-autocomplete>
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
import Model from "@/models/account.js";
import Service from "@/services/account.service.js";
import DropDownService from "@/services/dropdown.service.js";
export default {
    data() {
        return {
            formname: '',
            dialog: false,
            model: new Model(),
            companylist: [],
            departmentlist: [],
            companyrule: [(v) => !!v || "Please Select Company !"],
            departmentrule: [(v) => !!v || "Please Select Department !"],
            accountrule: [(v) => !!v || "Please Fill Account No !"],
            descriptionrule: [(v) => !!v || "Please Fill Description !"],
        }
    },
    watch: {
        'model.company_id'(val) {
            this.departmentlist = [];
            if (val != null) {
                DropDownService.GetDepartmentList(val).then((result) => {
                    this.departmentlist = result.data;
                })
            }
        }
    },
    methods: {

        Show(fname) {
            this.dialog = true;
            if (fname == "new") {
                this.formname = "Account Entry";
            } else {
                this.formname = "Edit Account Entry";
            }
        },
        ValidateModel() {
            return this.$refs.form.validate();
        },
        onCompanyChange() {
            this.model.department_id = null;
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
            this.model.account_no = "";
            this.model.description = "";
            this.model.company_id = null;
            this.model.department_id = null;
            this.dialog = false;
        },
        ClearCancel() {
            //this.model = [];
            this.model.account_no = "";
            this.model.description = "";
            this.model.company_id = null;
            this.model.department_id = null;
        },
    },
    created() {
        DropDownService.GetCompanyList().then((result) => {
            this.companylist = result.data;
        });

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