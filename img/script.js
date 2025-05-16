// 「.menu」内のLi要素のうち.sub-menuを持つものを取得
const menuItems = document.querySelectorAll(".menu li:has(> .sub-menu)");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // aタグにリンクがある際、サブメニューを開くだけなら画面遷移しないようにしたい
    e.preventDefault();

    // <li>内の.sub-menu取得
    const subMenu = item.querySelector(".sub-menu");
    if (subMenu) {
      // .activeクラス ON/OFF で表示/非表示切り替え
      subMenu.classList.toggle(active);
    }
  });
});
