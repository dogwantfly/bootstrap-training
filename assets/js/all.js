"use strict";

var title = document.querySelector('title');

switch (title.textContent) {
  case "首頁":
    document.querySelector('.nav-link').classList.remove('active');
    document.querySelector('.nav-link[href="index.html"]').classList.add('active');
    break;

  case "產品頁":
    document.querySelector('.nav-link').classList.remove('active');
    document.querySelector('a[href="products.html"]').classList.add('active');
    break;

  case "登入":
    document.querySelector('.nav-link').classList.remove('active');
    document.querySelector('a[href="login.html"]').classList.add('active');
    break;

  case "購物車":
    document.querySelector('.nav-link').classList.remove('active');
    document.querySelector('.nav-link[href="cart.html"]').classList.add('active');
    break;
} // const triggerTabList = [].slice.call(document.querySelectorAll('#receiptType button'))
// if (triggerTabList.length) {
//   const triggerEReceipt = document.querySelector('#receiptType button[data-bs-target="#electronicReceipt"]')
//   // bootstrap.Tab.getInstance(triggerEReceipt).show()
//   const triggerReceipt = document.querySelector('#receiptType button[data-bs-target="#receipt"]')
//   // bootstrap.Tab.getInstance(triggerReceipt).show()
// }
//# sourceMappingURL=all.js.map
