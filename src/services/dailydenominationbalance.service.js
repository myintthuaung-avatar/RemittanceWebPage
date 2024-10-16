import { globals } from '../main.js'
class DailyDenominationBalanceService{
    GetAll(params, search){
        let config={          
            params: { ...params, ...search }
          };
          return globals.$http.get('/DailyDenominationBalance/GetAll', config);
    }
}
export default new DailyDenominationBalanceService();