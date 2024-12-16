// app.js

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const addTaskButton = document.getElementById('addTaskButton');
    const addTaskModal = document.getElementById('addTaskModal');
    const closeModalButton = document.getElementById('closeModalButton');
    const saveTaskButton = document.getElementById('saveTaskButton');
    const taskTableBody = document.getElementById('taskTableBody');
    
    // Local Storage Key
    const TASKS_KEY = 'tasks';
  
    // Load tasks from Local Storage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
      taskTableBody.innerHTML = '';
      tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="px-4 py-2">${task.name}</td>
          <td class="px-4 py-2">${task.priority}</td>
          <td class="px-4 py-2">${task.status}</td>
          <td class="px-4 py-2">${task.deadline}</td>
          <td class="px-4 py-2">
            <button onclick="deleteTask(${index})" class="text-red-500">Delete</button>
            <button onclick="editTask(${index})" class="text-blue-500">Edit</button>
            <button onclick="viewTask(${index})" class="text-green-500">View</button>
          </td>
        `;
        taskTableBody.appendChild(row);
      });
    };
  
    // Open the modal
    addTaskButton.addEventListener('click', () => {
      addTaskModal.classList.remove('hidden');
    });
  
    // Close the modal
    closeModalButton.addEventListener('click', () => {
      addTaskModal.classList.add('hidden');
    });
  
    // Save new task
    saveTaskButton.addEventListener('click', () => {
      const taskName = document.getElementById('taskName').value;
      const taskPriority = document.getElementById('taskPriority').value;
      const taskStatus = document.getElementById('taskStatus').value;
      const taskDeadline = document.getElementById('taskDeadline').value;
      
      if (taskName && taskPriority && taskStatus && taskDeadline) {
        const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
        tasks.push({ name: taskName, priority: taskPriority, status: taskStatus, deadline: taskDeadline });
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
        loadTasks();
        addTaskModal.classList.add('hidden');
      }
    });
  
    // Delete task
    window.deleteTask = (index) => {
      const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
      tasks.splice(index, 1);
      localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
      loadTasks();
    };
  
    // Edit task
    window.editTask = (index) => {
      // Edit task logic here
    };
  
    // View task
    window.viewTask = (index) => {
      // View task logic here
    };
  
    // Initial Load
    loadTasks();
  });
  