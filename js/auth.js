document.querySelector('.auth-form__submit-btn').addEventListener('click', authUser); 

var logInBtn = document.querySelector('.auth'),
	logOutBtn = document.querySelector('.log-out'),
	logOutLink = document.querySelector('.log-out-link'),
	logInLink = document.querySelector('.auth-link')

function authUser(e){
	var login = document.querySelector('.auth-form__login').value,
		password = document.querySelector('.auth-form__password').value,
		userList = JSON.parse(localStorage.getItem('UserList')) || [],
		numberOfUsers = userList.length;
	
		e.preventDefault();

	for(var i = 0; i < numberOfUsers; i++){
		if (userList[i].login === login && userList[i].password === password) {
			logInLink.style.display = 'none'
			logInBtn.style.display = 'none';
			logOutBtn.style.display = 'flex';
			logOutLink.style.display = 'block';
			
			if (userList[i].role === 'Manager') {
				currentUser = new Manager(userList[i].mail, userList[i].login, userList[i].password);
			}else{
				currentUser = new Developer(userList[i].mail, userList[i].login, userList[i].password);
			}
		}
	}
}

function logOut(){
	currentUser = null;
	logInBtn.style.display = 'flex';
	logInLink.style.display = 'block';
	logOutLink.style.display = 'none';
	logOutBtn.style.display = 'none';
}

logOutBtn.addEventListener('click', logOut);
