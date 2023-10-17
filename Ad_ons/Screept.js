  var db = new Dexie("Subjects");

  const db = new Dexie('Subjects');
db.version(1).stores({
    data: '++id, name, age',
});

  // DB with single table "Subjects" with primary key "id" and
  // indexes on properties "SubjectName"
  db.version(1).stores({
    friends: `
      id,
      name,
      age`,
  });

const addInput = document.querySelector ('#addInput');
const addBtn = document.querySelector ('#addBtn');
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.HT');
const listUL = document.querySelector('.addup');

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