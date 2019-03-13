// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------

// ----------------------------- AJAX ----------------------------
/*
Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com
используя класс созданный на занятии. Получив ответ от сервера вывести имена
пользователей на страницу. При клике на имя пользователя в произвольном месте 
должна появиться подробная информация о нем. Для визуальной части можно использовать 
bootstrap или другие фреймворки. 
*/
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.addEventListener('load', () => {
	const res = JSON.parse(xhr.responseText);
	// console.log(res);
	renderTodos(res)
});
xhr.send();

function renderTodos(users) {
	users.forEach((user) => addTodoToView(user));
}

function addTodoToView(user) {
	const template = `
	<div class="dropdown-item" style="cursor: pointer" id="name">${user.name}
		<div class="users-inf" id="info" ">
			<ul>
				<li>Email: ${user.email}</li>
				<li>Phone: ${user.phone}</li>
				<li>Username: ${user.username}</li>
				<li>Website: ${user.website}</li>
			</ul>
		</div>
	</div>
	`;
	document.body.insertAdjacentHTML('afterbegin', template);
	let userId = document.getElementById('name');
	let userIdInfo = document.getElementById('info');
	userId.addEventListener('click', () => { userIdInfo.classList.toggle('users-inf')})
}