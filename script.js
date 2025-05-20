fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#payment-table tbody");

    data.forEach(person => {
      const tr = document.createElement("tr");
      tr.className = person.status === "済" ? "paid" : "unpaid";

      tr.innerHTML = `
        <td>${person.name}</td>
        <td>${person.status}</td>
        <td>${person.date || "―"}</td>
      `;

      tbody.appendChild(tr);
    });
  });
