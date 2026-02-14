async function loadHall() {

  const params = new URLSearchParams(location.search);
  const hallId = params.get("hall");

  const res = await fetch("data/hall.json");
  const data = await res.json();

  const hall = data.halls.find(h => h.id === hallId);

  document.getElementById("hallTitle").textContent =
    hall ? hall.title : "Hall";

  const list = document.getElementById("exhibitionList");
  list.innerHTML = "";

  if (hall && hall.exhibitions.length > 0) {

    hall.exhibitions.forEach(ex => {

const card = document.createElement("div");
card.className = "hall-card";

card.innerHTML = `
    <a href="exhibition.html?id=${ex}&hall=${hall.id}" class="hall-link">
    <img src="assets/posters/${ex}.jpg" alt="${ex}">
    <div style="margin-top:12px; font-size:18px;">
      ${ex}
    </div>
  </a>
`;

list.appendChild(card);

    });

  }
}

loadHall();

document.addEventListener("click", function(e) {

  const link = e.target.closest(".hall-link");
  if (!link) return;

  e.preventDefault();

  const fade = document.getElementById("pageFade");
  fade.classList.add("active");

  setTimeout(() => {
    window.location.href = link.href;
  }, 500);
});

