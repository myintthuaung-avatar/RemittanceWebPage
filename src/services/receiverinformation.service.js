import { globals } from '../main.js';
class ReceiverInformationService{
    GetAll(params, search) {
        let config = {
            params: { ...params, ...search }
        };
        return globals.$http.get('ReceiverInformation/GetAll', config);
    }
    GetById(id){
        window.console.log(id);
        return globals.$http.get("/ReceiverInformation/GetById?id="+id);
    }
}
export default new ReceiverInformationService();