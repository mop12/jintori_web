



// This is a JavaScript file

  
       $(function(){
           var application_key = "YOURAPIKEY";
           var client_key = "YOURCLIENTKEY";
           var ncmb = new NCMB(application_key,client_key);
           
           var user = ncmb.User.getCurrentUser();
           if(user !== null){
               location.href = "./game.html";
           }
         
           $("form").on("submit",function(){
               var username = $("#username").val();
               var password = $("#password").val();
               var color = $("[name=color]:checked").val();
               console.log(color);
               //ログイン
               ncmb.User.login(username,password)
               .then(function(){
                   //ログイン成功
                   
                   //alert("ログイン成功");
                    location.href = "./game.html";
                    
 
               })
               .catch(function(){
                   //ログイン失敗
                   var user = new ncmb.User({
                       userName: username,
                       password: password,
                       color:color
                       
                   });
                   //新規登録
                   user.signUpByAccount()
                   .then(function(){
                         ncmb.User.login(username,password)
                         .then(function(){
                            //alert("新規登録＆ログイン成功");
                            location.href = "./game.html";
               })
              

                   })
               })
               return false;
           });
        });
        

