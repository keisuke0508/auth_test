export default class LineAuth {
  constructor() {
    this.authButtonSetting();
  }

  authButtonSetting() {
    $("#js-lineAuthButton").on("click", function(){
      location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1617118616&redirect_uri=http://localhost:5000/linetest&state=12345abcde&scope=openid%20profile"
    });
  }
}
