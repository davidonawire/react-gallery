import apiKey from './config.js';

const parsePhotoURLs = (data) => {
  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  return data.photos.photo.map(photo => {
    let farm_id = photo.farm;
    let server_id = photo.server;
    let photo_id = photo.id;
    let secret = photo.secret;

    let photoURL = `https://farm${farm_id}.staticflickr.com/${server_id}/${photo_id}_${secret}_m.jpg`;

    return { url: photoURL,
             id: photo_id
    }
  });
}

const getPhotos = (searchTerm) => {
  let fetchURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&sort=relevance&safe_search=1&content_type=1&media=photos&per_page=24&format=json&nojsoncallback=1`;

  return fetch(fetchURL)
    .then(response => response.json())
    .then(data => parsePhotoURLs(data))
    .catch(error => {
      console.error('There was an error when fetching photos: ', error);
    })
}

export default getPhotos;