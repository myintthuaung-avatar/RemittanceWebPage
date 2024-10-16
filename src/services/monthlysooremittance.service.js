import { globals } from '../main.js'
class MonthlySOORemittance{
    GetAll(params, search){
        let config={          
            params: { ...params, ...search }
          };
          return globals.$http.get('/MonthlySOO/GetAll', config);
    }
    DownLoadReport(params, search)
    {
      let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/MonthlySOO/ExportExcel', config);
    }
}
export default new MonthlySOORemittance();