'use strict';

{
  // career部分のアニメーション
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });




  // production-record部分のアニメーション
  const open_2 = document.getElementById('open-2');
  const close_2 = document.getElementById('close-2');
  const modal_2 = document.getElementById('modal-2');
  const mask_2 = document.getElementById('mask-2');

  open_2.addEventListener('click', () => {
    modal_2.classList.remove('hidden-2');
    mask_2.classList.remove('hidden-2');
  });







}