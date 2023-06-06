const XmlHtppRequest = require ('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlAPI, callback) => {
    let xhtpp = new XmlHtppRequest();

    xhtpp.open('GET', urlAPI, true, '', '');
    xhtpp.onreadystatechange = (event) => {
        if(xhtpp.readyState === 4){
            if(xhtpp.status === 200){
                callback(null, JSON.parse(xhtpp.responseText));
            } else {
                const error = new Error(`Error ${urlAPI}`);
                return callback(error, null);
            }
        } 
    };

    xhtpp.send('');
};

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
      if (error2) return console.error(error2);
      fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      });
    });
  });