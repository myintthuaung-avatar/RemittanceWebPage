import { globals } from '../main.js'
class CustomerInformationService{
    SaveOrUpdateCustomerInfo(customer) {
        window.console.log(customer);
        return globals.$http.post("/CustomerInformation/SaveOrUpdateCustomerInformation", customer);
    }
    SaveOrUpdateExchangeRate(exchangerate){
        window.console.log(exchangerate);
        return globals.$http.post("/CustomerInformation/SaveOrUpdateExchangeRate", exchangerate);
    }
    SaveOrUpdateDeposit(deposit){
        window.console.log(deposit);
        return globals.$http.post("/CustomerInformation/SaveOrUpdateDeposit", deposit);
    }
    SaveOrUpdateReceiverInformation(receiver){
        window.console.log(receiver)
        return globals.$http.post("/CustomerInformation/SaveOrUpdateReceiverInformation", receiver);
    }
    SaveOrUpdateSenderInformation(data){
        window.console.log(data)
        let form = new FormData();
        form.append("id", data.id);
        //form.append("customer_id", data.customer_id);
        form.append("first_name", data.first_name);
        form.append("last_name", data.last_name);

        form.append("customer_sender_id", data.customer_sender_id); //From Browse Data

        form.append("identity_type_id", data.identity_type_id); // For NRC
        form.append("nrc_state_division_id", data.nrc_state_division_id);
        form.append("nrc_township_id", data.nrc_township_id);
        form.append("nrc_citizentype_id", data.nrc_citizentype_id);
        form.append("nrc_no", data.nrc_no);

        form.append("nrc_passport", data.nrc_passport);
        form.append("phone_no", data.phone_no);
        form.append("date_birth", data.date_birth);
        form.append("issuse_date", data.issuse_date);
        form.append("expiry_date", data.expiry_date);
        form.append("address_document", data.address_document);
        form.append("email", data.email);
        form.append("business_type_id", data.business_type_id);
        form.append("business_name", data.business_name);
        form.append("occupations", data.occupations);
        form.append("address", data.address);
       
        form.append("country_id", data.country_id);
        form.append("state_division_id", data.state_division_id);
        form.append("city_id", data.city_id);

        form.append("address_work", data.address_work);
        form.append("work_country_id", data.work_country_id);
        form.append("work_state_division_id", data.work_state_division_id);
        form.append("work_city_id", data.work_city_id);


        form.append("nrc_passport_photo", data.nrc_passport_photo);
        form.append("selfie_photo", data.selfie_photo);
        return globals.$http.post("/CustomerInformation/SaveOrUpdateSenderInformation", form);
    }
    SaveOrUpdateWithdraw(data){
        window.console.log(data)
        let form = new FormData();
        form.append("id", data.id);
        //form.append("customer_id", data.customer_id);
        form.append("withdraw_payment_type_id", data.withdraw_payment_type_id);
        form.append("withdraw_payment_id", data.withdraw_payment_id);
        form.append("withdraw_payment_branch_id", data.withdraw_payment_branch_id);
        form.append("withdraw_swift_code", data.withdraw_swift_code);
        form.append("withdraw_account_number", data.withdraw_account_number);
        form.append("withdraw_account_type_id", data.withdraw_account_type_id);
        form.append("withdraw_reference_no", data.withdraw_reference_no);
        form.append("withdraw_reference", data.withdraw_reference);
        form.append("withdraw_company_id", data.withdraw_company_id);
        form.append("withdraw_account_id", data.withdraw_account_id);
        form.append("withdraw_50", data.withdraw_50);
        form.append("withdraw_100", data.withdraw_100);
        form.append("withdraw_200", data.withdraw_200);
        form.append("withdraw_500", data.withdraw_500);
        form.append("withdraw_1000", data.withdraw_1000);
        form.append("withdraw_5000", data.withdraw_5000);
        form.append("withdraw_10000", data.withdraw_10000);
        return globals.$http.post("/CustomerInformation/SaveOrUpdateWithdraw", form);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('CustomerInformation/GetAll', config);
    }
    GetAllForApproverList(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('ApprovedInformation/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/CustomerInformation/GetById?id=' + id);
    }
    DetailById(id){
        return globals.$http.get('/CustomerInformation/DetailById?id=' + id);
    }
    SuperAdminDetailById(id){
        return globals.$http.get('/ApprovedInformation/DetailById?id=' + id);
    }
    Approve(id)
    {
        return globals.$http.post("/CustomerInformation/SaveOrUpdateOpreatorApproved?id="+ id);
    }
    SuperAdminApprove(id){
        return globals.$http.post("/ApprovedInformation/SaveOrUpdateSuperAdminApproved?id="+ id);
    }
    SendData(datalist){
          return globals.$http.post("ApprovedInformation/SendData",datalist);
      }
    Delete(id) {
        return globals.$http.delete('CustomerInformation/Delete?id=' + id);
    }
    Calculation(depositcurrency_id){
        return globals.$http.get('ExchangeRate/Calculation?depositcurrency_id=' + depositcurrency_id);
    }
    DownLoadReport(params, search){
        let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/CustomerInformation/ExportExcel', config);
    }
}
export default new CustomerInformationService();