const gridEl = document.querySelector('.grid');
const imgs = [
  './images/ArsdCGv.jpeg',
  './images/LNUXzZF.jpeg',
  './images/vZoqs0P.jpeg',
  './images/eUppgFB.jpeg',
  './images/kgTEVHZ.jpeg',
  './images/OkKwWM9.jpeg',
  './images/s6w2RpD.jpeg',
  './images/SEu9pHo.jpeg',
  './images/vb0uajo.jpeg',
  './images/WAIXTXs.jpeg',
];
function init() {
  const grid = new Masonry(gridEl, {
    // options
    itemSelector: '.grid-item',
  });
  imgs.forEach((img, index) => {
    const imgLoad = new Image();
    imgLoad.src = img;
    imgLoad.onload = function () {
      setTimeout(() => {
        const renderImg = render(img);
        grid.layout();
        grid.appended(renderImg);
        gridEl.append(renderImg);
      }, index * 1000);
    };
  });
}
init();

function render(img) {
  const liEl = document.createElement('li');
  liEl.classList = 'grid-item';
  liEl.innerHTML = ` <img src="${img}" class="grid-img" />`;
  return liEl;
}
