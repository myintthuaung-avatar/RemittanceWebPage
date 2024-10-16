export default class CashTransaction {
    id = 0;
    transaction_no = '';
    transaction_date = new Date(new Date().setDate(new Date().getDate()));
    closingDate="";
    amount = 0;
    description = "";
    account_id = null;
    cashbooktype_id = null;
    currency_id = null;
    constructor() { }

}