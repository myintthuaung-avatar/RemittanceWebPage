import { globals } from '../main.js'
class UserService {

  login(user) {
    
    return globals.$http.post("/user/authenticate",
      {
        userName: user.name,
        password: user.password,
      },
    )
      .then((response) => {
        if (response.data.token) {
          var userToken = JSON.stringify(response.data);
          localStorage.setItem("user", userToken);
          globals.$http.defaults.headers.common["Authorization"] = 'Bearer ' + response.data.token;
          globals.$http.defaults.headers["Authorization"] = 'Bearer ' + response.data.token;
          
        }
        return response.data;
      });
  }
  loginwithOTP(user) {
    
    return globals.$http.post("/user/authenticate",
      {
        userName: user.name,
        password: user.password,
        otp:user.otp,
      },
    )
      .then((response) => {
        if (response.data.token) {
          var userToken = JSON.stringify(response.data);
          localStorage.setItem("user", userToken);
          globals.$http.defaults.headers.common["Authorization"] = 'Bearer ' + response.data.token;
          globals.$http.defaults.headers["Authorization"] = 'Bearer ' + response.data.token;
          
        }
        return response.data;
      });
  }


  SaveOrUpdate(user) {
    return globals.$http.post("/user/SaveOrUpdate", user);
  }
  RegisterSaveOrUpdate(user){
    window.console.log(user);
    return globals.$http.post("/user/RegisterSaveOrUpdate", user)
  }
  SendEmail(email){
    return globals.$http.post("/user/SendEmail?email="+ email);
  }
  ResetPassword(user) {
    return globals.$http.post('/user/ResetPassword', user);
  }
  GetById(id)
  {
      return globals.$http.get('/user/GetById?id='+id);
  }
  GetByIdForDetail(id)
  {
      return globals.$http.get('/user/GetByIdForDetail?id='+id);
  }
  Delete(id)
  {
   return globals.$http.delete('/user/Delete?id='+ id);
  }


  GetAll(params, search) {
    let config={          
      params: { ...params, ...search }
    };
    return globals.$http.get('/User/GetAll', config);
  }
  GetAllForStudent(params, search) {
    let config={          
      params: { ...params, ...search }
    };
    return globals.$http.get('/User/GetAllForStudent', config);
  }

  GetLogInUserInfo()
  {
      return globals.$http.get('/user/GetLogInUserInfo');
  }
}

export default new UserService();