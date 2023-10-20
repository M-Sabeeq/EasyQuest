  var db = new Dexie("Subjects");



const addInput = document.querySelector ('#addInput');
const addBtn = document.querySelector ('#addBtn');
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.HT');
const listUL = document.querySelector('.addup');
const deleteBtn = document.querySelector('#deleteBtn');

toggleBtn.addEventListener('click', () => {
    if(divList.style.display === 'none') {
        divList.style.display = 'block';
        toggleBtn.innerHTML='Hide List';
    } else{divList.style.display='none' 
            toggleBtn.innerHTML='Show List';
        }
    }
)




addBtn.addEventListener('click', () => {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
});


deleteBtn.addEventListener('click', function() {
  if (listUL.children.length > 0) {
    const lastItem = listUL.lastChild;
    listUL.removeChild(lastItem);
  } else {
    alert("The List is empty. Nothing to Delete.");
  }
});
  