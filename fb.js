// Đoạn mã JS sẽ được thực thi sau khi phần HTML đã được tạo
function initializeFBChatPlugin() {
  // Your SDK code
  window.fbAsyncInit = function() {
    FB.init({
      xfbml: true,
      version: 'v18.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

// Đợi cho DOM được tải và phần HTML được tạo
document.addEventListener('DOMContentLoaded', function() {
  // Tạo phần HTML cho chatbox
  var chatboxDiv = document.createElement('div');
  chatboxDiv.id = 'fb-customer-chat';
  chatboxDiv.className = 'fb-customerchat';
  document.body.appendChild(chatboxDiv);

  // Thiết lập thuộc tính cho phần chatbox
  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute('page_id', '106116907844762');
  chatbox.setAttribute('attribution', 'biz_inbox');

  // Gọi hàm để khởi tạo SDK sau khi phần HTML được tạo
  initializeFBChatPlugin();
});
