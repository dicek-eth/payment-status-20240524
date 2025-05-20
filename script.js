fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#payment-table tbody");
    
    data.sort((a, b) => a.status === "未" ? -1 : 1);

    data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.name}</td>
        <td>${row.status === "済" ? "✅" : "未"}</td>
        <td>${row.date || "―"}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => {
    console.error("data.json 読み込み失敗:", err);
  });
