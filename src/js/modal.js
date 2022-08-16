// Original
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const refs = {
    // openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    buttons: document.querySelectorAll('[data-button]'),
    backdrop: document.querySelector('.backdrop'),
    modalsContent: document.querySelectorAll('[data-modal]'),
  };

  refs.buttons.forEach(button => {
    button.addEventListener('click', e => {
      const modalToOpenName = e.currentTarget.dataset.button;
      openModal(modalToOpenName);
    });
  });

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function openModal(modalName) {
    refs.modalsContent.forEach(modalContent => {
      if (modalName === modalContent.dataset.modal) {
        document.body.classList.toggle('modal-open');
        modalContent.classList.toggle('is-hidden');
        refs.backdrop.classList.toggle('is-hidden');
      }
      document.addEventListener('keydown', closeModalByEscape);
    });
  }

  function closeModal() {
    document.body.classList.toggle('modal-open');
    refs.backdrop.classList.toggle('is-hidden');
    refs.modalsContent.forEach(el => {
      if (!el.classList.contains('is-hidden')) {
        el.classList?.toggle('is-hidden');
      }
      document.removeEventListener('keydown', closeModalByEscape);
    });
  }

  function onBackdropClick(e) {
    const isBackdrop = e.currentTarget === e.target;
    if (isBackdrop) {
      closeModal();
    }
  }

  function closeModalByEscape(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }
})();
