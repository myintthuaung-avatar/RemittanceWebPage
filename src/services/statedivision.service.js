import { globals } from '../main.js'
class StateDivisionService {
    SaveOrUpdate(stateDivision) {
        window.console.log(stateDivision)
        return globals.$http.post("/StateDivision/SaveOrUpdate", stateDivision);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('StateDivision/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/StateDivision/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('StateDivision/Delete?id=' + id);
    }
}
export default new StateDivisionService();