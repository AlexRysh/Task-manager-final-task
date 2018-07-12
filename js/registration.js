'usestrict'

document.querySelector('.registration-form__submit-btn').addEventListener('click', userCreate);

function User(sMail, sLogin, sPassword, sRole){
	user = this;
	user.MAIL =  sMail;
	user.login = sLogin;
	user.password = sPassword;
	user.role = sRole;
} 

function userCreate(){
	var mail = document.querySelector('.registration-form__e-mail').value,
		login = document.querySelector('.registration-form__login').value,
		password = document.querySelector('.registration-form__password').value;
	if(localStorage.getItem('UserList') === undefined){
		localStorage.setItem('UserList', []);
	}else{
		for(var i = 0; i < userList.length; i++){
			if (mail === userList[i].MAIL) {
				return alert('user with this mail is already registred');
			}
			if (login === userList[i].login) {
				return alert('user with the same login is already registred');
			}
			localStorage.UserList.push(new User(mail, login, password, 'role'));
		}
	}
	alert(localStorage);
}