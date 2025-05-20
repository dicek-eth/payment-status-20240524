const SHEET_URL = "https://script.google.com/macros/s/AKfycbxpS2FZcSiNyp60wzEAFwNNs57JJZJFCJTo1VPj3gq3MPqDvTzTwN1U6UJFY2TFwgg--A/exec"; // ← ここに Apps Script の URL を入れてください

fetch(SHEET_URL)
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#payment-table tbody");

    // 未→済 の順に並び替え
    data.sort((a, b) => {
      if (a.状況 === "未" && b.状況 === "済") return -1;
      if (a.状況 === "済" && b.状況 === "未") return 1;
      return 0;
    });

    data.forEach(person => {
      const tr = document.createElement("tr");
      tr.className = person.状況 === "済" ? "paid" : "unpaid";

      tr.innerHTML = `
        <td>${person.名前}</td>
        <td>${person.状況 === "済" ? "✅" : "未"}</td>
        <td>${person.日付 || "―"}</td>
      `;

      tbody.appendChild(tr);
    });
  })
  .catch(err => {
    console.error("スプレッドシートの読み込みに失敗しました:", err);
  });
