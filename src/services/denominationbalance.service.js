import { globals } from '../main.js'
class DenominationBalanceService{
    SaveOrUpdate(company) {
        return globals.$http.post("/DenominationBalance/SaveOrUpdate", company);
      }
      GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('DenominationBalance/GetAll', config);
      }
      GetById(id)
      {
          return globals.$http.get('/DenominationBalance/GetById?id='+id);
      }
      
      Delete(id)
          {
           return globals.$http.delete('DenominationBalance/Delete?id='+ id);
          }
}
export default new DenominationBalanceService();