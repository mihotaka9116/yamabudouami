// 画面の中に要素が入ってきたら処理をする（Intersection Observer）
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 画面内に入ったら .is-show クラスを付与
      entry.target.classList.add('is-show');
      
      // 一度表示されたら監視をやめる
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: '0px -50px', // 左右少し内側で反応するように調整
  threshold: 0.1 // 10%見えたら実行
});

// .js-fadein がついた要素をすべて監視する
const fadeElements = document.querySelectorAll('.js-fadein');
fadeElements.forEach((el) => {
  observer.observe(el);
});
