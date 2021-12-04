window.addEventListener('load', function () {
  var right_pages = document.getElementsByClassName('page-area js-page-area align-right');
  var text = document.getElementsByClassName('episode-header-title');
    console.log(document.getElementsByClassName('episode-header-title')[0].innerHTML);


  for (var i = 0; i < right_pages.length; i++) {
    console.log("page:" + i);
    right_pages[i].addEventListener('click', { page: i, handleEvent: sayHello });
  }

  var left_pages = document.getElementsByClassName('page-area js-page-area align-left');
  for (var s = 0; s < left_pages.length; s++) {
    console.log("page:" + s);
    left_pages[s].addEventListener('click', { page: s, handleEvent: sayHello2 });
  }
});


function sayHello(page) {
  console.log("right page click(あなたから見て左)");
  // console.log(Width[this.page]);
  //  alert(document.getElementsByClassName('episode-header-title')[0].innerHTML+":左側の" + this.page + "ページ目");
  //chrome.extension.getURL("popup.html")でいけそうだけど拡張機能にブロックされてひらけない
  //window.open("http://ito.nkmr.io/chrome_ex/send_tag_popup.html?name="+document.getElementsByClassName('episode-header-title')[0].innerHTML+"&page=l"+this.page, null, 'top=100,left=100,width=300,height=400');
  window.open("https://ito.nkmr.io/chrome_ex/popup.php?name="+document.getElementsByClassName('episode-header-title')[0].innerHTML+"&page=r"+this.page, null, 'toolbar=no,menubar=no,location=no,resizable=no,scrollbars=no,status=no,top=300,left=300,width=300,height=500');
 }

function sayHello2(page) {
  console.log("left page click(あなたから見てみぎ)");
  //alert("右側の" + this.page + "ページ目");
  //window.open("http://ito.nkmr.io/chrome_ex/send_tag_popup.html?name="+document.getElementsByClassName('episode-header-title')[0].innerHTML+"&page=l"+this.page, null, 'top=100,left=100,width=300,height=400');
  //上のはhtmlでやってた頃のURL
  window.open("https://ito.nkmr.io/chrome_ex/popup.php?name="+document.getElementsByClassName('episode-header-title')[0].innerHTML+"&page=l"+this.page, null, 'top=100,left=100,width=300,height=500');
}
