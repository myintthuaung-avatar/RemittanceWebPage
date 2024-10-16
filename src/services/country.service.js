import { globals } from '../main.js'
class CountryService {
    SaveOrUpdate(country) {
        return globals.$http.post("/Country/SaveOrUpdate", country);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('Country/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/Country/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('Country/Delete?id=' + id);
    }
}
export default new CountryService();