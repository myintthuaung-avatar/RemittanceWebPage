import { globals } from '../main.js'
class DailyInWardRemittanceService{
    GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/DailyInWardRemittance/GetAll', config);
      }
      DownLoadReport(params, search)
      {
        let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/DailyInWardRemittance/ExportExcel', config);
      }
}
export default new DailyInWardRemittanceService();