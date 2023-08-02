var elForm = document.querySelector(".todo__form");
var elInputTitle = document.querySelector(".todo__input-title");
var elInputTime = document.querySelector(".todo__input-time");
var elList = document.querySelector(".todo__list")


   
  var todos = [ 
    {
      task: "Ertalab turish",
      time: "6:00",
    },
    {
      task: "Jismoniy tarbiya",
      time: "6:30",
    },
    {
      task: "Ovqatlanish",
      time: "7:00",
    },
    {
      task: "Kursga borish",
      time: "8:00",
    },
    {
      task: "Dars qilish",
      time: "11:00",
    },
    {
      task: "Uyga qaytish",
      time: "20:00",
    },
  ];
  
  function renderTodos(array) {
    elList.innerHTML = "";
    array.forEach(function(item, index, arr) {
      var liElement = document.createElement("li");
      var taskElement = document.createElement("p");
      var timeElement = document.createElement("time");
    
      taskElement.textContent = item.task;
      timeElement.textContent = item.time;
  
      liElement.classList.add("todo__item");
  
      liElement.appendChild(taskElement);
      liElement.appendChild(timeElement);
  
      elList.appendChild(liElement);
      
    });
  }
  renderTodos(todos)

  elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();


    var elTaskValue = elInputTitle.value.trim();
    var elInputTimeValue = elInputTime.value.trim();
    
    var new_obj = {
      task: elTaskValue,
      time: elInputTimeValue,
    };

    todos.unshift(new_obj);
    
    renderTodos(todos)
  })
