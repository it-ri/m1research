window.addEventListener('load', function () {
  var right_pages = document.getElementsByClassName('page-area js-page-area align-right');
  var left_pages = document.getElementsByClassName('page-area js-page-area align-left');
  var text = document.getElementsByClassName('episode-header-title');
    console.log(document.getElementsByClassName('episode-header-title')[0].innerHTML);


  add_link();

  for (var i = 0; i < right_pages.length; i++) {
    console.log("page:" + i);
    right_pages[i].addEventListener('click', { page: i,r_length:right_pages.length,l_length:left_pages.length, handleEvent: sayHello });
  }

  for (var s = 0; s < left_pages.length; s++) {
    console.log("page:" + s);
    left_pages[s].addEventListener('click', { page: s, l_length:left_pages.length,r_length:right_pages.length, handleEvent: sayHello2 });
  }
});

function add_link(){
  var parent = document.getElementsByClassName('viewer-colophon-next-episode');
  var top_page_link = document.getElementsByClassName('top-link js-viewer-top-link');
  var new_element = document.createElement('a');
  var new_br = document.createElement('br');
  var new_br2 = document.createElement('br');
  new_element.href="https://docs.google.com/forms/d/e/1FAIpQLSdmSdb5SNOMXmgiTudEU_biQrlocTLIMzPnBJlGMgE04p85rA/viewform?entry.609654337="+document.getElementsByClassName('episode-header-title')[0].innerHTML;
  new_element.target="_blank";
  new_element.appendChild(document.createTextNode("クリックしてアンケートに回答してください\n"));
  var rtn = parent[0].insertBefore(new_element, top_page_link[0]);
  var rtn2 = parent[0].insertBefore(new_br, top_page_link[0]);
  var rtn3 = parent[0].insertBefore(new_br2, top_page_link[0]);
  console.log(rtn,rtn2,rtn3); 
}


function sayHello(page,r_length,l_length) {
  if(this.page>=this.r_length-1){
    if(r_length!=l_length){
    //最後のページ
    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSdmSdb5SNOMXmgiTudEU_biQrlocTLIMzPnBJlGMgE04p85rA/viewform?entry.609654337="+document.getElementsByClassName('episode-header-title')[0].innerHTML);
    }
  }else{
    console.log(this.r_length);
  console.log("right page click(あなたから見て左)");
  // これはタイトルタグの中身だから連載作品の時はこっちの方がいいよね
  var title =document.querySelector(`title`).innerText;
  title=title.replace(/\| .*/,"");
  alert("タイトルは"+title);
  
  //alert(document.querySelector(`title`).innerText+":左側の" + this.page + "ページ目");
  //chrome.extension.getURL("popup.html")でいけそうだけど拡張機能にブロックされてひらけない
  window.open("https://ito.nkmr.io/chrome_ex/popup.php?name="+title+"&page=r"+this.page, null, 'toolbar=no,menubar=no,location=no,resizable=no,scrollbars=no,status=no,top=300,left=300,width=300,height=500');
  //window.open("https://ito.nkmr.io/chrome_ex/popup.php?name="+document.getElementsByClassName('episode-header-title')[0].innerHTML+"&page=r"+this.page, null, 'toolbar=no,menubar=no,location=no,resizable=no,scrollbars=no,status=no,top=300,left=300,width=300,height=500');
  }
}

function sayHello2(page,l_length,r_length) {
  if(this.page>=this.l_length-1){
    if(r_length==l_length){
      // window.open("https://docs.google.com/forms/d/e/1FAIpQLSdmSdb5SNOMXmgiTudEU_biQrlocTLIMzPnBJlGMgE04p85rA/viewform?entry.609654337="+document.getElementsByClassName('episode-header-title')[0].innerHTML);
    }
  }else{
  console.log("left page click(あなたから見てみぎ)");
  //alert("右側の" + this.page + "ページ目");
  //window.open("http://ito.nkmr.io/chrome_ex/send_tag_popup.html?name="+document.getElementsByClassName('episode-header-title')[0].innerHTML+"&page=l"+this.page, null, 'top=100,left=100,width=300,height=400');
  //上のはhtmlでやってた頃のURL
  // これはタイトルタグの中身だから連載作品の時はこっちの方がいいよね
  var title =document.querySelector(`title`).innerText;
  title=title.replace(/\| .*/,"");
  alert("タイトルは"+title);
  
  window.open("https://ito.nkmr.io/chrome_ex/popup.php?name="+title+"&page=r"+this.page, null, 'toolbar=no,menubar=no,location=no,resizable=no,scrollbars=no,status=no,top=300,left=300,width=300,height=500');
  //window.open("https://ito.nkmr.io/chrome_ex/popup.php?name="+document.getElementsByClassName('episode-header-title')[0].innerHTML+"&page=l"+this.page, null, 'top=100,left=100,width=300,height=500');
  }
}
