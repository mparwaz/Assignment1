const staffData = [
    ["Brielle Williamson", "$372,000"],
    ["Herrod Chandler", "$137,500"],
    ["Rhona Davidson", "$327,900"],
    ["Colleen Hurst", "$205,500"],
    ["Sonya Frost", "$103,600"],
    ["Jena Gaines", "$90,560"],
    ["Quinn Flynn", "$342,000"],
    ["Tiger Nixon", "$320,800"],
    ["Garrett Winters", "$170,750"],
    ["Ashton Cox", "$86,000"]
  ];
  
  let nameAsc = true;
  let salaryAsc = true;
  
  function renderTable() {
    const tbody = document.querySelector("#staff-table tbody");
    tbody.innerHTML = "";
    staffData.forEach(row => {
      tbody.innerHTML += `<tr><td>${row[0]}</td><td>Position</td><td>Office</td><td>${row[1]}</td></tr>`;
    });
  }
  
  function sortByName() {
    staffData.sort((a, b) => nameAsc ? a[0].localeCompare(b[0]) : b[0].localeCompare(a[0]));
    nameAsc = !nameAsc;
    renderTable();
  }
  
  function sortBySalary() {
    staffData.sort((a, b) => {
      const salaryA = parseFloat(a[1].replace(/[^\d.]/g, ''));
      const salaryB = parseFloat(b[1].replace(/[^\d.]/g, ''));
      return salaryAsc ? salaryA - salaryB : salaryB - salaryA;
    });
    salaryAsc = !salaryAsc;
    renderTable();
  }
  
  document.addEventListener("DOMContentLoaded", renderTable);
  