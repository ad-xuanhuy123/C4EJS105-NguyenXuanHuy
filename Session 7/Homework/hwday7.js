// Bai 1
// 1D 2A 3C 4B
// Bai 3 
// No
// Bai 4
function bai4() {
    const s = document.getElementsByTagName('li');
    document.getElementById('id1').innerHTML = s[1].innerHTML;
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}
// Bai 5
    let d = document.getElementsByClassName("author");
    for (i=0;i<d.length;i++) {
        console.log(d[i].textContent);
    }    
// Task 7 
	let btn = document.getElementById('click');
	btn.addEventListener('click', event => {
		console.log(event.target);
	});
	let keydown = document.getElementById('key');
	keydown.addEventListener('keydown', event2 => {
		console.log(event2.key);
	})
// Bai 8 
{
    WhatIsMyPlan = ()  => alert("I will become a name partner of a law firm.");
}
// Bai 11 (learnt from NguyenMinhTuan)
{
	let userName;
	let button = document.getElementById('getInput');
	button.addEventListener('click', getUserName = () => {
		console.log('Upper it!!! just clicked');
		// take user name from input tag
		userName = document.getElementById('inputUserName').value;
		console.log(`User's name: ${userName}`);
		// convert user name to upper case
		userName = userName.toUpperCase();
		console.log(`User's name uppercase: ${userName}`);
		// update html 
		document.getElementById('userNameUppered').innerHTML = userName;
	});
}
// Bai 12
let items = ['Backpack', 'Miband watch', 'Ring'];
const list = document.getElementById('list');
showList = (itemName) => {
    list.insertAdjacentHTML('beforeend', `<li><span>${itemName}</span><Button id ="btn_remove">Remove</Button></li>`);
}
for(let x of items){
    showList(x);
}
function add() {
    let input;
    let button = document.getElementById('btn_add');
    button.addEventListener('click', (add) => {
        input = document.getElementById('input_item').value;
        items.push(input);
        showList(input);
        console.log(items);
    });
    
}
add();