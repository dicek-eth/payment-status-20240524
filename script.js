fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#payment-table tbody");

    data.forEach(person => {
      const tr = document.createElement("tr");

      const statusClass = person.status === "済" ? "paid" : "unpaid";
      const statusText = person.status === "済" ? "✅" : "❌";

      tr.innerHTML = `
        <td>${person.name}</td>
        <td class="status ${statusClass}">${statusText}</td>
        <td>${person.date || "―"}</td>
      `;

      tbody.appendChild(tr);
    });
  });
