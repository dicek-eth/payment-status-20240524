fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#payment-table tbody");

    // 「未」→「済」順に並べ替え
    data.sort((a, b) => {
      if (a.status === "未" && b.status === "済") return -1;
      if (a.status === "済" && b.status === "未") return 1;
      return 0; // 同じなら順序維持
    });

    data.forEach(person => {
      const tr = document.createElement("tr");

      const statusClass = person.status === "済" ? "paid" : "unpaid";
      const statusText = person.status === "済" ? "✅" : "未";

      tr.innerHTML = `
        <td>${person.name}</td>
        <td class="status ${statusClass}">${statusText}</td>
        <td>${person.date || "―"}</td>
      `;

      tbody.appendChild(tr);
    });
  });
