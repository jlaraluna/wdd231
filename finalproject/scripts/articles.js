const url = './data/articles.json';
const container = document.querySelector('#dynamic-articles');

let currentIndex = 0;
let articles = [];

export async function loadArticles() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    articles = data.articles;
    if (articles.length) {
      displayArticle(articles[currentIndex]);
      setInterval(showNextArticle, 4000); // cada 4 segundos rota
    }
  } catch (err) {
    console.error("Error loading articles:", err);
  }
}

function displayArticle(article) {
  container.innerHTML = ''; // Limpia el anterior
  const section = document.createElement('section');
  section.classList.add('article');

  const title = document.createElement('h2');
  title.textContent = article.title;

  const img = document.createElement('img');
  img.src = article.image;
  img.alt = article.title;
  img.loading = "lazy";

  const summary = document.createElement('p');
  summary.textContent = article.summary;

  const link = document.createElement('a');
  link.href = article.link;
  link.textContent = "Read more";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  section.append(title, img, summary, link);
  container.appendChild(section);
}

function showNextArticle() {
  currentIndex = (currentIndex + 1) % articles.length;
  displayArticle(articles[currentIndex]);
}
