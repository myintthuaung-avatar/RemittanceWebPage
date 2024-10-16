import { globals } from '../main.js'
//import authHeader from "../auth-header";
class DashboardService{
    GetAllByDate(model){
        let config={
            //headers: authHeader(),
            params:{
                fromdate:model.fromdate,
                todate:model.todate,
            }
        }
        //  window.console.log(model)
        //  let form = new FormData();
        // form.append("fromdate", model.fromdate);
        // form.append("todate",model.todate);
        window.console.log(config);
        return globals.$http.get("/Dashboard/GetAll", config);
        //return axios.get(API_URL+'/SubCategoryCountByAcquisitionType/GetCountByAcquisitionType',config,{ headers: authHeader() });
        
       
    }
}
export default new DashboardService();