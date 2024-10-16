import { globals } from "../main.js";
class ExchangeRateService{
    SaveOrUpdate(exchange_rate) {
      window.console.log(exchange_rate);
        return globals.$http.post("/ExchangeRate/SaveOrUpdate", exchange_rate);
      }
      GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/ExchangeRate/GetAll', config);
      }
      GetById(id)
      {
          return globals.$http.get('/ExchangeRate/GetById?id='+id);
      }
      
      Delete(id)
          {
           return globals.$http.delete('/ExchangeRate/Delete?id='+ id);
          }

}
export default new ExchangeRateService();