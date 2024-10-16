import { globals } from '../main.js'
class CityService {
    SaveOrUpdate(city) {
        return globals.$http.post("/City/SaveOrUpdate", city);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('City/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/City/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('City/Delete?id=' + id);
    }
}
export default new CityService();