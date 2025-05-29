/**
 * Serves the HTML web app
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

/**
 * Fetch tasks from the sheet
 */
function getTasks() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tasks');
  if (!sheet) throw new Error("Sheet 'Tasks' not found.");
  const data = sheet.getDataRange().getValues();
  return data.slice(1).map(row => ({
    id: row[0],
    name: row[1],
    description: row[2],
    status: row[3],
    dueDate: row[4]
  }));
}

/**
 * Add a new task to the sheet
 */
function addTask(task) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tasks');
  if (!sheet) throw new Error("Sheet 'Tasks' not found.");
  const id = new Date().getTime(); // Unique ID
  sheet.appendRow([id, task.name, task.description, task.status, task.dueDate]);
}

/**
 * Update a task in the sheet
 */
function updateTask(task) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tasks');
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == task.id) {
      sheet.getRange(i + 1, 2, 1, 4).setValues([[task.name, task.description, task.status, task.dueDate]]);
      return;
    }
  }
}

/**
 * Delete a task from the sheet
 */
function deleteTask(id) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tasks');
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      sheet.deleteRow(i + 1);
      return;
    }
  }
}
