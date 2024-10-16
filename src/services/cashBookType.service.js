import { globals } from '../main.js'
class CashBookTypeService {
    SaveOrUpdate(cashBookType) {
        return globals.$http.post("/CashBookType/SaveOrUpdate", cashBookType);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('CashBookType/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/CashBookType/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('CashBookType/Delete?id=' + id);
    }
}
export default new CashBookTypeService();