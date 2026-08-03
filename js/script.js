"use strict";

const recipes = [
  {
    id: "cinnamon-pancakes",
    title: "Cinnamony Cinnamon Buttermilk Pancakes",
    category: "breakfast",
    icon: "🥞",
    description: "Warm, spiced pancakes with a soft buttermilk-style tang.",
    expect: "Fluffy centers, lightly crisp edges, cozy cinnamon warmth, and a soft buttermilk-style tang.",
    ingredients: ["Hybrid flour blend", "Milk", "Cinnamon", "Pumpkin", "Flaxseed", "Sour cream"],
    tip: "Let the batter rest for a few minutes before cooking so the pancakes can become extra fluffy.",
    tags: ["fluffy", "cinnamon", "breakfast"]
  },
  {
    id: "microwave-rolls",
    title: "Microwave Cinnamon Rolls",
    category: "breakfast",
    icon: "🌀",
    description: "Soft cinnamon spirals made for a quick cozy breakfast moment.",
    expect: "Warm cinnamon swirls, tender dough, and a soft sweet glaze without needing a full oven bake.",
    ingredients: ["Hybrid flour blend", "Cornstarch", "Cinnamon", "Milk", "Butter", "Glaze"],
    tip: "Keep the dough soft rather than overworking it so the center stays tender.",
    tags: ["microwave", "cinnamon", "soft"]
  },
  {
    id: "french-toast",
    title: "Cinnamon French Toast",
    category: "breakfast",
    icon: "🍞",
    description: "Custardy cinnamon toast with golden edges and cozy breakfast energy.",
    expect: "A soft custardy middle, toasted edges, cinnamon warmth, and a familiar diner-style feel.",
    ingredients: ["Bread", "Egg", "Milk", "Cinnamon", "Vanilla", "Light topping"],
    tip: "Give the bread just enough soak time to absorb flavor without becoming fragile.",
    tags: ["custardy", "golden", "classic"]
  },
  {
    id: "brownie-cake",
    title: "Brownie Batter Cake",
    category: "chocolate",
    icon: "🍫",
    description: "Chocolate comfort with a soft, fudgy center.",
    expect: "Deep cocoa flavor with a moist, brownie-like center and a soft cake edge.",
    ingredients: ["Hybrid flour blend", "Cocoa", "Milk", "Cornstarch", "Pumpkin", "Chocolate chips"],
    tip: "Pull it while the center still looks slightly soft if you want the fudgiest texture.",
    tags: ["fudgy", "cocoa", "dessert"]
  },
  {
    id: "oreo-bowl",
    title: "Oreo Frozen Yogurt Bowl",
    category: "chocolate",
    icon: "🍨",
    description: "Cold, creamy, crunchy Oreo-style comfort in a bowl.",
    expect: "Creamy chilled texture, chocolate-cookie crunch, and a sweet cookies-and-cream finish.",
    ingredients: ["Yogurt base", "Oreo wafers", "Cocoa", "Vanilla", "Milk"],
    tip: "Freeze briefly, then stir once so the texture stays scoopable instead of icy.",
    tags: ["cold", "oreo", "creamy"]
  },
  {
    id: "chocolate-mousse",
    title: "Avocado Chocolate Mousse",
    category: "chocolate",
    icon: "🍮",
    description: "Silky chocolate mousse with a surprisingly creamy base.",
    expect: "Smooth chocolate-forward texture with the avocado disappearing into a rich cocoa profile.",
    ingredients: ["Avocado", "Cocoa", "Milk", "Vanilla", "Sweetener"],
    tip: "Blend longer than you think you need so the final texture becomes completely silky.",
    tags: ["silky", "chocolate", "creamy"]
  },
  {
    id: "chili-mocha",
    title: "Chili Mocha Latte",
    category: "drinks",
    icon: "☕",
    description: "Cocoa, coffee, cinnamon, and a tiny spark of heat.",
    expect: "Warm mocha flavor first, followed by cinnamon and a subtle chili finish.",
    ingredients: ["Instant coffee", "Cocoa", "Milk", "Cinnamon", "Chili powder"],
    tip: "Start with the tiniest chili pinch—you can always add more after tasting.",
    tags: ["mocha", "coffee", "warm"]
  },
  {
    id: "cinnamon-coffee",
    title: "Hot Cinnamon Mocha Coffee",
    category: "drinks",
    icon: "🍵",
    description: "A warm everyday coffee with cocoa and cinnamon comfort.",
    expect: "Light mocha richness, fragrant cinnamon, and a cozy warm finish.",
    ingredients: ["Instant coffee", "Cocoa", "Milk", "Cinnamon", "Vanilla"],
    tip: "Whisk the cocoa with a small splash of hot water first for the smoothest drink.",
    tags: ["coffee", "cinnamon", "mocha"]
  },
  {
    id: "iced-vanilla",
    title: "Iced Vanilla Latte",
    category: "drinks",
    icon: "🧋",
    description: "A cool café-style vanilla drink for a softer coffee vibe.",
    expect: "Cold, milky coffee with a light vanilla sweetness and smooth finish.",
    ingredients: ["Coffee", "Milk", "Vanilla", "Ice"],
    tip: "Cool the coffee before adding ice so the drink stays flavorful instead of watered down.",
    tags: ["iced", "vanilla", "cafe"]
  },
  {
    id: "spinach-wrap",
    title: "Spinach Chicken Wrap",
    category: "savory",
    icon: "🌯",
    description: "A savory wrap built for a cozy lunch or easy dinner.",
    expect: "Tender chicken, soft tortilla, fresh spinach, and a satisfying savory bite.",
    ingredients: ["Tortilla", "Chicken", "Spinach", "Cheese", "Seasoning"],
    tip: "Warm the tortilla for a few seconds before wrapping so it folds without cracking.",
    tags: ["chicken", "wrap", "savory"]
  },
  {
    id: "mini-pizza",
    title: "Mini Tortilla Pizza",
    category: "savory",
    icon: "🍕",
    description: "A crisp little pizza built on a tortilla base.",
    expect: "Crisp edges, melty cheese, tomato flavor, and a quick personal-pizza feel.",
    ingredients: ["Tortilla", "Tomato sauce", "Mozzarella", "Seasoning"],
    tip: "Bake or air-crisp until the tortilla edge turns golden for the best crunch.",
    tags: ["pizza", "cheesy", "quick"]
  },
  {
    id: "bagel-sandwich",
    title: "Egg and Avocado Bagel Sandwich",
    category: "savory",
    icon: "🥯",
    description: "A warm bagel sandwich with egg and creamy avocado.",
    expect: "Toasty bagel edges, soft egg, creamy avocado, and a filling savory breakfast feel.",
    ingredients: ["Bagel", "Egg", "Avocado", "Seasoning", "Optional cheese"],
    tip: "Toast the bagel before assembling so the sandwich keeps its structure.",
    tags: ["bagel", "egg", "savory"]
  }
];

const battles = [
  {
    left: {
      icon: "🌀",
      title: "CCD Microwave Cinnamon Rolls",
      points: ["Soft and fluffy", "Cozy cinnamon swirl", "Homemade in minutes"]
    },
    right: {
      icon: "🥐",
      title: "Bakery Style Cinnamon Roll",
      points: ["Larger portion", "Sweet icing glaze", "Classic bakery comfort"]
    }
  },
  {
    left: {
      icon: "🥞",
      title: "CCD Cinnamon Pancakes",
      points: ["Fluffy center", "Cinnamon-forward", "Made at home"]
    },
    right: {
      icon: "🍽️",
      title: "Diner Style Pancakes",
      points: ["Tall stack", "Classic griddle flavor", "Restaurant comfort"]
    }
  },
  {
    left: {
      icon: "☕",
      title: "CCD Chili Mocha",
      points: ["Cocoa and cinnamon", "Tiny chili kick", "Customizable at home"]
    },
    right: {
      icon: "🥤",
      title: "Coffee Shop Mocha",
      points: ["Café presentation", "Rich chocolate syrup", "Grab-and-go experience"]
    }
  }
];

const berryTips = [
  "Pick the craving that sounds the most fun first.",
  "A good interface should make choosing feel playful instead of confusing.",
  "Use the food battle when you want to compare experiences, not declare one food good or bad.",
  "Open a recipe card when you want the flavor story before the ingredient list.",
  "Your favorite recipes are the ones that make the little heart count go up. 🍓"
];

const recipeGrid = document.querySelector("#recipe-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#recipe-search");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const favoriteCount = document.querySelector("#favorite-count");
const favoritesButton = document.querySelector("#favorites-button");

const modal = document.querySelector("#recipe-modal");
const modalClose = document.querySelector("#modal-close");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalIcon = document.querySelector("#modal-icon");
const modalDescription = document.querySelector("#modal-description");
const modalExpect = document.querySelector("#modal-expect");
const modalIngredients = document.querySelector("#modal-ingredients");
const modalTip = document.querySelector("#modal-tip");

const navToggle = document.querySelector("#nav-toggle");
const navLinksWrap = document.querySelector("#nav-links");
const navLinks = [...document.querySelectorAll(".nav-link")];

const leftBattleIcon = document.querySelector("#left-battle-icon");
const leftBattleTitle = document.querySelector("#left-battle-title");
const leftBattlePoints = document.querySelector("#left-battle-points");
const rightBattleIcon = document.querySelector("#right-battle-icon");
const rightBattleTitle = document.querySelector("#right-battle-title");
const rightBattlePoints = document.querySelector("#right-battle-points");
const battleMessage = document.querySelector("#battle-message");
const leftVotes = document.querySelector("#left-votes");
const rightVotes = document.querySelector("#right-votes");
const nextBattleButton = document.querySelector("#next-battle");
const battleChoiceButtons = [...document.querySelectorAll(".battle-choice")];

const tipBubble = document.querySelector("#tip-bubble");
const newTipButton = document.querySelector("#new-tip-button");

let activeFilter = "all";
let favoriteOnly = false;
let battleIndex = 0;
let battleScore = { left: 0, right: 0 };
let favorites = new Set();

function safeLoadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("berry-vibes-favorites") || "[]");
    if (Array.isArray(saved)) {
      favorites = new Set(saved.filter((id) => recipes.some((recipe) => recipe.id === id)));
    }
  } catch (error) {
    favorites = new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("berry-vibes-favorites", JSON.stringify([...favorites]));
  } catch (error) {
    // Site remains functional when browser storage is unavailable.
  }
}

function labelForCategory(category) {
  const labels = {
    breakfast: "Sweet Breakfast",
    chocolate: "Chocolate Comfort",
    drinks: "Coffee-Shop Vibes",
    savory: "Savory and Cozy"
  };
  return labels[category] || "Recipe";
}

function renderRecipes() {
  const query = searchInput.value.trim().toLowerCase();

  const visible = recipes.filter((recipe) => {
    const matchesFilter = activeFilter === "all" || recipe.category === activeFilter;
    const matchesSearch =
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.some((tag) => tag.includes(query));
    const matchesFavorites = !favoriteOnly || favorites.has(recipe.id);

    return matchesFilter && matchesSearch && matchesFavorites;
  });

  recipeGrid.innerHTML = "";
  emptyState.hidden = visible.length !== 0;

  visible.forEach((recipe) => {
    const article = document.createElement("article");
    article.className = "recipe-card";
    const isFavorite = favorites.has(recipe.id);

    article.innerHTML = `
      <div class="recipe-card-top" aria-hidden="true">${recipe.icon}</div>
      <div class="recipe-card-body">
        <p class="eyebrow">${labelForCategory(recipe.category)}</p>
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>

        <div class="recipe-tag-row">
          ${recipe.tags.map((tag) => `<span class="recipe-tag">${tag}</span>`).join("")}
        </div>

        <div class="recipe-card-actions">
          <button class="open-recipe" type="button" data-recipe-id="${recipe.id}">View recipe</button>

          <button
            class="favorite-recipe ${isFavorite ? "active" : ""}"
            type="button"
            data-favorite-id="${recipe.id}"
            aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}: ${recipe.title}"
            aria-pressed="${isFavorite}"
          >♥</button>
        </div>
      </div>
    `;

    recipeGrid.appendChild(article);
  });

  favoriteCount.textContent = String(favorites.size);
  favoritesButton.setAttribute("aria-pressed", String(favoriteOnly));
}

function setFilter(filter) {
  activeFilter = filter;
  favoriteOnly = false;

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === activeFilter);
  });

  renderRecipes();
}

function openRecipe(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;

  modalCategory.textContent = labelForCategory(recipe.category);
  modalTitle.textContent = recipe.title;
  modalIcon.textContent = recipe.icon;
  modalDescription.textContent = recipe.description;
  modalExpect.textContent = recipe.expect;
  modalTip.textContent = recipe.tip;

  modalIngredients.innerHTML = "";
  recipe.ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    modalIngredients.appendChild(item);
  });

  modal.showModal();
}

function closeModal() {
  if (modal.open) modal.close();
}

function toggleFavorite(recipeId, sourceButton) {
  if (favorites.has(recipeId)) {
    favorites.delete(recipeId);
  } else {
    favorites.add(recipeId);
  }

  saveFavorites();
  renderRecipes();

  if (sourceButton) createSparkBurst(sourceButton);
}

function renderBattle() {
  const battle = battles[battleIndex];

  leftBattleIcon.textContent = battle.left.icon;
  leftBattleTitle.textContent = battle.left.title;
  leftBattlePoints.innerHTML = battle.left.points.map((point) => `<li>${point}</li>`).join("");

  rightBattleIcon.textContent = battle.right.icon;
  rightBattleTitle.textContent = battle.right.title;
  rightBattlePoints.innerHTML = battle.right.points.map((point) => `<li>${point}</li>`).join("");

  battleMessage.textContent = "BerryBelle says: pick the vibe that sounds best to you!";
}

function vote(choice, button) {
  battleScore[choice] += 1;
  leftVotes.textContent = String(battleScore.left);
  rightVotes.textContent = String(battleScore.right);

  const winningLabel = choice === "left"
    ? battles[battleIndex].left.title
    : battles[battleIndex].right.title;

  battleMessage.textContent = `${winningLabel} gets your vote! ✨`;
  createSparkBurst(button);

  const board = document.querySelector("#battle-board");
  board.classList.remove("pop");
  void board.offsetWidth;
  board.classList.add("pop");
}

function nextBattle() {
  battleIndex = (battleIndex + 1) % battles.length;
  renderBattle();
}

function createSparkBurst(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const symbols = ["✨", "🍓", "💗", "✦"];

  for (let index = 0; index < 8; index += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 8;
    const distance = 48 + Math.random() * 46;

    spark.className = "spark-burst";
    spark.textContent = symbols[index % symbols.length];
    spark.style.left = `${centerX}px`;
    spark.style.top = `${centerY}px`;
    spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(spark);
    window.setTimeout(() => spark.remove(), 700);
  }
}

function showRandomTip() {
  const currentText = tipBubble.textContent.replace(/[“”]/g, "");
  const options = berryTips.filter((tip) => tip !== currentText);
  const nextTip = options[Math.floor(Math.random() * options.length)] || berryTips[0];

  tipBubble.textContent = `“${nextTip}”`;
  tipBubble.classList.remove("pop");
  void tipBubble.offsetWidth;
  tipBubble.classList.add("pop");
  createSparkBurst(newTipButton);
}

function jumpToCategory(category) {
  setFilter(category);
  document.querySelector("#recipes").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupNavigation() {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinksWrap.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksWrap.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = [...document.querySelectorAll("[data-section]")];

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const sectionId = visible.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.05, 0.2, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
}

searchInput.addEventListener("input", renderRecipes);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

document.querySelectorAll("[data-category-jump]").forEach((button) => {
  button.addEventListener("click", () => jumpToCategory(button.dataset.categoryJump));
});

recipeGrid.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-recipe-id]");
  if (openButton) {
    openRecipe(openButton.dataset.recipeId);
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favoriteId, favoriteButton);
  }
});

favoritesButton.addEventListener("click", () => {
  favoriteOnly = !favoriteOnly;
  renderRecipes();
  document.querySelector("#recipes").scrollIntoView({ behavior: "smooth", block: "start" });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (outside) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.open) closeModal();
});

battleChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => vote(button.dataset.choice, button));
});

nextBattleButton.addEventListener("click", nextBattle);
newTipButton.addEventListener("click", showRandomTip);

safeLoadFavorites();
renderRecipes();
renderBattle();
setupNavigation();
