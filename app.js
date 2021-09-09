//Get Task Button And Task List:
const addTask = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
let completeTaskCount = 0;

addTask.addEventListener('click', function () {
        const taskInput = document.getElementById('task-input');

        //Create Element For Update Value:
        const div = document.createElement('div');
        const h5 = document.createElement('h5');
        const btn = document.createElement('button');

        //Update Value oof h5:
        h5.innerText = taskInput.value;
        btn.innerText = 'Done';

        //Addedd ClassList:
        div.classList.add('p-3', 'border', 'border-3', 'mt-3', 'rounded', 'task');
        btn.classList.add('btn', 'btn-dark', 'task-btn');

        //Append Child in div:
        div.appendChild(h5);
        div.appendChild(btn);

        //Append div in main html:
        taskList.appendChild(div);
        //Clear Task Input:
        taskInput.value = '';
        doneBtn()
        updateResult()
})

//Done Button Set Event Listener:
function doneBtn() {
        const taskBtns = document.getElementsByClassName('task-btn');
        for (const taskBtn of taskBtns) {
                taskBtn.addEventListener('click', function (e) {
                        e.target.parentNode.style.color = 'green';
                        e.target.parentNode.classList.add('border', 'border-success')
                        //Condition For Disable Button:
                        if (taskBtn.innerText == 'Done') {
                                taskBtn.setAttribute('disabled', true);
                                taskBtn.innerText = 'Completed Task';
                                completeTaskCount++;
                                updateResult()

                        }
                })
        }
}

//Update Table Result:
function updateResult() {
        const totalTask = document.getElementById('total-task');
        const completeTask = document.getElementById('completed-task');
        const incompleteTask = document.getElementById('incomplete-task');

        //Count Task:
        let count = parseInt(taskList.childElementCount);
        totalTask.innerText = count;

        completeTask.innerText = parseInt(completeTaskCount);
        incompleteTask.innerText = count - completeTaskCount;
}