import { getPhotos } from './data.js';
import { renderThumbnails } from './thumbnail.js';
import { initFilter } from './filter.js';
import './form.js';

const loadedPictures = getPhotos();
renderThumbnails(loadedPictures);
initFilter(loadedPictures, renderThumbnails);
