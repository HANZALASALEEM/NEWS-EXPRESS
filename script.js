const generalbtn = document.getElementById("general");
const businessbtn = document.getElementById("business");
const sportbtn = document.getElementById("sports");
const entertainmentbtn = document.getElementById("entertainment");
const technologybtn = document.getElementById("technology");
const searchbtn = document.getElementById("searchbtn");
const newsContainer = document.getElementById("newsContainer");

// DECLARE NEWS ARRAY
let newsArray = [];

// EVENT LISTENERS
generalbtn.addEventListener("click", fetchGeneralNews);
businessbtn.addEventListener("click", fetchBusinessNews);
sportbtn.addEventListener("click", fetchSportsNews);
entertainmentbtn.addEventListener("click", fetchEntertainmentNews);
technologybtn.addEventListener("click", fetchTechnologyNews);
searchbtn.addEventListener("click", fetchSearchNews);

// FETCH APIS
const API_KEY = "1985b17df1dd4018b3bd7efefd936114";
const GENERAL_NEWS =
	"https://newsapi.org/v2/top-headlines?category=general&apiKey=";
const BUSINESS_NEWS =
	"https://newsapi.org/v2/top-headlines?category=business&apiKey=";
const SPORTS_NEWS =
	"https://newsapi.org/v2/top-headlines?category=sports&apiKey=";
const ENTERTAINMENT_NEWS =
	"https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=";
const TECHNOLOGY_NEWS =
	"https://newsapi.org/v2/top-headlines?category=technology&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// FETCH FUNCTIONS
async function fetchGeneralNews() {
	const response = await fetch(GENERAL_NEWS + API_KEY);
	const myJson = await response.json();
	newsArray = myJson.articles;
	displayNews();
}

async function fetchBusinessNews() {
	const response = await fetch(BUSINESS_NEWS + API_KEY);
	const myJson = await response.json();
	newsArray = myJson.articles;
	displayNews();
}

async function fetchSportsNews() {
	const response = await fetch(SPORTS_NEWS + API_KEY);
	const myJson = await response.json();
	newsArray = myJson.articles;
	displayNews();
}

async function fetchEntertainmentNews() {
	const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
	const myJson = await response.json();
	newsArray = myJson.articles;
	displayNews();
}

async function fetchTechnologyNews() {
	const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
	const myJson = await response.json();
	newsArray = myJson.articles;
	displayNews();
}

async function fetchSearchNews() {
	const response = await fetch(
		SEARCH_NEWS + search.value + "&apiKey=" + API_KEY
	);
	const myJson = await response.json();
	newsArray = myJson.articles;
	displayNews();
}

function displayNews() {
	newsContainer.innerHTML = ""; // Clear previous news

	let row = document.createElement("div");
	row.className = "row";

	newsArray.forEach((news, index) => {
		if (index % 3 === 0 && index !== 0) {
			newsContainer.appendChild(row);
			row = document.createElement("div");
			row.className = "row";
		}

		const col = document.createElement("div");
		col.className = "col-md-4";

		const card = document.createElement("div");
		card.className = "card mb-4";

		const image = document.createElement("img");
		image.src = news.urlToImage;
		image.className = "card-img-top";
		image.alt = "News Image";

		const cardBody = document.createElement("div");
		cardBody.className = "card-body";

		const title = document.createElement("h5");
		title.className = "card-title";
		title.textContent = news.title;

		const description = document.createElement("p");
		description.className = "card-text";
		description.textContent = news.description;

		const source = document.createElement("p");
		source.className = "card-text";
		source.innerHTML = `<small class="text-muted">${news.source.name}</small>`;

		const publishedAt = document.createElement("p");
		publishedAt.className = "card-text";
		publishedAt.innerHTML = `<small class="text-muted">${formatDate(
			news.publishedAt
		)}</small>`;

		cardBody.appendChild(title);
		cardBody.appendChild(description);
		cardBody.appendChild(source);
		cardBody.appendChild(publishedAt);

		card.appendChild(image);
		card.appendChild(cardBody);

		col.appendChild(card);
		row.appendChild(col);
	});

	newsContainer.appendChild(row);
}

function formatDate(dateString) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString(undefined, options);
}

// FETCH GENERAL NEWS ON PAGE LOAD
fetchGeneralNews();
