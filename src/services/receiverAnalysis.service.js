import { globals } from '../main.js'
class ReceiverAnalysisService{
    GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/Receiver_Analysis/GetAll', config);
      }
      DownLoadReport(params, search)
      {
        let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/Receiver_Analysis/ExportExcel', config);
      }
}
export default new ReceiverAnalysisService();