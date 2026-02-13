async function loadHall() {
  const params = new URLSearchParams(location.search);
  const hallId = params.get("hall");

  const res = await fetch("data/hall.json");
  const data = await res.json();

  const hall = data.halls.find(h => h.id === hallId);

  document.getElementById("hallTitle").textContent =
    hall ? hall.title : "Hall";
}

loadHall();

async function loadHall() {
  const params = new URLSearchParams(location.search);
  const hallId = params.get("hall");

  const res = await fetch("data/hall.json");
  const data = await res.json();

  const hall = data.halls.find(h => h.id === hallId);

  document.getElementById("hallTitle").textContent =
    hall ? hall.title : "Hall";

  const list = document.getElementById("exhibitionList");

  if (hall && hall.exhibitions.length > 0) {
    hall.exhibitions.forEach(ex => {
      const div = document.createElement("div");
      div.textContent = ex;
      div.style.margin = "20px";
      div.style.fontSize = "20px";
      list.appendChild(div);
    });
  }
}

loadHall();

