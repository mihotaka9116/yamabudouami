document.addEventListener('DOMContentLoaded', function() {
  
  // 1. メインビジュアル専用のトリガー
  // ページ読み込み完了から0.5秒後に実行
  const mv = document.getElementById('mainvisual');
  if (mv) {
    setTimeout(() => {
      mv.classList.add('is-active'); // CSSの .is-active と連動
    }, 500);
  }

  // 2. その他のフェードイン（Aboutセクション以降）
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show'); // CSSの .is-show と連動
        observer.unobserve(entry.target); // 一度表示されたら監視終了
      }
    });
  }, { 
    threshold: 0.1 
  });

  // js-fadeinクラスがついた要素を監視
  document.querySelectorAll('.js-fadein').forEach((el) => {
    observer.observe(el);
  });

  // 3. ハンバーガーメニュー
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });

    // メニューリンククリックで閉じる
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        nav.classList.remove('is-active');
      });
    });
  }
});
