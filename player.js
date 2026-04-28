const players = [
  {
    name: "Pigg",
    position: "GK",
    number: "#1",
    role: "Cheerleader with gloves",
    bio: "Kahile kahi matra save hero, kahile afai biggest danger. Match ko entertainment package yehi bata start huncha.",
    image: "./assets/pig.png",
    initial: "P",
    ovr: 72,
    stats: { pace: 45, shooting: 30, passing: 58, dribbling: 42, defending: 55, physical: 68 },
    traits: [
      { icon: "\u{1F9E4}", title: "Glove Theatrics", desc: "Every save is a dramatic performance worthy of an Oscar." },
      { icon: "\u{1F3AD}", title: "Entertainment First", desc: "The crowd comes for the match, stays for the goalkeeper show." },
      { icon: "\u{1F4A5}", title: "Self-Destruction Mode", desc: "Sometimes the biggest threat in his own box." },
      { icon: "\u{1F60E}", title: "Confidence Overload", desc: "Saves one shot, acts like prime Neuer for the rest of the week." }
    ],
    moments: [
      { label: "Legendary", title: "The Triple Save", desc: "Saved three shots in a row, then let in the fourth from half-line. Peak entertainment." },
      { label: "Classic", title: "Wrong Side Dive", desc: "Dived left, ball went right, somehow still saved it with his foot. Nobody knows how." },
      { label: "Chaos", title: "Sweeper Keeper Gone Wrong", desc: "Tried to play sweeper keeper, ended up in the opponent's half. Goal was empty for 10 seconds." }
    ]
  },
  {
    name: "Vasco",
    position: "CB",
    number: "#36",
    role: "Gandu coder hacker",
    bio: "Sadhai ping issue ko complain. Run lina ali slow, tara opinion ra bakchodi chai high speed connection ma.",
    image: "./assets/vascoanimated.png",
    initial: "V",
    ovr: 76,
    stats: { pace: 52, shooting: 38, passing: 62, dribbling: 48, defending: 74, physical: 70 },
    traits: [
      { icon: "\u{1F4BB}", title: "Code & Defend", desc: "Debugging by day, tackling by evening. Both involve fixing other people's mistakes." },
      { icon: "\u{1F4F6}", title: "Ping Complainer", desc: "If there's lag, Vasco will find it and blame it for everything." },
      { icon: "\u{1F9E0}", title: "Big Brain Plays", desc: "Overthinks every pass like it's a system architecture decision." },
      { icon: "\u{1F680}", title: "Slow But Steady", desc: "Pace of a turtle, confidence of a Ferrari." }
    ],
    moments: [
      { label: "Epic", title: "The Lag Goal", desc: "Scored an own goal and blamed it on 200ms ping. The match was offline." },
      { label: "Genius", title: "Tactical Masterclass", desc: "Predicted the opponent's run 5 seconds early. Standing in the right place by pure accident." },
      { label: "Funny", title: "Alt+Tab Incident", desc: "Minimized the game to check code, came back to find 2 goals conceded." }
    ]
  },
  {
    name: "Humble",
    position: "CB",
    number: "#11",
    role: "Pass ko ashh",
    bio: "Malai pass chahiyo bhanne line usko built-in soundtrack ho. Confidence cha, subtlety chaina.",
    image: "./assets/humbleanimated.png",
    initial: "H",
    ovr: 74,
    stats: { pace: 55, shooting: 42, passing: 70, dribbling: 50, defending: 72, physical: 66 },
    traits: [
      { icon: "\u{1F4E2}", title: "Pass Demander", desc: "\"PASS! PASS! MALAI PASS!\" echoes in everyone's nightmares." },
      { icon: "\u{1F3AF}", title: "Through Ball Vision", desc: "Sees passes nobody else sees. Whether they work is another question." },
      { icon: "\u{1F64F}", title: "Humble by Name Only", desc: "The most ironic name in football history." },
      { icon: "\u{1F5E3}\u{FE0F}", title: "Voice of the Pitch", desc: "If volume was a stat, he'd be 99 OVR." }
    ],
    moments: [
      { label: "Iconic", title: "The 40-Yard Pass to Nobody", desc: "Launched a beautiful through ball. Zero teammates in that postal code." },
      { label: "Drama", title: "Pass Denied Meltdown", desc: "Didn't receive a pass for 3 minutes. Delivered a full TED talk about teamwork." },
      { label: "Clutch", title: "Last Minute Clearance", desc: "Cleared the ball off the line. Celebrated like he won the World Cup." }
    ]
  },
  {
    name: "Mango",
    position: "LB",
    number: "#3",
    role: "Finishing equals missing",
    bio: "Goal hanne kura dherai garcha, miss pani garcha, tara left side ko engine chai genuinely dangerous cha.",
    image: "./assets/mangoanimated.png",
    initial: "M",
    ovr: 78,
    stats: { pace: 80, shooting: 45, passing: 65, dribbling: 72, defending: 68, physical: 74 },
    traits: [
      { icon: "\u{1F525}", title: "Left Side Engine", desc: "Runs up and down the left flank like his life depends on it." },
      { icon: "\u{274C}", title: "Finishing Allergic", desc: "Creates 10 chances, converts 0. Consistency is key." },
      { icon: "\u{26A1}", title: "Turbo Mode", desc: "When Mango gets the ball and starts running, just get out of the way." },
      { icon: "\u{1F3C3}", title: "Overlap King", desc: "The overlap run is his signature move. The shot after? Not so much." }
    ],
    moments: [
      { label: "Heartbreak", title: "Open Goal, Empty Net, Miss", desc: "2 meters from goal. No keeper. Somehow hit the corner flag." },
      { label: "Beast", title: "The 90th Minute Sprint", desc: "Ran from his own box to the opponent's in 8 seconds. Then passed to nobody." },
      { label: "Mango Classic", title: "Hat-trick of Misses", desc: "3 clear chances, 3 spectacular misses. Each one more creative than the last." }
    ]
  },
  {
    name: "Jagdish",
    position: "RB",
    number: "#23",
    role: "Pace cha, Goal chhaina",
    bio: "Sabai role ma nachdai hidne. Right side ma running, shouting, ra pure chaos ko trusted source.",
    image: "./assets/jagdishanimated.png",
    initial: "J",
    ovr: 75,
    stats: { pace: 82, shooting: 35, passing: 58, dribbling: 60, defending: 65, physical: 72 },
    traits: [
      { icon: "\u{1F3C3}\u{200D}\u{2642}\u{FE0F}", title: "Speed Merchant", desc: "Fastest player on the team. Direction? That's a different conversation." },
      { icon: "\u{1F4A8}", title: "Chaos Agent", desc: "Wherever Jagdish goes, chaos follows. For both teams." },
      { icon: "\u{1F5E3}\u{FE0F}", title: "Voice Commander", desc: "Shouts instructions louder than anyone. Follows none of them himself." },
      { icon: "\u{1F3B2}", title: "Random Role Player", desc: "Starts at RB, ends up as ST. Nobody questions it anymore." }
    ],
    moments: [
      { label: "Speed", title: "The Usain Bolt Run", desc: "Outpaced everyone on the pitch. Ran straight past the ball." },
      { label: "Classic", title: "Position: Everywhere", desc: "GPS data showed he covered every position. None of them well." },
      { label: "Legend", title: "Shot into Orbit", desc: "Took a shot from 30 yards. Ball hasn't been found yet." }
    ]
  },
  {
    name: "Adarsha",
    position: "LDM",
    number: "#10",
    role: "Tattii dribbler",
    bio: "EU server ko ambassador. Midfield ma attitude dherai, avatar aile waiting room ma.",
    image: null,
    initial: "A",
    ovr: 77,
    stats: { pace: 65, shooting: 55, passing: 72, dribbling: 78, defending: 60, physical: 58 },
    traits: [
      { icon: "\u{1F30D}", title: "EU Server Ambassador", desc: "Plays on EU servers from Nepal. Lag is his permanent teammate." },
      { icon: "\u{1F57A}", title: "Skill Move Spammer", desc: "Does 47 skill moves, loses the ball on the 48th. Every. Single. Time." },
      { icon: "\u{1F60E}", title: "Attitude FC", desc: "More attitude per square inch than any other midfielder." },
      { icon: "\u{1F47B}", title: "Ghost Avatar", desc: "Still doesn't have a proper avatar. The mystery continues." }
    ],
    moments: [
      { label: "Skill", title: "The Nutmeg Trilogy", desc: "Nutmegged the same player 3 times. Got tackled by a different one each time." },
      { label: "EU Moment", title: "300 Ping Masterclass", desc: "On 300 ping, still attempted a rainbow flick. It worked. Nobody saw it because he was 2 seconds behind." },
      { label: "Attitude", title: "The Walk-Off", desc: "After a bad tackle, slow-walked to midfield. Team was counter-attacking without him." }
    ]
  },
  {
    name: "Pramod",
    position: "RDM",
    number: "#8",
    role: "Opponent ko playmaker",
    bio: "Pass diyera afai commentary dincha. Calm dekhincha, tara game ko script change garna sakcha.",
    image: "./assets/pramodanimated.png",
    initial: "P",
    ovr: 75,
    stats: { pace: 58, shooting: 50, passing: 74, dribbling: 55, defending: 66, physical: 62 },
    traits: [
      { icon: "\u{1F399}\u{FE0F}", title: "Self-Commentator", desc: "Narrates his own passes. \"Beautiful ball by Pramod... and it's intercepted.\"" },
      { icon: "\u{1F60C}", title: "Calm Chaos", desc: "Looks calm. Inside, he's already written 3 alternate match scripts." },
      { icon: "\u{1F91D}", title: "Assist for Opponents", desc: "His passes sometimes find opponents better than teammates." },
      { icon: "\u{1F4DD}", title: "Script Changer", desc: "When he's focused, he can genuinely change the flow of the game." }
    ],
    moments: [
      { label: "Commentary", title: "Self-Narrated Assist", desc: "Described his own through ball in real-time. Ball actually reached the striker. Historic." },
      { label: "Oops", title: "The Perfect Pass... Backwards", desc: "Played the most technically perfect pass of the season. To the opponent's striker." },
      { label: "Clutch", title: "Last Minute Script Flip", desc: "Changed the entire game plan in the 89th minute. Team scored from it." }
    ]
  },
  {
    name: "Nasty",
    position: "CAM",
    number: "#7",
    role: "Guiyee controller",
    bio: "Controller bigryo bhanne bahana ready. Mood milayo bhane skill, nutmeg, ra disrespect sabai available.",
    image: "./assets/nastyanimated.png",
    initial: "N",
    ovr: 82,
    stats: { pace: 70, shooting: 75, passing: 78, dribbling: 85, defending: 38, physical: 55 },
    traits: [
      { icon: "\u{1F3AE}", title: "Controller Blame Expert", desc: "Controller always broken. Skill always available. Make it make sense." },
      { icon: "\u{2728}", title: "Mood Player", desc: "When the mood hits, he's the best player on the pitch. When it doesn't, he's AFK." },
      { icon: "\u{1F480}", title: "Disrespect Merchant", desc: "Nutmegs are not enough. He adds a skill move after to make it personal." },
      { icon: "\u{1F451}", title: "Creative Genius", desc: "The passes and moves he sees are from a different dimension." }
    ],
    moments: [
      { label: "Nasty", title: "The Triple Nutmeg", desc: "Nutmegged 3 players in one run. The fourth one rage-quit." },
      { label: "Excuse", title: "Controller Malfunction", desc: "Missed a sitter and unplugged the controller to prove it was broken. It wasn't." },
      { label: "Masterclass", title: "Solo Goal of the Season", desc: "Dribbled past the entire team. Even the keeper got an ankle-breaker." }
    ]
  },
  {
    name: "Kiran",
    position: "LW",
    number: "#9",
    role: "Finishing system crash",
    bio: "Spin garepachi teammate dekhdaina. PC shutdown chance ra miracle moment chance praya same huncha.",
    image: "./assets/kiran.png",
    initial: "K",
    ovr: 79,
    stats: { pace: 78, shooting: 68, passing: 55, dribbling: 76, defending: 30, physical: 60 },
    traits: [
      { icon: "\u{1F300}", title: "Spin to Win", desc: "Spins so much, he forgets which direction the goal is." },
      { icon: "\u{1F4BB}", title: "PC Crash Artist", desc: "His PC crashes at the most clutch moments. Coincidence? We think not." },
      { icon: "\u{2728}", title: "Miracle Merchant", desc: "Every 10th attempt is a genuine moment of magic. The other 9? Don't ask." },
      { icon: "\u{1F441}\u{FE0F}", title: "Tunnel Vision", desc: "Once he starts a run, teammates become invisible." }
    ],
    moments: [
      { label: "Miracle", title: "The PC Crash Goal", desc: "PC crashed mid-shot. The shot still went in. Divine intervention confirmed." },
      { label: "Spin", title: "360 No-Scope Miss", desc: "Did a full 360 spin, shot on goal. Hit the corner flag. But it looked cool." },
      { label: "Clutch", title: "Last Second Winner", desc: "After missing 14 shots, scored the winner in injury time. Redemption arc complete." }
    ]
  },
  {
    name: "Hyozu",
    position: "RW",
    number: "#69",
    role: "Double tap tap",
    bio: "Kabhi side quest, kabhi wing terror. Avatar aauna baaki cha, vibe already locked in.",
    image: "./assets/taptap.png",
    initial: "H",
    ovr: 76,
    stats: { pace: 74, shooting: 60, passing: 62, dribbling: 70, defending: 35, physical: 56 },
    traits: [
      { icon: "\u{1F3AE}", title: "Double Tap Specialist", desc: "The double tap is muscle memory. What happens after is chaos theory." },
      { icon: "\u{1F30C}", title: "Side Quest Master", desc: "While the team attacks, Hyozu is on a completely different mission." },
      { icon: "\u{1F47B}", title: "Avatar Pending", desc: "The mysterious figure whose final form is still loading." },
      { icon: "\u{26A1}", title: "Wing Terror Mode", desc: "When activated, the right wing becomes a danger zone." }
    ],
    moments: [
      { label: "Tap Tap", title: "The Double Tap Winner", desc: "Double tapped at the exact right moment. Ball flew into the top corner. Calculated? Absolutely not." },
      { label: "Side Quest", title: "AFK Adventure", desc: "Was on a side quest for 5 minutes. Team didn't notice. Neither did he." },
      { label: "Vibe", title: "The Vibe Check Goal", desc: "Scored the most casual goal ever. Walked away without celebrating. Cold." }
    ]
  },
  {
    name: "Sajan",
    position: "ST",
    number: "#99",
    role: "Indecisive striker",
    bio: "Run line ulto hunchha, confidence sidha hunchha. Goal chai kahile hero, kahile mystery.",
    image: "./assets/sajan.png",
    initial: "S",
    ovr: 80,
    stats: { pace: 72, shooting: 78, passing: 60, dribbling: 68, defending: 28, physical: 70 },
    traits: [
      { icon: "\u{1F914}", title: "Decision Paralysis", desc: "Shoot? Pass? Dribble? By the time he decides, the defender decides for him." },
      { icon: "\u{1F3AF}", title: "Clinical When Confident", desc: "When confidence is up, every shot is a goal. When it's down, every shot is a throw-in." },
      { icon: "\u{1F504}", title: "Reverse Runs", desc: "Runs the wrong way with such conviction that defenders get confused too." },
      { icon: "\u{1F31F}", title: "Hero or Mystery", desc: "There's no in-between. Either the MOTM or the invisible man." }
    ],
    moments: [
      { label: "Hero", title: "The Hat-Trick", desc: "Scored 3 goals in 10 minutes. Spent the next 80 minutes missing everything." },
      { label: "Mystery", title: "The Invisible Match", desc: "Played a full 90 minutes. Zero touches. Some say he wasn't even connected." },
      { label: "Drama", title: "Offside by a Toe", desc: "Scored the winner. VAR said offside by 2mm. The celebrations were already done." }
    ]
  }
];

function getPlayerFromURL() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  return players.find((p) => p.name.toLowerCase() === (name || "").toLowerCase()) || players[0];
}

const player = getPlayerFromURL();

function renderPlayerCard() {
  document.title = `${player.name} — Vakundo FC`;

  document.getElementById("player-ovr").textContent = player.ovr;
  document.getElementById("player-pos-badge").textContent = player.position;
  document.getElementById("player-card-name").textContent = player.name.toUpperCase();

  const art = document.getElementById("player-card-art");
  if (player.image) {
    art.innerHTML = `<img src="${player.image}" alt="${player.name}" />`;
  } else {
    art.innerHTML = `<div class="card-placeholder">${player.initial}</div>`;
  }

  const statKeys = ["pace", "shooting", "passing", "dribbling", "defending", "physical"];
  const shortLabels = ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"];
  const cardStats = document.getElementById("player-card-stats");
  cardStats.innerHTML = statKeys
    .map(
      (key, i) =>
        `<div class="card-stat"><span class="card-stat-val">${player.stats[key]}</span><span class="card-stat-label">${shortLabels[i]}</span></div>`
    )
    .join("");
}

function renderPlayerIntro() {
  document.getElementById("player-number-bg").textContent = player.number;
  document.getElementById("player-position-pill").textContent = player.position;
  document.getElementById("player-number-pill").textContent = player.number;
  document.getElementById("player-title").textContent = player.name;
  document.getElementById("player-tagline").textContent = player.role;
  document.getElementById("player-bio-text").textContent = player.bio;
}

function renderStatBars() {
  const container = document.getElementById("stat-bars");
  const statKeys = ["pace", "shooting", "passing", "dribbling", "defending", "physical"];
  const labels = ["Pace", "Shooting", "Passing", "Dribbling", "Defending", "Physical"];

  container.innerHTML = statKeys
    .map((key, i) => {
      const val = player.stats[key];
      const tier = val >= 70 ? "high" : val >= 50 ? "mid" : "low";
      return `
        <div class="stat-row">
          <span class="stat-label">${labels[i]}</span>
          <div class="stat-track">
            <div class="stat-fill ${tier}" style="--fill: ${val / 100}" data-fill="${val / 100}"></div>
          </div>
          <span class="stat-value">${val}</span>
        </div>`;
    })
    .join("");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      container.querySelectorAll(".stat-fill").forEach((el) => {
        el.style.transform = `scaleX(${el.dataset.fill})`;
        el.classList.add("animate");
      });
    });
  });
}

function drawRadar() {
  const canvas = document.getElementById("radar-canvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const size = 320;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const maxR = 120;
  const labels = ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"];
  const vals = [
    player.stats.pace,
    player.stats.shooting,
    player.stats.passing,
    player.stats.dribbling,
    player.stats.defending,
    player.stats.physical
  ];
  const n = labels.length;

  for (let ring = 1; ring <= 5; ring++) {
    const r = (maxR * ring) / 5;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(20,17,15,0.08)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
    ctx.strokeStyle = "rgba(20,17,15,0.06)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const idx = i % n;
    const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
    const r = (vals[idx] / 100) * maxR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
  grad.addColorStop(0, "rgba(255,106,72,0.35)");
  grad.addColorStop(1, "rgba(222,56,31,0.15)");
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = "rgba(222,56,31,0.7)";
  ctx.lineWidth = 2;
  ctx.stroke();

  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (vals[i] / 100) * maxR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#de381f";
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  ctx.font = "bold 11px sans-serif";
  ctx.fillStyle = "#6f645b";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const lx = cx + (maxR + 22) * Math.cos(angle);
    const ly = cy + (maxR + 22) * Math.sin(angle);
    ctx.fillText(`${labels[i]} ${vals[i]}`, lx, ly);
  }
}

function renderTraits() {
  const grid = document.getElementById("traits-grid");
  grid.innerHTML = player.traits
    .map(
      (t, i) => `
      <div class="trait-card" style="animation-delay: ${i * 0.08}s">
        <div class="trait-icon">${t.icon}</div>
        <div class="trait-info">
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
        </div>
      </div>`
    )
    .join("");
}

function renderMoments() {
  const timeline = document.getElementById("moments-timeline");
  timeline.innerHTML = player.moments
    .map(
      (m, i) => `
      <div class="moment-card" style="animation-delay: ${i * 0.1}s">
        <span class="moment-label">${m.label}</span>
        <h4>${m.title}</h4>
        <p>${m.desc}</p>
      </div>`
    )
    .join("");
}

function renderPlayerNav() {
  const strip = document.getElementById("player-nav-strip");
  strip.innerHTML = players
    .map((p) => {
      const isCurrent = p.name === player.name;
      const avatar = p.image
        ? `<img src="${p.image}" alt="${p.name}" />`
        : `<span class="nav-placeholder">${p.initial}</span>`;
      return `
        <a class="nav-player ${isCurrent ? "is-current" : ""}" href="./player.html?name=${encodeURIComponent(p.name)}">
          <div class="nav-player-avatar">${avatar}</div>
          <strong>${p.name}</strong>
          <small>${p.position}</small>
        </a>`;
    })
    .join("");
}

function spawnParticles() {
  const field = document.getElementById("particle-field");
  for (let i = 0; i < 18; i++) {
    const dot = document.createElement("div");
    dot.className = "particle";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.animationDelay = Math.random() * 8 + "s";
    dot.style.animationDuration = 6 + Math.random() * 6 + "s";
    dot.style.width = 2 + Math.random() * 4 + "px";
    dot.style.height = dot.style.width;
    dot.style.background = Math.random() > 0.5
      ? "rgba(255,191,105,0.45)"
      : "rgba(255,106,72,0.35)";
    field.appendChild(dot);
  }
}

function setupTabs() {
  const bar = document.getElementById("tabs-bar");
  const btns = bar.querySelectorAll(".tab-btn");
  const indicator = document.getElementById("tab-indicator");

  function activateTab(btn) {
    btns.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    indicator.style.left = btn.offsetLeft + "px";
    indicator.style.width = btn.offsetWidth + "px";

    document.querySelectorAll(".tab-panel").forEach((p) => {
      p.classList.remove("is-visible");
      p.style.animation = "none";
    });

    const target = document.getElementById("panel-" + btn.dataset.tab);
    if (target) {
      target.classList.add("is-visible");
      target.style.animation = "none";
      void target.offsetWidth;
      target.style.animation = "panelFadeIn 0.45s ease both";
    }

    if (btn.dataset.tab === "stats") {
      renderStatBars();
      drawRadar();
    }
  }

  btns.forEach((btn) => btn.addEventListener("click", () => activateTab(btn)));

  requestAnimationFrame(() => {
    const active = bar.querySelector(".tab-btn.is-active");
    if (active) {
      indicator.style.left = active.offsetLeft + "px";
      indicator.style.width = active.offsetWidth + "px";
    }
  });
}

function initPlayerCardTilt() {
  const card = document.getElementById("player-card");
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0) scale(1)";
  });
}

renderPlayerCard();
renderPlayerIntro();
renderStatBars();
drawRadar();
renderTraits();
renderMoments();
renderPlayerNav();
spawnParticles();
setupTabs();
initPlayerCardTilt();
