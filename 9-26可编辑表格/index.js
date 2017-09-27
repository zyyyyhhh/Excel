/*
* @Author: dell
* @Date:   2017-09-26 16:09:06
* @Last Modified by:   dell
* @Last Modified time: 2017-09-26 19:23:55
*/
window.onload = function(){
	let table = document.querySelector('tbody');
	let td = document.querySelector('td');
	

	let person = [
		{name:'张三',age:'18',address:'山西运城',phone:'123456',sex:'nv'},
		{name:'张三',age:'18',address:'山西运城',phone:'123456',sex:'nv'},
		{name:'张三',age:'18',address:'山西大同',phone:'123456',sex:'nv'},
		{name:'张三',age:'18',address:'山西临汾',phone:'123456',sex:'nv'},
		{name:'张三',age:'18',address:'山西运城',phone:'123456',sex:'nv'}
	];
	console.log(person)
	person.forEach(index=>{
		trsadd(index);
	})
	function trsadd(obj){
		let trs = document.createElement('tr');
		trs.innerHTML = `
			<td>${obj.name}</td>
			<td>${obj.age}</td>
			<td>${obj.address}</td>
			<td>${obj.phone}</td>
			<td>${obj.sex}</td>
			<td class="del"><button>删除</button></td>
		`
		console.log(trs)
		table.appendChild(trs);
	}

	table.ondblclick = function(e){
		let element = e.target;
		if(element.nodeName == 'TD' && element.className != 'del'){
			let values = element.innerText;
			element.innerText = '';
			let input = document.createElement('input');
			input.value = values;
			element.appendChild(input);
			input.onblur = function(){
				let newtext = input.value.trim();
				element.removeChild(input);
				element.innerText = newtext;
			}
		}
		else if(element.nodeName == 'BUTTON'){
			let trs = element.parentNode.parentNode;
			table.removeChild(trs);
		}
	}


	function add1(){
		let trs = document.createElement('tr');
		trs.innerHTML = `
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td class="del"><button>删除</button></td>
		`
		table.appendChild(trs);
	}


	let add = document.querySelector('.add');
	add.onclick = function(){
		let trs = document.createElement('tr');
		add1();	
	}
}
