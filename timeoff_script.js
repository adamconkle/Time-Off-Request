document.getElementById("startDate").addEventListener("focus", function () {
  this.type = "date"; // Change to date input when focused
});

document.getElementById("endDate").addEventListener("focus", function () {
  this.type = "date"; // Change to date input when focused
});

document.getElementById("startDate").addEventListener("blur", function () {
  if (this.value === "") this.type = "text"; // Reset to text input if empty
});

document.getElementById("endDate").addEventListener("blur", function () {
  if (this.value === "") this.type = "text"; // Reset to text input if empty
});



function send() {
  // Retrieve input values
  let name = document.getElementById("name").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;

  // Check if all required fields are filled
  if (name === '' || startDate === '' || endDate === '') {
    alert("You must fill out all fields!");
    return;
  }

  // Reference the table's tbody
  let tableBody = document.getElementById("requestsTable").getElementsByTagName("tbody")[0];
  let row = tableBody.insertRow(); // Insert a new row

  // Create and populate table cells
  let nameCell = row.insertCell(0);
  let startDateCell = row.insertCell(1);
  let endDateCell = row.insertCell(2);
  let actionCell = row.insertCell(3);

  nameCell.textContent = name;
  startDateCell.textContent = startDate;
  endDateCell.textContent = endDate;

  // Create "Approve" button
  let approveButton = document.createElement("button");
  approveButton.textContent = "Approve";

  // Create "Deny" button
  let denyButton = document.createElement("button");
  denyButton.textContent = "Deny";

  // Create "Delete" button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add toggle for "Approve"
  approveButton.onclick = function () {
    if (!approveButton.disabled) {
      actionCell.textContent = "Approved ";
      row.style.backgroundColor = "#d4edda"; // Light green for approval
      actionCell.appendChild(denyButton); // Re-add "Deny" button
      actionCell.appendChild(deleteButton); // Re-add "Delete" button
      approveButton.disabled = true; // Disable "Approve"
      denyButton.disabled = false; // Enable "Deny"
    }
  };

  // Add toggle for "Deny"
  denyButton.onclick = function () {
    if (!denyButton.disabled) {
      actionCell.textContent = "Denied ";
      row.style.backgroundColor = "#f8d7da"; // Light red for denial
      actionCell.appendChild(approveButton); // Re-add "Approve" button
      actionCell.appendChild(deleteButton); // Re-add "Delete" button
      denyButton.disabled = true; // Disable "Deny"
      approveButton.disabled = false; // Enable "Approve"
    }
  };

  // Add delete button
  deleteButton.onclick = function () {
    tableBody.removeChild(row); // Remove the entire row
  };

  // Append buttons to each row
  actionCell.appendChild(approveButton);
  actionCell.appendChild(denyButton);
  actionCell.appendChild(deleteButton);

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
}
