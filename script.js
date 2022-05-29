'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const modalll = document.querySelector('.modalll').textContent;
console.log(showModal);
const hiddenFun = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
closeModal.addEventListener('click', hiddenFun);
overlay.addEventListener('click', hiddenFun);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      // modal.classList.add('hidden');
      // overlay.classList.add('hidden');
      hiddenFun();
    }
  }
});
