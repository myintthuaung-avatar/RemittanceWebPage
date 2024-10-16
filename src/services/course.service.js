
import { globals } from '../main.js'
class CourseService{
    SaveOrUpdate(township) {
        return globals.$http.post("/course/SaveOrUpdate", township);
      }
    
      GetById(id)
      {
          return globals.$http.get('/course/GetById?id='+id);
      }
    
      Delete(id)
      {
       return globals.$http.delete('/course/Delete?id='+ id);
      }
      GetByIdForDetail(id){
        return globals.$http.get('/course/GetByIdForDetail?id='+id);
      }
    
      GetAll(params, search) {
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/course/GetAll', config);
      }
      GetAllAttendance(params, search){
        let config={          
          params: { ...params, ...search }
        };
        return globals.$http.get('/course/GetAllAttendance', config);
      }

}
export default new CourseService();