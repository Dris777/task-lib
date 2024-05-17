import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
 import "simplelightbox/dist/simple-lightbox.min.css";
import images from './data.js';
let gallery = new SimpleLightbox('.gallery .gallery-link')

const ref ={
  gallery:document.querySelector('.gallery')
}
function makeMarkup(array){
 return array.map(({preview,original,description})=>`
<li class="gallery-item">
\t<a class="gallery-link" href="${original}">
\t\t<img
\t\t\tclass="gallery-image"
\t\t\tsrc="${preview}"
\t\t\talt="${description}"
\t\t\t/>
\t</a>
</li>
`).join(' ')
}
ref.gallery.innerHTML= makeMarkup(images)

gallery.on('show.simplelightbox',() => {

  console.log('azazza')
})

console.log(gallery)
gallery.open('.gallery-link')

document.addEventListener("DOMContentLoaded", function() {
  var lightbox = new SimpleLightbox('.gallery .gallery-link',
    {
      captionSelector:'img',
      captionsData:'alt',
      captionDelay:250,
      close:false
    // Optional configuration options
  });
});

