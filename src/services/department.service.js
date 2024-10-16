import { globals } from "../main.js";
class DepartmentService{
    SaveOrUpdate(company) {
        return globals.$http.post("/Department/SaveOrUpdate", company);
      }
      GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/Department/GetAll', config);
      }
      GetById(id)
      {
          return globals.$http.get('/Department/GetById?id='+id);
      }
      
      Delete(id)
          {
           return globals.$http.delete('/Department/Delete?id='+ id);
          }

}
export default new DepartmentService();