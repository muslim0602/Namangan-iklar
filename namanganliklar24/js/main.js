const elModal = document.querySelector('.modal');
const elModalClose = elModal.querySelector('.modal-close');

if (elModalClose) {
  elModalClose.addEventListener('click', function () {
    elModal.classList.remove('modal-open')
  });
}

setTimeout(function () {
  elModal.classList.add('modal-open')

}, 3000);