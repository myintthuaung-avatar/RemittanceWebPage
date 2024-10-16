import { globals } from '../main.js';
class SenderInformationService{
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('SenderInformation/GetAll', config);
    }
    GetById(id){
        window.console.log(id);
        return globals.$http.get("/SenderInformation/GetById?id="+id);
    }
}
export default new SenderInformationService();