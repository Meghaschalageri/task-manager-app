# 📝 Task Manager App (Google Apps Script + Google Sheets)

A simple web-based task manager that stores tasks in a Google Sheet using Google Apps Script.

## 🚀 Live Web App

👉 [Open Web App](https://script.google.com/macros/s/AKfycbwdJ7DEdUd3kBwlcju2_JzGm5RXrGpR25NYdQWFdFS4j1hWWKChVvm21-B6b4uZ4OXW/exec)

## 📊 Linked Google Sheet

👉 [View Google Sheet](https://docs.google.com/spreadsheets/d/1fWzwT4nBp-0ex4-nZmakTNIlnyTXgDSEL8P8DRws5ik/edit?gid=0#gid=0)

---

## 💡 Features

- Add, update, delete tasks
- Tasks stored in real-time in a connected Google Sheet
- Deployed as a public web app using Google Apps Script

---

## 🛠️ How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Meghaschalageri/task-manager-app.git
````

2. **Set Up Google Apps Script**

   * Open [Google Apps Script](https://script.google.com/)
   * Create a new project and paste the code from `Code.gs`, `index.html`, and other script files.
   * Link your Google Sheet and update the script's `SpreadsheetApp.openById(...)` line with the Sheet ID.

3. **Deploy as Web App**

   * Click **Deploy > Manage deployments > New deployment**
   * Select type: **Web app**
   * Set access to **Anyone**
   * Copy the **Web App URL** and update it in this `README.md` if needed

---

## 🧩 Technologies Used

* Google Apps Script
* Google Sheets
* HTML/CSS/JavaScript

---


### 📥 What to Do Now

1. Copy the above content.
2. Open your local project in a code editor.
3. Paste it into a new or existing `README.md` file.
4. Commit and push it:
   ```bash
   git add README.md
   git commit -m "Add custom README with live URLs"
   git push origin master
````

