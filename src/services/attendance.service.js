
import { globals } from '../main.js'
class AttendanceService{
  SendData(attendance) {
        return globals.$http.post("/Attendance/SendData", attendance);
      }
      GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/Attendance/GetAll', config);
      }

}
export default new AttendanceService();