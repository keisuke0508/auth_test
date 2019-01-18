export default class FacebookAuth {
  constructor() {
    this.initializeSDK();
    this.authButtonSetting();
  }

  initializeSDK() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : "1004022183136902",
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.2'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/ja_JP/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  authButtonSetting() {
    $("#js-facebookAuthBtn").on("click", function(){
      window.FB.login(function(response){
        if(response.status === "connected"){
          $.ajax({
            type: 'POST',
            url : '/',
            data: {
              token: response.authResponse.accessToken
            }
          });
        }else{
          alert("not connected");
        }
      });
    });
  }
}
