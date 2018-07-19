'use strict'

document.querySelector('.registration-form__submit-btn').addEventListener('click', userCreate); 

function userCreate(e){
	var mail = document.querySelector('.registration-form__e-mail').value,
		login = document.querySelector('.registration-form__login').value,
		password = document.querySelector('.registration-form__password').value,
		role = document.querySelector('.registration-form__role-choise').value;
			
		e.preventDefault();

		if (role === 'Manager') {
			currentUser = new Manager(mail, login, password);
		}else{
			currentUser = new Developer(mail, login, password);
		}

		function saveUser(){ 
			var userList = JSON.parse(localStorage.getItem('UserList'));
			userList.push({mail: currentUser.getMAIL(), login: currentUser.getLogin(), password: currentUser.getPassword(), id:currentUser.getID(), role: currentUser.getROLE()});
			localStorage.setItem('UserList', JSON.stringify(userList));
		}

		if (localStorage.getItem('UserList') === null){
			localStorage.setItem('UserList', JSON.stringify([]));
			saveUser();
		}else{
			for(var i = 0; i < JSON.parse(localStorage.getItem('UserList')).length; i++){
				if (JSON.parse(localStorage.getItem('UserList'))[i].mail === currentUser.getMAIL()) {
					return alert('user with this mail is already registred');
				}
				if (JSON.parse(localStorage.getItem('UserList'))[i].login === currentUser.getLogin()) {
					return alert('user with the same login is already registred');
				}
			}
			saveUser();
		}
}
