function cityName(id) {
  return cities.find((city) => city.id === id)?.name || id;
}

function renderHeader() {
  const header = document.querySelector("#siteHeader");

  if (!header) return;

  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="Araya.ca home">
      <span class="brand-mark">A</span>
      <span>Araya.ca</span>
    </a>

    <nav aria-label="Primary navigation">
      <a href="cities.html">Cities</a>
      <a href="buildings.html">Buildings</a>
      <a href="contact.html">Contact</a>
    </nav>

    <div class="header-actions">
      <a
        class="button light"
        href="${applyUrl}"
        target="_blank"
        rel="noreferrer"
      >
        Apply
      </a>

      <a class="button dark" href="tel:437-455-9322">
        Call
      </a>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("#siteFooter");

  if (!footer) return;

  footer.innerHTML = `
    <strong>Araya.ca</strong>
    <span>Ontario apartment rentals</span>
    <span>Clean search. Clear listings. Direct leasing.</span>
  `;
}

function renderCityCards(limit) {
  const target = document.querySelector("#cityGrid");

  if (!target) return;

  const list = limit ? cities.slice(0, limit) : cities;

  target.innerHTML = list
    .map(
      (city) => `
        <a class="city-card" href="buildings.html?city=${city.id}">
          <span>${city.status}</span>
          <strong>${city.name}</strong>
          <p>${city.note}</p>
        </a>
      `,
    )
    .join("");
}

function matchesFilter(building, filter) {
  if (!filter || filter === "all") return true;

  if (["bachelor", "1", "2", "townhouse"].includes(filter)) {
    return building.bedrooms.includes(filter);
  }

  return building.city === filter;
}

function renderPropertySelect() {
  const select = document.querySelector("#propertySelect");

  if (!select) return;

  const buildingOptions = buildings
    .map(
      (building) =>
        `<option value="${building.name}">${building.name} - ${cityName(building.city)}</option>`,
    )
    .join("");

  const cityOptions = cities
    .map(
      (city) =>
        `<option value="${city.name}">${city.name} - general inquiry</option>`,
    )
    .join("");

  select.innerHTML = buildingOptions + cityOptions;
}

function setSelectedProperty(name) {
  const select = document.querySelector("#propertySelect");

  if (select) {
    select.value = name;
  }

  const modal = document.querySelector("#detailsModal");

  if (modal?.open) {
    modal.close();
  }
}

function renderBuildings(filter = "all") {
  const buildingGrid = document.querySelector("#buildingGrid");
  const availabilityGrid = document.querySelector("#availabilityGrid");

  if (!buildingGrid) return;

  const visible = buildings.filter((building) =>
    matchesFilter(building, filter),
  );

  if (!visible.length) {
    buildingGrid.innerHTML = `
      <div class="empty-state">
        No confirmed public building listings are shown for ${cityName(filter)}
        yet. Contact leasing and ask about current or upcoming availability.
      </div>
    `;

    if (availabilityGrid) {
      availabilityGrid.innerHTML = "";
    }

    return;
  }

  buildingGrid.innerHTML = visible
    .map(
      (building) => `
        <article class="building-card">
          <div class="card-top">
            <div>
              <span class="pill">${cityName(building.city)}</span>
              <h3>${building.name}</h3>
              <p>${building.address}</p>
            </div>

            <span class="price">${building.price}</span>
          </div>

          <p>${building.summary}</p>

          <ul class="features">
            ${building.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>

          <div class="card-actions">
            <button
              class="button dark"
              type="button"
              data-details="${building.id}"
            >
              Details
            </button>

            <a
              class="button light"
              href="${building.link}"
              target="_blank"
              rel="noreferrer"
            >
              Original listing
            </a>
          </div>

          <a
            class="text-link"
            href="contact.html?property=${encodeURIComponent(building.name)}"
          >
            Ask about this building
          </a>
        </article>
      `,
    )
    .join("");

  if (availabilityGrid) {
    availabilityGrid.innerHTML = visible
      .flatMap((building) =>
        building.suites.map(
          (suite) => `
            <article class="suite-row">
              <div>
                <strong>${suite.name}</strong>
                <p>${building.name} - ${cityName(building.city)}</p>
              </div>

              <span>${suite.price}</span>

              <a
                class="button light"
                href="contact.html?property=${encodeURIComponent(building.name)}"
              >
                Inquire
              </a>
            </article>
          `,
        ),
      )
      .join("");
  }

  wireActions();
}

function openDetails(id) {
  const building = buildings.find((item) => item.id === id);
  const modal = document.querySelector("#detailsModal");

  if (!building || !modal) return;

  document.querySelector("#modalTitle").textContent = building.name;

  document.querySelector("#modalBody").innerHTML = `
    <p><strong>${building.address}</strong></p>
    <p class="muted">${building.summary}</p>

    ${building.suites
      .map(
        (suite) => `
          <div class="modal-suite">
            <span>
              ${suite.name}
              <br>
              <small>${suite.status}</small>
            </span>

            <strong>${suite.price}</strong>
          </div>
        `,
      )
      .join("")}

    <ul class="features">
      ${building.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>

    <div class="card-actions">
      <a
        class="button primary"
        href="contact.html?property=${encodeURIComponent(building.name)}"
      >
        Book a tour
      </a>

      <a
        class="button light"
        href="${applyUrl}"
        target="_blank"
        rel="noreferrer"
      >
        Apply now
      </a>
    </div>
  `;

  modal.showModal();
}

function wireActions() {
  document.querySelectorAll("[data-details]").forEach((button) => {
    button.onclick = () => openDetails(button.dataset.details);
  });
}

function setupBuildingPage() {
  const params = new URLSearchParams(window.location.search);
  const initialFilter = params.get("city") || "all";

  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === initialFilter);

    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderBuildings(button.dataset.filter);
    });
  });

  renderBuildings(initialFilter);
}

function setupHomeSearch() {
  const form = document.querySelector("#quickSearch");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = document.querySelector("#citySelect").value;
    const bedrooms = document.querySelector("#bedSelect").value;
    const filter = bedrooms !== "all" ? bedrooms : city;

    window.location.href = `buildings.html?city=${encodeURIComponent(filter)}`;
  });
}

function setupContactPage() {
  renderPropertySelect();

  const params = new URLSearchParams(window.location.search);
  const property = params.get("property");

  if (property) {
    setSelectedProperty(property);
  }
}

renderHeader();
renderFooter();

renderCityCards(document.body.dataset.page === "home" ? 5 : undefined);

setupHomeSearch();

if (document.body.dataset.page === "buildings") {
  setupBuildingPage();
}

if (document.body.dataset.page === "contact") {
  setupContactPage();
}

document.querySelector("#modalClose")?.addEventListener("click", () => {
  document.querySelector("#detailsModal").close();
});
