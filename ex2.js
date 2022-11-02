/*let errors = [];
function checkValidity(input){
    let validity = input.validity;
    if (validity.valueMissing){
        errors.push('Поле' + input.placeholder + 'не заполнено');
    }
    if(validity.patternMismatch){
        errors.push('Неверный формат заполнения');
    }
    if(validity.rangeOverflow){
        let max = getAttributeValue(input, 'max');
        errors.push('Максимальное значение не может быть больше чем' + max);
    }
    if (validity.rangeUnderflow){
        let min = getAttributeValue(input, 'min');
        errors.push('Минимальное значение не может быть больше чем' +min);
    }
}

function checkAll(){
    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs){
        checkValidity(input);
    }
    document.getElementById('errorMessage').innerHTML = errors.join('.<br>');
}*/
function check (){
    let surname = document.getElementById("name");
    let name = document.getElementById("surname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phonenumber = document.getElementById("phonenumber");
    
    document.getElementById('errorMessage').innerHTML="";
    
    if (name.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Имя <br>";
    }
    
    if (surname.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Фамилия <br>";
    }
    
    if (email.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Логин <br>";
    }
    
    if (password.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Пароль <br>";
    }
    
    if (phonenumber.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Номер телефона <br>";
    }
    
    if (name.value!=''){
    document.getElementById('welcome')
    alert (`Hello, ${name.value}!`);
            }
        
    }
    
    function ValidMail() {
     var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
     var valid = re.test(myMail);
     if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
        }
        postButton.onclick = function(e){
            e.preventDefault();
            let user = {
                name:document.getElementById("name").value,
                surname:document.getElementById("surname").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
                phonenumber:document.getElementById("phonenumber")
            }
            console.log(user);
            fetch("https://httpbin.org/post",
            {
                method:'POST',
                body:JSON.stringify(user),
                headers:{
                    'Content-Type':'application/json;charset=utf-8'
                },
            })
            .then(response=>response.json())
            .then(user=>{
                console.log(user);
            })
            .catch(error=>console.log(error));
        }   