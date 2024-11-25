


  const MOUNTAINS = [
    { 
        name: "Kilimanjaro",
        height: 5895, 
        place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" },
  ];

  function buildTable(data) {
    const table = document.createElement("table");

    // Create header row
    const headerRow = document.createElement("tr");
    Object.keys(data[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create data rows
    data.forEach((item) => {
      const row = document.createElement("tr");
      Object.values(item).forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        // Right-align numerical values
        if (typeof value === "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  // Append the table to the div with id "mountains"
  const mountainsDiv = document.getElementById("mountains");
  mountainsDiv.appendChild(buildTable(MOUNTAINS));

