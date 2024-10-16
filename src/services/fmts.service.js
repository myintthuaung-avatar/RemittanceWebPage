import { globals } from "../main.js";
class FMTSService{
    SaveOrUpdate(fmts) {
      window.console.log(fmts);
        return globals.$http.post("Fmts/SaveOrUpdate", fmts);
      }
      GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/Fmts/GetAll', config);
      }
      GetAllForBOTReport(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/Fmts/GetAllForBOTReport', config);
      }
      GetById(id)
      {
          return globals.$http.get('/Fmts/GetById?id='+id);
      }
      
      Delete(id)
      {
        return globals.$http.delete('/Fmts/Delete?id='+ id);
      }
      DownLoadReport(params, search)
      {
        let config={          
          params: { ...params, ...search },
          responseType: 'blob'
        };
        return globals.$http.get('/Fmts/GetAllForBOTReportDownload', config);
      }

}
export default new FMTSService();