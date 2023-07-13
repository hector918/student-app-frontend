const API = process.env.REACT_APP_API_URL;
let default_fetch_options = { 
  "Access-Control-Allow-Origin": "*" ,
  "Content-Type": "application/json",
};

function error_handle(error) {
  console.error(error);
}

async function fetch_get(url){
  const body = {
    method: "GET",
    headers: {
      ...default_fetch_options,
    },
    // credentials: "include",
  }
  const ret = await fetch(url, body);
  return await ret.json();
}
////////////////////////////////////////////////////
async function fetchRoot(){
  try {
    return await fetch_get(API);
  } catch (error) {
    error_handle(error);
    return false;    
  }
}
async function fetchStudents(){
  try {
    return await fetch_get(`${API}/students`);
  } catch (error) {
    error_handle(error);
    return false;    
  }
}
////////////////////////////////////////////////////
const entry = {
  fetch_get, fetchRoot, fetchStudents
};
export default entry;