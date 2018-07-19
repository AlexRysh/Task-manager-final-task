'use strict'

var idCounter = 0;

function User(sMail, sLogin, sPassword, sRole){
	var MAIL =  sMail,
		_login = sLogin,
		_password = sPassword,
		ID = idCounter++,
		ROLE = sRole;

	this.getMAIL = function(){
		return MAIL;
	}

	this.getLogin = function(){
		return _login
	}

	this.getPassword = function(){
		if(currentUser.getLogin() === this.getLogin()){
			return _password;
		} else {
			return 'you have no permission'
		}
	}

	this.getID = function(){
		return ID;
	}

	this.getROLE = function(){
		return ROLE;
	}

	this.getTeams = function(){
		return _teams;
	}

	this.getTasks = function(){
		return _tasks;
	}

	this.setLogin = function(newLogin){
		_login = newLogin;
	}

	this.setPassword = function(newPassword){
		_password = newPassword;
	}
}

function Developer(sMail, sLogin, sPassword){
	var _taskList = [];
	User.call(this, sMail, sLogin, sPassword, 'Developer');
	this.getTaskList = function(){
			return _taskList;
	}
	this.setTaskList = function(newTaskList){
		if (currentUser.getROLE() === 'Manager') {
			_taskList = newTaskList;
		} else {
			return 'you have no permission to do that'
		}
	}
}

function Manager(sMail, sLogin, sPassword){
	var _devList = [];
	User.call(manager, sMail, sLogin, sPassword, 'Manager');
	this.getDevList = function(){
		if(currentUser.getROLE() === 'Manager'){
			return _devList;
		}
	}
}


