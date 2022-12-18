async function fetchImages(inputedValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY_API = `29559865-360b254a5abc6663dbbd46c59`;
  const params = `?key=${KEY_API}&q=${inputedValue}&image_type=photo&orientation=horizontal&safesearch=true`;

  const FINAL_URL = `${BASE_URL + params}`;

  try {
    fetch(FINAL_URL)
      .then(response => response.json())
      .then(images => console.log(images));
  } catch (error) {
    console.log(error);
  }
}

export { fetchImages };
