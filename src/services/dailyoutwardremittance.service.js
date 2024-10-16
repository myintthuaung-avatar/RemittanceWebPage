import { globals } from '../main.js'
class DailyOutWardRemittanceService{
    GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/DailyOutWardRemittance/GetAll', config);
      }
      DownLoadReport(params, search)
      {
        let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/DailyOutWardRemittance/ExportExcel', config);
      }
}
export default new DailyOutWardRemittanceService();