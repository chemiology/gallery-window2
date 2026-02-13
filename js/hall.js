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
