import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const fecthData = async (urlAPI) => {
  const response = await fetch(urlAPI);
  const data = await response.json();
  return data;
};

const anotherF = async (urlAPI) => {
  try {
    const products = await fecthData(`${urlAPI}/products`);
    const product = await fecthData(`${urlAPI}/products/${products[0].id}`);
    const category = await fecthData(
      `${urlAPI}/categories/${product.category.id}`
    );

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

anotherF(API);

const runcode = async () => {
  const url = "https://domain-api-com";

  try {
    const data = await fetch(url);
    if(!data){
        throw new Error('hola')
    }
  } catch (error) {
    console.log("API Not Found");
  }
};

runcode();
