const url = './data/members.json';
const cards = document.querySelector('#cards');

const getMemberData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayMembers = (members) => {
  members.forEach((member, index) => {
    if (index === 0) {
      renderMember(member, true);
    } else {
      requestIdleCallback(() => renderMember(member, false));
    }
  });
};

function renderMember(member, isFirst = false) {
  const card = document.createElement('section');

  const businessName = document.createElement('h2');
  businessName.textContent = member.name;

  const membership = document.createElement('h3');
  membership.textContent = member.membershipLevel;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const portrait = document.createElement('img');
  portrait.src = member.image;
  portrait.alt = `Portrait of ${member.name}`;
  portrait.width = 128;
  portrait.height = 128;

  if (!isFirst) {
    portrait.loading = 'lazy';
  }

  const info = document.createElement('div');
  info.classList.add('info');

  const email = document.createElement('p');
  email.textContent = `EMAIL: ${member.email}`;

  const phone = document.createElement('p');
  phone.textContent = `PHONE: ${member.phone}`;

  const website = document.createElement('a');
  website.textContent = `URL: ${member.website}`;
  website.href = member.website;
  website.target = "_blank";
  website.rel = "noopener noreferrer";

  info.append(email, phone, website);
  cardBody.append(portrait, info);
  card.append(businessName, membership, cardBody);
  cards.appendChild(card);
}

getMemberData();

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {
  cards.classList.add('grid');
  cards.classList.remove('list');
});

listButton.addEventListener('click', () => {
  cards.classList.add('list');
  cards.classList.remove('grid');
});
