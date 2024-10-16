
import { globals } from '../main.js';
class ExcelImportService{
    SaveOrUpdate(excel){
        window.console.log(excel);
        let formData = new FormData();
        formData.append("excel", excel);
         window.console.log(formData);
        return globals.$http.post("/ExcelImport/SaveOrUpdate", formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
            }
        });
    }
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('ExcelImport/GetAll', config);
    }
}
export default new ExcelImportService();