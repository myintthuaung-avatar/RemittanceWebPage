import { globals } from '../main.js'
class MonthlySOIRemittanceService{
  GetAll(params, search) {
    let config={          
      params: { ...params, ...search }
    };
    return globals.$http.get('/MonthlySOI/GetAll', config);
  }
  DownLoadReport(params, search)
    {
      let config={          
        params: { ...params, ...search },
        responseType: 'blob'
      };
      return globals.$http.get('/MonthlySOI/ExportExcel', config);
    }
}
export default new MonthlySOIRemittanceService();