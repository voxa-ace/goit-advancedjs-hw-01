import { images } from './images.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(images);

galleryContainer.innerHTML = galleryMarkup; // Використовуємо innerHTML для запобігання дублюванню

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
