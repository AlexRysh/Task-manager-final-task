'usestrict'

document.querySelector('.registration-form__submit-btn').addEventListener('click', userCreate());
function User(sMail, sLogin, sPassword, sRole){
	user = this;
	user.MAIL =  sMail;
	user.login = sLogin;
	user.password = sPassword;
	user.role = sRole;
} 

function userCreate(){
	var userList = sessionStorage.getItem('UserList'),
		mail = document.querySelector('.registration-form__e-mail').value,
		login = document.querySelector('.registration-form__login').value
		password = document.querySelector('.registration-form__password').value;
	if(userList === undefined){
		sessionStorage.setItem('UserList', []);
	}else{
		/*for(var i = 0; i < userList.length; i++){
		}*/
	}
	console.log(mail, login, password)
}