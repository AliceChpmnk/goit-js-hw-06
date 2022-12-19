"use strict";
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGalleryCard = ({ url, alt } = {}) => {
  return `
    <li>
      <img src="${url}" alt="${alt}" width="300px">
    </li>
  `;
}

const galleryItems = images.map(el => makeGalleryCard(el)).join('');

const gallery = document.querySelector('.gallery');
gallery.style.cssText = 'list-style: none; display: flex; justify-content: space-between; padding: 0; margin: 0;';

gallery.insertAdjacentHTML('beforeend', galleryItems);