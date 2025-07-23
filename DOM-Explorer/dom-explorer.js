const newList = document.createElement("li");
const newList1 = document.createElement("li");
const newList2 = document.createElement("li");

newList.textContent = 'coconut';
newList.id = 'coconut';
newList.style.fontWeight = 'bold';
newList.style.backgroundColor = 'lightgreen';

newList1.textContent = 'promeganate';
newList1.id = 'promeganate';
newList1.style.fontWeight = 'bold';
newList1.style.backgroundColor = 'tomato';

newList2.textContent = 'orange';
newList2.id = 'promeganate';
newList2.style.fontWeight = 'bold';
newList2.style.backgroundColor = 'orange';

document.getElementById("box").append(newList1);
document.getElementById("box").insertBefore(newList,document.getElementById('apple'));
document.getElementById("box").prepend(newList2);