import { globals } from '../main.js'
class CustomerAnalysisService{
    GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/Customer_Analysis/GetAll', config);
      }
      DownLoadReport(params, search)
      {
        let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/Customer_Analysis/ExportExcel', config);
      }
}
export default new CustomerAnalysisService();