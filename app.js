// 即時関数で囲う・グローバル汚染を防ぐ
(() => {
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLength = $nav.length;

  // 初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  const handleClick = (e) => {
    // aタグのリンクを無効にする
    e.preventDefault();

    // クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetValue = $this.dataset.nav;
    
    // 対象外のnav, contentを全てリセットする
    let index = 0;
    while(index < navLength) {
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    // 対象のコンテンツをアクティブ化する
     $tab.querySelectorAll('[data-content="' + targetValue + '"]')[0].style.display = 'block';
     $nav[targetValue].classList.add(ACTIVE_CLASS);
     
  };


  // 全nav要素に対して関数を呼び出す・発火
  let index = 0;
  while(index < navLength) {
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }
  

})();