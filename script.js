// 画面の中に要素が入ってきたら処理をする（Intersection Observer）
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 画面内に入ったら .is-show クラスを付与
      entry.target.classList.add('is-show');
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 // 20%見えたら実行
});

// .js-fadein がついた要素をすべて監視する
const fadeElements = document.querySelectorAll('.js-fadein');
fadeElements.forEach((el) => {
  observer.observe(el);
});

window.addEventListener('scroll', function() {
  const fadeins = document.querySelectorAll('.js-fadein');
  for (let i = 0; i < fadeins.length; i++) {
    const rect = fadeins[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeins[i].classList.add('is-show');
    }
  }
});
