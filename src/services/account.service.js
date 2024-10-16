import { globals } from '../main.js'
class AccountService {
    SaveOrUpdate(account) {
        return globals.$http.post("/Account/SaveOrUpdate", account);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('Account/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/Account/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('Account/Delete?id=' + id);
    }
}
export default new AccountService();