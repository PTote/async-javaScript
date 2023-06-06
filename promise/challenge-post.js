import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

const postData = (urlAPI, data) => {
    return fetch(urlAPI, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
};

const data = {
    "title": "New Product Zapatos Locos Guate",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

postData(`${API}/products`, data)
.then(res => res.json())
.then(data => console.log(data))
.catch( error => console.log(error));

