
function getpassword(){
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#*%!^+$";

    let passlen= 8;

    let password="";

    for( let i = 0; i <= passlen;i++){
        let randomnum = Math.floor(Math.random() * char.length);
        
        password += char.substring(randomnum,randomnum + 1);

    }
    document.getElementById("screen").value = password;

}