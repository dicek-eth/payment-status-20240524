fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cards-container");

    data.forEach(person => {
      const card = document.createElement("div");
      card.className = "card";

      const name = document.createElement("div");
      name.className = "name";
      name.textContent = person.name;

      const status = document.createElement("div");
      status.className = `status ${person.status === "済" ? "paid" : "unpaid"}`;
      status.textContent = person.status === "済" ? "支払済み" : "未払い";

      const date = document.createElement("div");
      date.className = "date";
      date.textContent = person.date ? `支払日: ${person.date}` : "";

      card.appendChild(name);
      card.appendChild(status);
      if (person.date) card.appendChild(date);

      container.appendChild(card);
    });
  });
