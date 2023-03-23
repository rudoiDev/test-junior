import * as moduleFunctions from './modules/functions.js';
moduleFunctions.isWebp();

const questionsWrapper = document.querySelector('.questionsWrapper');
const applicationHeading = document.querySelector('.applicationHeading');

questionsWrapper.addEventListener('click', (e) => {
  const clickItem = e.target.closest('.questionsItem');
  if (clickItem) {
    if (clickItem.classList.contains('active')) {
      return;
    } else {
      const questionItems = document.querySelectorAll('.questionsItem');
      [...questionItems].forEach((el) => {
        el.classList.remove('active');
      });
      clickItem.classList.add('active');
      applicationHeading.textContent = clickItem.dataset.info;
    }
  } else {
    return;
  }
});

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
  const clickItem = e.target.closest('.accordion-button');
  if (clickItem) {
    clickItem.disabled = true;
    setTimeout(() => {
      clickItem.removeAttribute('disabled');
    }, 500);
    if (clickItem.classList.contains('active')) {
      clickItem.classList.remove('active');
    } else {
      clickItem.classList.add('active');
    }
  } else {
    return;
  }
});
