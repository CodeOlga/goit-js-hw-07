import { galleryItems } from './gallery-items.js';
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
      `;
    })
    .join('');
}

//library
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
