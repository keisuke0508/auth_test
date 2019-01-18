export default class SignIn {
  constructor() {
    this.facebookAuthButtonSetting();
    this.lineAuthButtonSetting();
  }

  facebookAuthButtonSetting() {
    $("#js-facebookAuthButton").on("click", function(){
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

      window.FB.login(function(response){
        if(response.status === "connected"){
          $.ajax({
            type: 'GET',
            url : '/',
            data: {
              token: response.authResponse.accessToken,
              open_id_type: "facebook"
            }
          });
        }else{
          alert("not connected");
        }
      });
    });
  }

  lineAuthButtonSetting() {
    $("#js-lineAuthButton").on("click", function(){
      location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1617118616&redirect_uri=http://localhost:5000/linetest?open_id_type=line&state=12345abcde&scope=openid"
    });
  }
}
