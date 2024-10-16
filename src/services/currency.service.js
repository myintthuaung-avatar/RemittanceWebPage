import { globals } from '../main.js'
class CurrencyService {
    SaveOrUpdate(currency) {
        return globals.$http.post("/Currency/SaveOrUpdate", currency);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('Currency/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/Currency/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('Currency/Delete?id=' + id);
    }
}
export default new CurrencyService();