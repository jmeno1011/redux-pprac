import axios from "axios";

// 인스턴스를 만들어 두면 새로운 API 서버를 사용할때 편리할 수 있다.
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});
// https://jsonplaceholder.typicode.com/todos
/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  instance.defaults.baseURL = 'https://external-api-server.com/' 
  // 헤더 설정
  instance.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/

export default instance;
