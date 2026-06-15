/* 강남 가라오케 퍼펙트 — 공통 스크립트 */
(function () {
  "use strict";

  /* 모바일 햄버거 메뉴 토글 */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open ? "✕" : "☰";
    });
  }

  /* 모바일에서 하위 메뉴 아코디언 토글 */
  var parents = document.querySelectorAll(".nav-menu > li.has-sub > a");
  parents.forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 920px)").matches) {
        e.preventDefault();
        a.parentElement.classList.toggle("open");
      }
    });
  });

  /* FAQ 아코디언 */
  var faqs = document.querySelectorAll(".faq-q");
  faqs.forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var isOpen = item.classList.toggle("open");
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : null;
      q.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  /* 현재 연도 자동 표기 */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* 예약/문의 폼 — 데모용 안내 (백엔드 미연동) */
  var forms = document.querySelectorAll("form[data-demo]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-result");
      if (msg) {
        msg.hidden = false;
        msg.textContent =
          "감사합니다. 접수가 완료되었습니다. 빠른 시간 내 010-3460-8953으로 확인 연락드리겠습니다.";
      }
      form.reset();
    });
  });
})();
