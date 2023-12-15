import axios from "axios";
import { API_PATHS } from "../utils/constants/api.contants";

class visitorSevice {
  static visitorLogin(item) {
    return axios.post(API_PATHS.visitorslogin, item).then((response) => {
      if (response.data) {
    
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }


  static getCurrentAffairs(id) {
    return axios.get(API_PATHS.getcurrentAffairs + "?visitorId="+ id).then((response) => {
      if (response.data) {
        
      
      }
      return response.data;
    });
  }
}

  export default visitorSevice;