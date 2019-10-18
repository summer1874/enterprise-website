function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var lang = getCookie('lang')
var di18n = new DI18n({
  locale: lang,
  isReplace: true,
  messages: {
    en: {
      homeTile: '赋能全球供应链和商家来为全世界消费者带来真正的价值en'
    },
    zh: {
      homeTile: '赋能全球供应链和商家来为全世界消费者带来真正的价值zh'
    }
  }
})
