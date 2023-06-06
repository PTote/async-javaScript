const API = "https://jsonplaceholder.typicode.com/photos";


document.getElementById('tester')?.addEventListener('click', function() {
  getProducts(API);
})


const fetchData = async (urlAPI) => {
  const response = await fetch(urlAPI);
  const data = await response.json();
  return data;
};

const getProducts = async (urlAPI) => {
  const content = null || document.getElementById("content");
  let view = "";


  try {
    const photos = await fetchData(urlAPI);
    const arrValues = getRandomValues(photos);


    for (let arrValue of arrValues) {
      view += `
      <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${photos[arrValue].url}" alt="${photos[arrValue].title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-center">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              Number id: ${photos[arrValue].id}
            </h3>
          </div>
        </div>
      `;

      if (content !== null) {
        content.innerHTML = view;
      }
    }


  } catch (error) {
    console.log(error.status);
    view += `
      <div class="group relative">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
            <span>Something is wrong... please refresh your page</span>
          </div>
        </div>
      `;

      if (content !== null) {
        content.innerHTML = view;
      }
  }
};

const getRandomValues = (photos) => {  
  let arrPhotos = [];

  for (let index = 0; index < 10; index++) {
    let value = Math.floor(Math.random() * 100)
    arrPhotos.push(value);
  }

  return arrPhotos;

};

getProducts(API);

