var elForm = document.querySelector(".todo__form");
var elInputTitle = document.querySelector(".todo__input-title");
var elInputTime = document.querySelector(".todo__input-time");
var elList = document.querySelector(".todo__list")
var elSearch = document.querySelector(".todo__speach")





// SpeechRecognition

let data = new Date()
let hour = data.getHours();
let minut = data.getMinutes();
let hourMinut = `${hour}:${minut}`

let record = new webkitSpeechRecognition();
elSearch.addEventListener("click", function() {
  record.start()
});

record.onresult = function(evt) {
  let recordResult  = evt.results[0][0].transcript;
  
  let new_Object = {
    task: recordResult,
    time: hourMinut
  }
  todos.push(new_Object)
  renderTodos(todos)
}



var todos = [ 
  {
    id:1,
    task: "Ertalab turish",
    time: "6:00",
  },
  {
    id:2,
    task: "Jismoniy tarbiya",
    time: "6:30",
  },
  // {
  //   task: "Ovqatlanish",
  //   time: "7:00",
  // },
  // {
  //   task: "Kursga borish",
  //   time: "8:00",
  // },
  // {
  //   task: "Dars qilish",
  //   time: "11:00",
  // },
  // {
  //   task: "Uyga qaytish",
  //   time: "20:00",
  // },
];


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  
  var elTaskValue = elInputTitle.value.trim();
  var elInputTimeValue = elInputTime.value.trim();
  
  var new_obj = {
    id: item.length ? item.length() + 1 : 1,
    task: elTaskValue,
    time: elInputTimeValue,
  };
  
  todos.unshift(new_obj);
  
  renderTodos(todos)
})


function renderTodos(array) {
  elList.innerHTML = "";
  array.forEach(function(item, index, arr) {
    var liElement = document.createElement("li");
    var taskElement = document.createElement("p");
    var timeElement = document.createElement("time");
    var deleteElement = document.createElement("button");
    var editElement = document.createElement("button")
    var wrapElement = document.createElement("div")
    
    taskElement.textContent = item.task;
    timeElement.textContent = item.time;
    
    liElement.classList.add("todo__item");
    wrapElement.classList.add("wrap__item")
    deleteElement.classList.add("delete__btn")
    deleteElement.dataset.id = item.id;
    editElement.dataset.id = item.id;


    editElement.classList.add("edit__btn")
    
    wrapElement.append(deleteElement, editElement);
    liElement.append(taskElement, wrapElement);
    liElement.appendChild(timeElement);
    
    elList.appendChild(liElement);
    
  });
}
renderTodos(todos)

elList.addEventListener("click", function(evt) {
  if (evt.target.matches(".delete__btn")) {
    let deleteId = evt.target.dataset.id;

    let findObj = todos.findIndex(function(item) {
      return item.id = deleteId
    })
    todos.splice(findObj, 1);
    renderTodos(todos)
  };


  if (evt.target.matches(".edit__btn")) {
    let editText = prompt("Edit value");
    let editCount = prompt("Edit time")


    let editId = evt.target.dataset.id;

    let findEdit = todos.find(function(item) {
      return item.id = editId ;
    });
    findEdit.task = editText;
    findEdit.time = editCount;
    renderTodos(todos)
  }
})


