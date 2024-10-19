import { globals } from '../main.js'

class DropDownService {
  GetRoleList() {
    return globals.$http.get("/Dropdown/GetRole");
  }
  GetCompanyList() {
    return globals.$http.get("/Dropdown/GetCompany");
  }
  GetDepartmentList(company_id) {
    return globals.$http.get("/Dropdown/GetDepartment?company_id="+company_id);
  }
  GetCurrencyList(){
    return globals.$http.get("/DropDown/GetCurrency");
  }
  GetAccountList() {
    return globals.$http.get("/DropDown/GetAccount");
  }
  GetCashBookTypeList() {
    return globals.$http.get("/DropDown/GetAllCashBookType");
  }
  GetCountryList(){
    console.log("test");
    return globals.$http.get("/DropDown/GetCountry");
  }
  GetStateDivisionByCountry(country_id){
    return globals.$http.get("/DropDown/GetStateDivisonByCountry?country_id="+country_id);
  }
  GetStateDivisionList(){
    return globals.$http.get("/DropDown/GetStateDivison");
  }
  GetCityListByStateDivision(state_division_id){
    return globals.$http.get("/DropDown/GetCityByStateDivision?state_division_id="+state_division_id);
  }
  GetPurposeTranscationList(){
    return globals.$http.get("/DropDown/GetTransactionpurpose");
  }
  GetCustomerTypeList(){
    return globals.$http.get("/DropDown/GetCustomerType");
  }
  GetNetworkCodeList(){
    return globals.$http.get("/DropDown/GetNetworkCode");
  }
  GetIdentityTypeList(){
    return globals.$http.get("/DropDown/GetIdentityType");
  }
  GetChannelList(){
    return globals.$http.get("/DropDown/GetChannel");
  }
  GetPaymentTypeList(){
    return globals.$http.get("/DropDown/GetPaymentType");
  }
  GetPaymentList(paymenttype_id){
    return globals.$http.get("/DropDown/GetPayment?paymenttype_id="+paymenttype_id);
  }
  GetPaymentListByCountry(country_id){
    return globals.$http.get("/DropDown/GetPaymentByCountry?country_id="+country_id);
  }
  GetPaymentBranchListByPayment(payment_id){
    return globals.$http.get("/DropDown/GetPaymentBranchByPayment?payment_id="+payment_id);
  }
  GetGetPaymentBranchList(payment_id){
    return globals.$http.get("/DropDown/GetPaymentBranch?payment_id="+payment_id);
  }
  GetAccountTypeList(){
    return globals.$http.get("/DropDown/GetDepositAccountType");
  }
  GetAccountList(){
    return globals.$http.get("/DropDown/GetAccount");
  }
  GetAccountListByCompany(company_id){
    return globals.$http.get("/DropDown/GetAccountByCompany?company_id="+company_id);
  }
  GetCompayList(){
    return globals.$http.get("/DropDown/GetCompany");
  }
  GetGetBusinessTypeList(){
    return globals.$http.get("/DropDown/GetBusinessType");
  }
  GetStateDivisionCode(){
    return globals.$http.get("/DropDown/GetStateDivisionCode");
  }
  GetTownshipCode(state_division_code){
    return globals.$http.get("/DropDown/GetTownshipCode?state_division_code="+state_division_code);
  }
  GetCitizenType(){
    return globals.$http.get("/DropDown/GetCitizenType");
  }
  GetUserList(){
    return globals.$http.get("DropDown/GetUser");
  }
}

export default new DropDownService();
