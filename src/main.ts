import './style.css'

const addTaskForm = document.querySelector<HTMLFormElement>('#addTaskForm')!
const addTaskInput = document.querySelector<HTMLInputElement>('#addTaskInput')!
const taskList = document.querySelector<HTMLUListElement>('#taskList')!

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addTask(addTaskInput.value)
  addTaskInput.value = ''
})

const addTask = (newTask: string) => {
  if (!newTask) {
    return
  }
  const newTaskItem = document.createElement('li')
  newTaskItem.innerText = newTask
  newTaskItem.addEventListener('click', () => {
    newTaskItem.classList.toggle('completed')
  })

  newTaskItem.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    newTaskItem.remove()
  })

  taskList.appendChild(newTaskItem)
}
