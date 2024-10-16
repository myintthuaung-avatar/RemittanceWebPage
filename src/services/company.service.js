
import { globals } from '../main.js'
class CompanyService{
    
  SaveOrUpdate(company) {
    return globals.$http.post("/Company/SaveOrUpdate", company);
  }
  GetAll(params, search) {
    let config={          
      params: { ...params, ...search }
    };
    return globals.$http.get('Company/GetAll', config);
  }
  GetById(id)
  {
      return globals.$http.get('/Company/GetById?id='+id);
  }
  
  Delete(id)
      {
       return globals.$http.delete('Company/Delete?id='+ id);
      }

}
export default new CompanyService();