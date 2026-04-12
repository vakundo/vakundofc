const players = [
  {
    name: "Pigg",
    position: "GK",
    number: "#1",
    role: "Cheerleader with gloves",
    bio: "Kahile kahi matra save hero, kahile afai biggest danger. Match ko entertainment package yehi bata start huncha.",
    image: "./assets/pig.png",
    initial: "P",
    pitch: { x: "50%", y: "88%" }
  },
  {
    name: "Vasco",
    position: "CB",
    number: "#36",
    role: "Gandu coder hacker",
    bio: "Sadhai ping issue ko complain. Run lina ali slow, tara opinion ra bakchodi chai high speed connection ma.",
    image: "./assets/vascoanimated.png",
    initial: "V",
    pitch: { x: "39%", y: "74%" }
  },
  {
    name: "Humble",
    position: "CB",
    number: "#11",
    role: "Pass ko ashh",
    bio: "Malai pass chahiyo bhanne line usko built-in soundtrack ho. Confidence cha, subtlety chaina.",
    image: "./assets/humbleanimated.png",
    initial: "H",
    pitch: { x: "61%", y: "74%" }
  },
  {
    name: "Mango",
    position: "LB",
    number: "#3",
    role: "Finishing equals missing",
    bio: "Goal hanne kura dherai garcha, miss pani garcha, tara left side ko engine chai genuinely dangerous cha.",
    image: "./assets/mangoanimated.png",
    initial: "M",
    pitch: { x: "18%", y: "72%" }
  },
  {
    name: "Jagdish",
    position: "RB",
    number: "#23",
    role: "Pace cha, brain chhaina",
    bio: "Sabai role ma nachdai hidne. Right side ma running, shouting, ra pure chaos ko trusted source.",
    image: "./assets/jagdishanimated.png",
    initial: "J",
    pitch: { x: "82%", y: "72%" }
  },
  {
    name: "Adarsha",
    position: "LDM",
    number: "#10",
    role: "Tattii dribbler",
    bio: "EU server ko ambassador. Midfield ma attitude dherai, avatar aile waiting room ma.",
    image: null,
    initial: "A",
    pitch: { x: "29%", y: "54%" }
  },
  {
    name: "Pramod",
    position: "RDM",
    number: "#8",
    role: "Opponent ko playmaker",
    bio: "Pass diyera afai commentary dincha. Calm dekhincha, tara game ko script change garna sakcha.",
    image: "./assets/pramodanimated.png",
    initial: "P",
    pitch: { x: "69%", y: "54%" }
  },
  {
    name: "Nasty",
    position: "CAM",
    number: "#7",
    role: "Guiyee controller",
    bio: "Controller bigryo bhanne bahana ready. Mood milayo bhane skill, nutmeg, ra disrespect sabai available.",
    image: "./assets/nastyanimated.png",
    initial: "N",
    pitch: { x: "50%", y: "40%" }
  },
  {
    name: "Kiran",
    position: "LW",
    number: "#9",
    role: "Finishing system crash",
    bio: "Spin garepachi teammate dekhdaina. PC shutdown chance ra miracle moment chance praya same huncha.",
    image: null,
    initial: "K",
    pitch: { x: "16%", y: "22%" }
  },
  {
    name: "Hyozu",
    position: "RW",
    number: "#69",
    role: "Double tap tap",
    bio: "Kabhi side quest, kabhi wing terror. Avatar aauna baaki cha, vibe already locked in.",
    image: null,
    initial: "H",
    pitch: { x: "84%", y: "22%" }
  },
  {
    name: "Sajan",
    position: "ST",
    number: "#99",
    role: "Indecisive striker",
    bio: "Run line ulto hunchha, confidence sidha hunchha. Goal chai kahile hero, kahile mystery.",
    image: null,
    initial: "S",
    pitch: { x: "50%", y: "14%" }
  }
];

const rosterList = document.getElementById("roster-list");
const spotlightFigure = document.getElementById("spotlight-figure");
const spotlightPosition = document.getElementById("spotlight-position");
const spotlightNumber = document.getElementById("spotlight-number");
const spotlightName = document.getElementById("spotlight-name");
const spotlightRole = document.getElementById("spotlight-role");
const spotlightBio = document.getElementById("spotlight-bio");
const pitchNodes = document.getElementById("pitch-nodes");

let activePlayer = players[7];

function renderSpotlight(player) {
  spotlightPosition.textContent = player.position;
  spotlightNumber.textContent = player.number;
  spotlightName.textContent = player.name;
  spotlightRole.textContent = player.role;
  spotlightBio.textContent = player.bio;

  if (player.image) {
    spotlightFigure.innerHTML = `<img src="${player.image}" alt="${player.name} avatar" />`;
  } else {
    spotlightFigure.innerHTML = `<div class="spotlight-placeholder">${player.initial}</div>`;
  }
}

function renderRoster() {
  rosterList.innerHTML = "";

  players.forEach((player) => {
    const button = document.createElement("button");
    button.className = "roster-button";
    if (player.name === activePlayer.name) button.classList.add("is-active");

    const thumb = player.image
      ? `<div class="roster-thumb"><img src="${player.image}" alt="${player.name} avatar" /></div>`
      : `<div class="roster-thumb placeholder">${player.initial}</div>`;

    button.innerHTML = `
      ${thumb}
      <div class="roster-copy">
        <strong>${player.name}</strong>
        <span>${player.role}</span>
      </div>
      <div class="roster-meta">
        <b>${player.number}</b>
        <small>${player.position}</small>
      </div>
    `;

    button.addEventListener("click", () => {
      activePlayer = player;
      renderSpotlight(player);
      renderRoster();
    });

    rosterList.appendChild(button);
  });
}

function renderPitch() {
  pitchNodes.innerHTML = players
    .map(
      (player) => `
        <div class="pitch-node" style="--x:${player.pitch.x}; --y:${player.pitch.y};">
          <div class="pitch-node-badge">${player.number.replace("#", "")}</div>
          <strong>${player.name}</strong>
          <span>${player.position}</span>
        </div>
      `
    )
    .join("");
}

renderSpotlight(activePlayer);
renderRoster();
renderPitch();
