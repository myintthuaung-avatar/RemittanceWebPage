export default class CustomerInfo{
    id=0;
    remittance_date= new Date(new Date().setDate(new Date().getDate()));
    remittance_no="";
    sender_customer_type_id= null;
    receiver_customer_type_id = null;
    //identity_type_id=null;
    //channel_id=null;
    purpose_transaction_id= null;
    network_code_id= null;
    constructor(){}
}