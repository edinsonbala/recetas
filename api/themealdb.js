import app from '@/constants/App';
export const Api = async (url = 'products', method = 'GET', data = {}) => {
    const dataHttp = {
        method: method,
        headers: new Headers({ 'Content-Type': 'application/json' })
    };
    try {
        const response = await fetch(app.baseUrl + url, dataHttp);
        console.log("*****11*****",app.baseUrl + url);
        const json = await response.json();
        return {
            error: "",
            message: "Solicitud exitosa.",
            success: true,
            data: json
        };
    } catch (error) {
        return {
            error: error.message,
            message: "Ocurrió un error al realizar la solicitud.",
            success: false,
            data: []
        };
    }
};
export const Search = async (data={}) => {
  let method="get";
  let url="search.php";
  let body={};
  let queryString = '';
  if (data.parameter) {
      queryString = Object.keys(data.parameter).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data.parameter[key])).join('&');
      url+="?"+queryString;
  }
  const json = await Api(url, method, body);
  return {success:json.success,data:json.data.meals};
}
export const Categories = async (data={}) => {
    let method="get";
    let url="categories.php";
    let body={};
    let queryString = '';
    if (data.parameter) {
        queryString = Object.keys(data.parameter).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data.parameter[key])).join('&');
        url+="?"+queryString;
    }
    const json = await Api(url, method, body);
    return {success:json.success,data:json.data.categories};
}
export const Lookup = async (data={}) => {
    let method="get";
    let url="lookup.php";
    let body={};
    let queryString = '';
    if (data.parameter) {
        queryString = Object.keys(data.parameter).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data.parameter[key])).join('&');
        url+="?"+queryString;
    }
    const json = await Api(url, method, body);
    return {success:json.success,data:json.data.meals[0]};
}