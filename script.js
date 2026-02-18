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

gsap.to(".bar",{
  y:"-100%",
  duration:1,
  stagger:0.15,
  ease:"power2.inOut",
  scrollTrigger:{trigger:".multi-slit", start:"top 80%"}
});

// スクリプトの最後、Observerの設定の下あたりに追加してください
window.addEventListener('load', () => {
  const mv = document.getElementById('mainvisual');
  if (mv) {
    // 0.3秒だけ待ってからアニメーションを開始（少し余裕を持たせる）
    setTimeout(() => {
      mv.classList.add('is-show');
    }, 300);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. メインビジュアルのアニメーションを即座に開始
  const mv = document.getElementById('mainvisual');
  if (mv) {
    // ページ読み込み完了から0.5秒後に実行
    setTimeout(() => {
      mv.classList.add('is-show');
    }, 500);
  }

  // 2. その他のフェードイン（スクロール用）
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, { threshold: 0.1 });

  // js-fadeinクラスがついた要素を監視
  document.querySelectorAll('.js-fadein').forEach((el) => {
    observer.observe(el);
  });

  // --- ハンバーガーメニュー等の他のコードはそのまま下に続けてください ---
});

document.addEventListener('DOMContentLoaded', function() {
  // --- メインビジュアルを即座に動かす ---
  const mv = document.getElementById('mainvisual');
  if (mv) {
    // 0.5秒後にアニメーション開始
    setTimeout(() => {
      mv.classList.add('is-active');
    }, 500);
  }

  // --- その他のフェードイン（About以降用） ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
        // 一度表示されたら監視をやめる（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.js-fadein').forEach((el) => {
    observer.observe(el);
  });

  // （ハンバーガーメニューのコードはそのまま続けてください）
});
