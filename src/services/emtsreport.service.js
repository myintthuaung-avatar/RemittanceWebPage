import { globals } from "../main.js";
class EMTSReportService{
      GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/EMTSReport/GetAll', config);
      }
      GetAllForBOTReport(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/EMTSReport/GetAllForBOTReport', config);
      }
      DownLoadReport(params, search)
      {
        let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/EMTSReport/GetAllForBOTReportDownload', config);
      }

}
export default new EMTSReportService();