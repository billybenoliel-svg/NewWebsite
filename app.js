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
      <a class="button light" href="${applyUrl}" target="_blank" rel="noreferrer">Apply</a>
      <a class="button dark" href="tel:437-455-9322">Call</a>
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
  if (select) select.value = name;
}

function renderBuildings(filter = "all") {
  const buildingGrid = document.querySelector("#buildingGrid");
  if (!buildingGrid) return;

  const visible = buildings.filter((building) => matchesFilter(building, filter));

  if (!visible.length) {
    buildingGrid.innerHTML = `
      <div class="empty-state">
        No confirmed public building listings are shown for ${cityName(filter)}
        yet. Contact leasing and ask about current or upcoming availability.
      </div>
    `;
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

          <div class="card-actions">
            <a class="button dark" href="details.html?id=${building.id}">
              More details
            </a>

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
}

function renderDetailPage() {
  if (document.body.dataset.page !== "details") return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const building = buildings.find((item) => item.id === id) || buildings[0];

  document.title = `${building.name} | Araya.ca`;

  document.querySelector("#detailTitle").textContent = building.name;
  document.querySelector("#detailAddress").textContent =
    `${building.address} · ${cityName(building.city)}`;
  document.querySelector("#detailName").textContent = building.name;
  document.querySelector("#detailSummary").textContent = building.summary;

  const contactUrl = `contact.html?property=${encodeURIComponent(building.name)}`;
  document.querySelector("#detailContact").href = contactUrl;
  document.querySelector("#sidebarContact").href = contactUrl;
  document.querySelector("#originalListing").href = building.link;

  document.querySelector("#detailSuites").innerHTML = building.suites
    .map(
      (suite) => `
        <article class="detail-suite">
          <div>
            <h3>${suite.name}</h3>
            <p>${suite.status}</p>
          </div>
          <strong>${suite.price}</strong>
          <a class="button light" href="${contactUrl}">Inquire</a>
        </article>
      `,
    )
    .join("");

  document.querySelector("#detailAmenities").innerHTML = building.features
    .map((feature) => `<span>${feature}</span>`)
    .join("");
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
    window.location.href = `buildings.html?city=${encodeURIComponent(city)}`;
  });
}

function setupContactPage() {
  renderPropertySelect();

  const params = new URLSearchParams(window.location.search);
  const property = params.get("property");

  if (property) setSelectedProperty(property);
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

renderDetailPage();
