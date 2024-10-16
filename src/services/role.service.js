import { globals } from '../main.js'
class RoleService{
    SaveOrUpdate(role) {
        return globals.$http.post("/Role/SaveOrUpdate", role);
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('Role/GetAll', config);
    }
    GetById(id) {
        return globals.$http.get('/Role/GetById?id=' + id);
    }

    Delete(id) {
        return globals.$http.delete('Role/Delete?id=' + id);
    }
}
export default new RoleService();