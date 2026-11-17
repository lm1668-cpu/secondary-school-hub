'use strict';

// 本站沒有分析追蹤或伺服器端表單；工作紙只在瀏覽器列印。
document.querySelectorAll('[data-print]').forEach((button) => {
  button.addEventListener('click', () => window.print());
});

document.querySelectorAll('[data-reset-form]').forEach((button) => {
  button.addEventListener('click', () => {
    const form = document.getElementById(button.dataset.resetForm);
    if (form) {
      form.reset();
      form.querySelector('input, textarea')?.focus();
    }
  });
});
