import { globals } from '../main.js'
class CashTransactionService {
    SaveOrUpdate(cashBook) {
        return globals.$http.post("/CashBook/SaveOrUpdate", cashBook);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('CashBook/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/CashBook/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('CashBook/Delete?id=' + id);
    }
    GetAllByDate(params, search){
        let config = {
            params: { ...params, ...search}
        };
        return globals.$http.get('CashBook/GetAllByDate', config);
    }
}
export default new CashTransactionService();