import { globals } from '../main.js'
class TotalInWardOutWardService{
    GetAll(params, search){
        let config={          
            params: { ...params, ...search }
          };
          return globals.$http.get('/TotalInWardOutWard/GetAll', config);
    }
}
export default new TotalInWardOutWardService();