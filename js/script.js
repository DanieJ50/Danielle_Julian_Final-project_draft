@import url("https://fonts.googleapis.com/css2?family=Chewy&family=Nunito:wght@500;600;700;800;900&display=swap");

:root {
  --berry: #d94c6b;
  --berry-dark: #8e193c;
  --pink: #f58ba4;
  --pink-soft: #ffe5ec;
  --cream: #fff9ef;
  --cream-deep: #ffe8bd;
  --green: #86a94b;
  --green-soft: #eff7dd;
  --orange: #df7b35;
  --chocolate: #5f321f;
  --ink: #43251f;
  --muted: #755b55;
  --white: #ffffff;
  --border: rgba(217, 76, 107, 0.32);
  --shadow: 0 16px 38px rgba(116, 45, 58, 0.13);
  --display: "Chewy", "Trebuchet MS", cursive;
  --body: "Nunito", "Arial Rounded MT Bold", Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 110px;
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--ink);
  font-family: var(--body);
  background-color: #fff8fb;
  background-image:
    radial-gradient(circle at 12px 12px, rgba(245, 139, 164, 0.11) 0 3px, transparent 4px),
    radial-gradient(circle at 42px 38px, rgba(134, 169, 75, 0.08) 0 2px, transparent 3px);
  background-size: 62px 62px;
}

button,
input {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

img {
  display: block;
  max-width: 100%;
}

button {
  cursor: pointer;
}

.skip-link {
  position: fixed;
  z-index: 9999;
  left: 16px;
  top: -80px;
  padding: 10px 14px;
  border-radius: 12px;
  color: var(--white);
  background: var(--berry-dark);
}

.skip-link:focus {
  top: 12px;
}

.berry-sprinkles span {
  position: fixed;
  z-index: -1;
  opacity: 0.14;
  font-size: clamp(1.3rem, 3vw, 2.5rem);
  animation: float-sprinkle 8s ease-in-out infinite;
}

.berry-sprinkles span:nth-child(1) { left: 2%; top: 11%; }
.berry-sprinkles span:nth-child(2) { right: 5%; top: 20%; animation-delay: -2s; }
.berry-sprinkles span:nth-child(3) { left: 4%; top: 56%; animation-delay: -4s; }
.berry-sprinkles span:nth-child(4) { right: 6%; top: 72%; animation-delay: -1s; }
.berry-sprinkles span:nth-child(5) { left: 18%; top: 90%; animation-delay: -5s; }
.berry-sprinkles span:nth-child(6) { right: 23%; top: 42%; animation-delay: -3s; }

@keyframes float-sprinkle {
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-16px) rotate(5deg); }
}

.site-header {
  position: sticky;
  z-index: 1000;
  top: 0;
  padding: 14px 20px 0;
  background: linear-gradient(to bottom, rgba(255, 248, 251, 0.98), rgba(255, 248, 251, 0.88), transparent);
  backdrop-filter: blur(14px);
}

.navbar {
  width: min(1280px, 100%);
  min-height: 76px;
  margin: 0 auto;
  padding: 10px 16px 10px 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  border: 2px solid var(--border);
  border-radius: 28px;
  background: rgba(255, 253, 249, 0.96);
  box-shadow: 0 8px 26px rgba(116, 45, 58, 0.1);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--berry);
  font-family: var(--display);
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  text-decoration: none;
  white-space: nowrap;
}

.brand-fruit {
  font-size: 1.45em;
  transform: rotate(-8deg);
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: clamp(14px, 2.4vw, 38px);
}

.nav-link {
  position: relative;
  padding: 10px 2px;
  color: var(--ink);
  font-weight: 800;
  text-decoration: none;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 0;
  height: 3px;
  border-radius: 999px;
  background: var(--berry);
  transform: translateX(-50%);
  transition: width 180ms ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--berry);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.favorites-button,
.menu-toggle {
  position: relative;
  border: 0;
  color: var(--white);
  background: var(--berry);
}

.favorites-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.8rem;
  transition: transform 160ms ease;
}

.favorites-button:hover {
  transform: rotate(-5deg) scale(1.06);
}

.favorites-count {
  position: absolute;
  right: -5px;
  top: -5px;
  min-width: 22px;
  height: 22px;
  padding: 0 5px;
  display: grid;
  place-items: center;
  border: 2px solid var(--white);
  border-radius: 999px;
  color: var(--berry-dark);
  background: var(--cream-deep);
  font-size: 0.72rem;
  font-weight: 900;
}

.menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  padding: 11px;
  border-radius: 14px;
}

.menu-toggle span {
  display: block;
  height: 3px;
  margin: 4px 0;
  border-radius: 999px;
  background: var(--white);
}

.section-shell {
  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
}

.hero {
  min-height: 690px;
  margin-top: 24px;
  padding: clamp(36px, 6vw, 72px);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(34px, 5vw, 74px);
  align-items: center;
  overflow: hidden;
  border: 3px solid var(--border);
  border-radius: 36px;
  background:
    radial-gradient(circle at 12% 14%, rgba(255,255,255,0.92), transparent 35%),
    linear-gradient(135deg, #fffdf7 0%, #fff3f7 57%, #f3f8e7 100%);
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--berry-dark);
  font-size: 0.83rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-family: var(--display);
  line-height: 0.88;
}

.hero-small,
.hero-big,
.hero-studio {
  display: block;
}

.hero-small {
  margin-bottom: 10px;
  color: var(--chocolate);
  font-size: clamp(2.3rem, 4.2vw, 4.8rem);
}

.hero-big {
  color: var(--berry);
  font-size: clamp(4.8rem, 9.4vw, 9.6rem);
  letter-spacing: 0.01em;
  text-shadow: 5px 5px 0 var(--white), 9px 10px 0 rgba(245, 139, 164, 0.27);
}

.hero-studio {
  margin-left: 18%;
  color: var(--pink);
  font-size: clamp(4rem, 7.5vw, 7.8rem);
  text-shadow: 5px 5px 0 var(--white);
}

.hero-description {
  max-width: 650px;
  margin: 28px 0 0;
  color: var(--muted);
  font-size: clamp(1.05rem, 1.7vw, 1.25rem);
  font-weight: 700;
  line-height: 1.65;
}

.hero-actions {
  max-width: 700px;
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
}

.pill-button,
.tiny-button,
.filter-chip,
.vote-button {
  border: 0;
  font-weight: 900;
  transition: transform 170ms ease, box-shadow 170ms ease, filter 170ms ease;
}

.pill-button {
  min-height: 52px;
  padding: 12px 19px;
  border: 2px solid rgba(255,255,255,0.68);
  border-radius: 999px;
  box-shadow: 0 7px 0 rgba(90, 35, 45, 0.14);
}

.pill-button:hover,
.vote-button:hover,
.tiny-button:hover,
.filter-chip:hover {
  transform: translateY(-3px);
  filter: saturate(1.08);
}

.pill-button:active,
.vote-button:active {
  transform: translateY(3px);
  box-shadow: 0 3px 0 rgba(90, 35, 45, 0.15);
}

.berry { color: var(--white); background: var(--berry); }
.green { color: var(--white); background: var(--green); }
.cream { color: var(--chocolate); background: var(--cream-deep); }
.pink { color: var(--berry-dark); background: var(--pink-soft); }

.hero-mascot-card {
  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 3px solid var(--border);
  border-radius: 32px;
  background-color: #ffe8ee;
  box-shadow: inset 0 0 0 12px rgba(255,255,255,0.48);
}

.gingham {
  position: absolute;
  inset: 0;
  opacity: 0.55;
  background-image:
    linear-gradient(90deg, rgba(255,255,255,0.65) 50%, transparent 50%),
    linear-gradient(rgba(255,255,255,0.65) 50%, transparent 50%);
  background-size: 44px 44px;
}

.hero-mascot-card img {
  position: relative;
  z-index: 2;
  width: min(85%, 490px);
  border-radius: 26px;
  mix-blend-mode: multiply;
  filter: drop-shadow(0 22px 22px rgba(116,45,58,0.16));
  animation: mascot-bob 4s ease-in-out infinite;
}

@keyframes mascot-bob {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

.sparkle {
  position: absolute;
  z-index: 3;
  color: var(--berry);
  font-size: 3rem;
  animation: sparkle 1.6s ease-in-out infinite alternate;
}

.sparkle-one { left: 9%; bottom: 14%; }
.sparkle-two { right: 10%; top: 20%; animation-delay: -0.8s; }

@keyframes sparkle {
  from { transform: scale(0.8) rotate(-8deg); opacity: 0.45; }
  to { transform: scale(1.18) rotate(8deg); opacity: 1; }
}

.mascot-speech {
  position: absolute;
  z-index: 4;
  right: 7%;
  top: 8%;
  max-width: 150px;
  padding: 12px 15px;
  border: 2px solid var(--berry);
  border-radius: 18px 18px 18px 4px;
  color: var(--berry-dark);
  background: var(--white);
  font-weight: 900;
  box-shadow: var(--shadow);
}

.craving-section,
.recipes-section,
.battle-section,
.about-section,
.berrybelle-section {
  padding-top: 108px;
}

.section-heading h2,
.about-copy h2,
.profile-copy h2 {
  margin: 0;
  color: var(--chocolate);
  font-family: var(--display);
  font-size: clamp(2.6rem, 5vw, 5.2rem);
  line-height: 1;
}

.section-heading p:not(.eyebrow) {
  color: var(--muted);
  font-size: 1.06rem;
  font-weight: 700;
}

.centered {
  max-width: 840px;
  margin: 0 auto 34px;
  text-align: center;
}

.split {
  margin-bottom: 26px;
  display: flex;
  justify-content: space-between;
  gap: 28px;
  align-items: end;
}

.craving-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.craving-card {
  min-height: 195px;
  padding: 22px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  text-align: left;
  border: 3px solid rgba(255,255,255,0.75);
  border-radius: 28px;
  color: var(--ink);
  box-shadow: var(--shadow);
  transition: transform 190ms ease, box-shadow 190ms ease;
}

.craving-card:hover {
  transform: translateY(-8px) rotate(-0.8deg);
  box-shadow: 0 22px 42px rgba(116, 45, 58, 0.17);
}

.pink-card { background: linear-gradient(145deg, #fff, #ffe4ec); }
.chocolate-card { background: linear-gradient(145deg, #fff, #f8e7db); }
.green-card { background: linear-gradient(145deg, #fff, #eff7dd); }
.orange-card { background: linear-gradient(145deg, #fff, #ffe9d8); }

.craving-illustration {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255,255,255,0.78);
  font-size: 2.6rem;
}

.craving-copy strong,
.craving-copy small {
  display: block;
}

.craving-copy strong {
  color: var(--berry-dark);
  font-family: var(--display);
  font-size: clamp(1.35rem, 2vw, 2rem);
  line-height: 1;
}

.craving-copy small {
  margin-top: 8px;
  color: var(--muted);
  font-weight: 800;
}

.round-arrow {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--white);
  background: var(--berry);
  font-size: 2rem;
}

.recipe-tools {
  display: flex;
  gap: 10px;
  align-items: center;
}

.search-box {
  min-width: 290px;
  min-height: 50px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px solid var(--border);
  border-radius: 999px;
  background: var(--white);
  box-shadow: 0 8px 20px rgba(116,45,58,0.08);
}

.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  color: var(--ink);
  background: transparent;
  font-weight: 700;
}

.tiny-button {
  min-height: 48px;
  padding: 0 16px;
  border-radius: 999px;
  color: var(--berry-dark);
  background: var(--pink-soft);
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.filter-chip {
  padding: 10px 15px;
  border: 2px solid var(--border);
  border-radius: 999px;
  color: var(--berry-dark);
  background: var(--white);
}

.filter-chip.active {
  color: var(--white);
  border-color: var(--berry);
  background: var(--berry);
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.recipe-card {
  position: relative;
  overflow: hidden;
  border: 3px solid var(--border);
  border-radius: 28px;
  background: rgba(255,255,255,0.93);
  box-shadow: var(--shadow);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.recipe-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 24px 46px rgba(116,45,58,0.17);
}

.recipe-card-image {
  height: 250px;
  overflow: hidden;
  background: var(--pink-soft);
}

.recipe-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms ease;
}

.recipe-card:hover .recipe-card-image img {
  transform: scale(1.05);
}

.recipe-card-emoji {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 7rem;
  background: linear-gradient(135deg, var(--pink-soft), var(--cream));
}

.favorite-toggle {
  position: absolute;
  z-index: 3;
  top: 14px;
  right: 14px;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  color: var(--berry);
  background: rgba(255,255,255,0.93);
  font-size: 1.6rem;
  box-shadow: 0 8px 20px rgba(116,45,58,0.13);
}

.favorite-toggle.saved {
  color: var(--white);
  background: var(--berry);
}

.recipe-card-body {
  padding: 22px;
}

.recipe-card-category {
  margin: 0 0 5px;
  color: var(--berry);
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.recipe-card h3 {
  margin: 0;
  color: var(--chocolate);
  font-family: var(--display);
  font-size: 2rem;
  line-height: 1;
}

.recipe-card-description {
  min-height: 50px;
  color: var(--muted);
  font-weight: 700;
  line-height: 1.5;
}

.recipe-card-tags,
.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.tag {
  padding: 6px 9px;
  border-radius: 999px;
  color: var(--berry-dark);
  background: var(--pink-soft);
  font-size: 0.78rem;
  font-weight: 900;
}

.recipe-card-footer {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.open-recipe {
  padding: 10px 16px;
  border: 0;
  border-radius: 999px;
  color: var(--white);
  background: var(--berry);
  font-weight: 900;
}

.recipe-vibe {
  color: var(--green);
  font-weight: 900;
}

.empty-message {
  padding: 34px;
  text-align: center;
  border: 3px dashed var(--border);
  border-radius: 24px;
  color: var(--berry-dark);
  background: var(--cream);
  font-weight: 900;
}

.battle-section {
  position: relative;
}

.battle-banner {
  width: fit-content;
  margin: 0 auto 18px;
  padding: 12px 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 16px 16px 5px 5px;
  color: var(--white);
  background: var(--berry);
  box-shadow: 0 9px 0 rgba(142,25,60,0.16);
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.battle-section h2 em {
  color: var(--berry);
  font-size: 0.55em;
  font-style: normal;
  vertical-align: middle;
}

.battle-board {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;
}

.battle-card {
  position: relative;
  padding: 26px;
  border: 3px solid var(--border);
  border-radius: 32px;
  background: rgba(255,255,255,0.95);
  box-shadow: var(--shadow);
}

.left-battle { background: linear-gradient(145deg, #fff, #fff0f5); }
.right-battle { background: linear-gradient(145deg, #fff, #f4f9e8); }

.battle-image-wrap {
  height: 320px;
  overflow: hidden;
  border-radius: 22px;
  background: var(--cream);
}

.battle-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.battle-card h3 {
  margin: 22px 0 14px;
  color: var(--chocolate);
  font-family: var(--display);
  font-size: clamp(2rem, 3vw, 3.2rem);
  line-height: 1;
}

.battle-card ul {
  min-height: 108px;
  padding: 0;
  list-style: none;
}

.battle-card li {
  margin: 10px 0;
  display: flex;
  gap: 10px;
  color: var(--muted);
  font-weight: 800;
}

.battle-card li::before {
  content: "✓";
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--white);
  background: var(--berry);
  font-size: 0.8rem;
}

.right-battle li::before {
  background: var(--green);
}

.versus-badge {
  position: absolute;
  z-index: 4;
  left: 50%;
  top: 37%;
  width: 94px;
  height: 94px;
  display: grid;
  place-items: center;
  border: 9px double var(--pink-soft);
  border-radius: 50%;
  color: var(--white);
  background: var(--pink);
  box-shadow: var(--shadow);
  font-family: var(--display);
  font-size: 2.3rem;
  transform: translate(-50%, -50%);
}

.vote-button {
  width: 100%;
  min-height: 54px;
  border-radius: 999px;
  font-size: 1.05rem;
}

.vote-button:disabled {
  cursor: default;
  opacity: 0.7;
  transform: none;
}

.vote-meter {
  height: 13px;
  margin-top: 18px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(95,50,31,0.11);
}

.vote-meter span {
  display: block;
  width: 50%;
  height: 100%;
  border-radius: inherit;
  background: var(--berry);
  transition: width 520ms cubic-bezier(.2,.8,.2,1);
}

.right-battle .vote-meter span {
  background: var(--green);
}

.vote-percent {
  margin: 7px 0 0;
  text-align: right;
  color: var(--berry-dark);
  font-weight: 900;
}

.battle-footer {
  margin-top: 22px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border: 3px solid var(--border);
  border-radius: 28px;
  background: var(--white);
  box-shadow: var(--shadow);
}

.mini-berrybelle {
  display: flex;
  gap: 16px;
  align-items: center;
}

.mini-berrybelle img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border: 3px solid var(--border);
  border-radius: 24px;
}

.mini-berrybelle p {
  margin: 0;
  color: var(--berry-dark);
  font-weight: 900;
}

.about-card,
.berrybelle-profile {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(30px, 5vw, 70px);
  align-items: center;
  padding: clamp(30px, 5vw, 64px);
  border: 3px solid var(--border);
  border-radius: 34px;
  background: linear-gradient(135deg, #fffdf8, #fff1f5);
  box-shadow: var(--shadow);
}

.about-copy p,
.profile-copy p {
  color: var(--muted);
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.75;
}

.about-values {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.about-values span {
  padding: 9px 13px;
  border-radius: 999px;
  color: var(--berry-dark);
  background: var(--pink-soft);
  font-weight: 900;
}

.about-visual {
  position: relative;
  min-height: 400px;
  border-radius: 50%;
  background:
    radial-gradient(circle at center, var(--pink-soft) 0 21%, transparent 22%),
    radial-gradient(circle at center, transparent 0 42%, rgba(217,76,107,0.18) 43% 44%, transparent 45% 65%, rgba(134,169,75,0.18) 66% 67%, transparent 68%);
}

.center-heart,
.orbit {
  position: absolute;
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: var(--shadow);
}

.center-heart {
  left: 50%;
  top: 50%;
  width: 110px;
  height: 110px;
  color: var(--white);
  background: var(--berry);
  font-size: 4rem;
  transform: translate(-50%, -50%);
}

.orbit {
  width: 76px;
  height: 76px;
  background: var(--white);
  font-size: 2.4rem;
  animation: orbit-bob 3.6s ease-in-out infinite;
}

.orbit-one { left: 5%; top: 12%; }
.orbit-two { right: 4%; top: 11%; animation-delay: -0.9s; }
.orbit-three { left: 11%; bottom: 6%; animation-delay: -1.8s; }
.orbit-four { right: 8%; bottom: 8%; animation-delay: -2.7s; }

@keyframes orbit-bob {
  0%,100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-12px) rotate(4deg); }
}

.berrybelle-profile {
  grid-template-columns: 0.75fr 1.25fr;
  margin-bottom: 100px;
  background: linear-gradient(135deg, #fff1f5, #f5f9e9);
}

.profile-image-wrap {
  min-height: 430px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 3px solid var(--border);
  border-radius: 30px;
  background: var(--pink-soft);
}

.profile-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
}

.profile-copy blockquote {
  margin: 20px 0 0;
  padding: 18px 20px;
  border-left: 6px solid var(--berry);
  border-radius: 0 18px 18px 0;
  color: var(--berry-dark);
  background: var(--white);
  font-size: 1.05rem;
  font-weight: 900;
}

.site-footer {
  padding: 34px max(20px, calc((100% - 1280px) / 2));
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  color: var(--cream);
  background: var(--chocolate);
}

.site-footer p {
  margin: 0;
  text-align: center;
  font-weight: 700;
}

.site-footer a {
  color: var(--cream);
  font-weight: 900;
}

.footer-brand {
  color: var(--pink);
}

.recipe-modal {
  width: min(1060px, calc(100% - 28px));
  max-height: 90vh;
  padding: 0;
  overflow: auto;
  border: 4px solid var(--border);
  border-radius: 32px;
  color: var(--ink);
  background: var(--cream);
  box-shadow: 0 30px 90px rgba(53,23,24,0.35);
}

.recipe-modal::backdrop {
  background: rgba(67,37,31,0.68);
  backdrop-filter: blur(7px);
}

.modal-close {
  position: sticky;
  z-index: 4;
  float: right;
  top: 14px;
  right: 14px;
  width: 48px;
  height: 48px;
  margin: 14px 14px -62px 0;
  border: 0;
  border-radius: 50%;
  color: var(--white);
  background: var(--berry);
  font-size: 2rem;
}

.modal-content {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
}

.modal-image-column,
.modal-copy-column {
  padding: 30px;
}

.modal-image-column {
  background: var(--pink-soft);
}

.modal-image-column > img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 24px;
}

.berry-tip-card {
  margin-top: 18px;
  padding: 14px;
  display: flex;
  gap: 12px;
  align-items: center;
  border: 2px solid var(--border);
  border-radius: 20px;
  background: var(--white);
}

.berry-tip-card img {
  width: 74px;
  height: 74px;
  object-fit: cover;
  border-radius: 18px;
}

.berry-tip-card strong {
  color: var(--berry);
}

.berry-tip-card p {
  margin: 4px 0 0;
  color: var(--muted);
  font-weight: 700;
}

.modal-copy-column h2 {
  margin: 0;
  color: var(--chocolate);
  font-family: var(--display);
  font-size: clamp(2.7rem, 5vw, 4.8rem);
  line-height: 0.98;
}

.modal-subtitle {
  color: var(--muted);
  font-weight: 800;
  line-height: 1.55;
}

.modal-panel {
  margin-top: 16px;
  padding: 18px;
  border: 2px solid var(--border);
  border-radius: 20px;
  background: var(--white);
}

.modal-panel h3 {
  margin: 0 0 8px;
  color: var(--berry-dark);
  font-family: var(--display);
  font-size: 1.65rem;
}

.modal-panel p,
.modal-panel li {
  color: var(--muted);
  font-weight: 700;
  line-height: 1.55;
}

.ingredients-panel ul {
  columns: 2;
  padding-left: 20px;
}

.modal-tags {
  margin: 18px 0;
}

.modal-save.saved {
  color: var(--berry-dark);
  background: var(--pink-soft);
}

.toast {
  position: fixed;
  z-index: 3000;
  left: 50%;
  bottom: 24px;
  min-width: min(420px, calc(100% - 30px));
  padding: 14px 18px;
  border: 2px solid var(--border);
  border-radius: 999px;
  color: var(--berry-dark);
  background: var(--white);
  box-shadow: var(--shadow);
  text-align: center;
  font-weight: 900;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 25px);
  transition: opacity 180ms ease, transform 180ms ease;
}

.toast.show {
  opacity: 1;
  transform: translate(-50%, 0);
}

.confetti-layer {
  position: fixed;
  z-index: 2500;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.confetti {
  position: absolute;
  top: -30px;
  width: 12px;
  height: 20px;
  border-radius: 4px;
  animation: confetti-fall 1.5s linear forwards;
}

@keyframes confetti-fall {
  to { transform: translateY(110vh) rotate(720deg); opacity: 0.1; }
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 650ms ease, transform 650ms ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1120px) {
  .nav-links { gap: 14px; }
  .hero { grid-template-columns: 1fr; }
  .hero-copy { text-align: center; }
  .hero-description { margin-left: auto; margin-right: auto; }
  .hero-actions { margin-left: auto; margin-right: auto; }
  .hero-studio { margin-left: 0; }
  .hero-mascot-card { min-height: 500px; }
  .craving-grid { grid-template-columns: repeat(2, 1fr); }
  .recipe-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .site-header { padding: 10px 10px 0; }
  .navbar { grid-template-columns: 1fr auto auto; }
  .menu-toggle { display: block; }
  .nav-links {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 94px;
    display: none;
    flex-direction: column;
    padding: 18px;
    border: 2px solid var(--border);
    border-radius: 24px;
    background: var(--white);
    box-shadow: var(--shadow);
  }
  .nav-links.open { display: flex; }
  .split { align-items: stretch; flex-direction: column; }
  .recipe-tools { width: 100%; }
  .search-box { min-width: 0; flex: 1; }
  .battle-board { grid-template-columns: 1fr; }
  .versus-badge { top: 50%; }
  .about-card,
  .berrybelle-profile,
  .modal-content { grid-template-columns: 1fr; }
  .about-visual { min-height: 360px; }
  .site-footer { flex-direction: column; text-align: center; }
}

@media (max-width: 650px) {
  .section-shell { width: min(100% - 20px, 1280px); }
  .hero { min-height: 0; padding: 34px 18px; border-radius: 26px; }
  .hero-small { font-size: 2.2rem; }
  .hero-big { font-size: clamp(4.2rem, 20vw, 6.6rem); }
  .hero-studio { font-size: clamp(3.5rem, 16vw, 5.5rem); }
  .hero-actions { grid-template-columns: 1fr; }
  .hero-mascot-card { min-height: 430px; }
  .craving-grid,
  .recipe-grid { grid-template-columns: 1fr; }
  .craving-card { min-height: 145px; }
  .recipe-tools { flex-direction: column; align-items: stretch; }
  .filter-row { gap: 7px; }
  .filter-chip { padding: 9px 11px; font-size: 0.88rem; }
  .battle-card { padding: 18px; }
  .battle-image-wrap { height: 260px; }
  .versus-badge { width: 72px; height: 72px; font-size: 1.7rem; }
  .battle-footer { align-items: stretch; flex-direction: column; }
  .mini-berrybelle { align-items: flex-start; }
  .about-card,
  .berrybelle-profile { padding: 24px 18px; }
  .profile-image-wrap { min-height: 330px; }
  .modal-image-column,
  .modal-copy-column { padding: 18px; }
  .modal-image-column > img { height: 320px; }
  .ingredients-panel ul { columns: 1; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
