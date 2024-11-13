document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById("add-task-button");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const themeToggle = document.getElementById("theme-toggle");
    const clearAllButton = document.getElementById("clear-all-button");
  
    // Initialize dark mode based on previous selection
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeToggle.checked = isDarkMode;
  
    // Toggle dark mode
    themeToggle.addEventListener("change", () => {
      const darkModeEnabled = themeToggle.checked;
      document.body.classList.toggle("dark-mode", darkModeEnabled);
      localStorage.setItem("darkMode", darkModeEnabled);
    });
  
    // Add task
    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<span>${taskText}</span><button class="delete-btn">X</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
  
        // Delete task
        taskItem.querySelector(".delete-btn").addEventListener("click", () => {
          taskItem.classList.add("slideOut");
          setTimeout(() => taskItem.remove(), 300);
        });
      }
    });
  
    // Clear All
    clearAllButton.addEventListener("click", () => {
      taskList.innerHTML = "";
    });
  
    // Add task with Enter key
    taskInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") addTaskButton.click();
    });
  });
  