// Types for different content types
export type ContentType = 'shayari' | 'win-message' | 'mood-response' | 'flirt';

// Hardcoded shayari messages - Tier 1 (Normal)
const shayariMessages = [
  "Janamdin mubarak ho tumhe, tum duniya ki sabse khoobsurat ladki ho! ❤️",
  "Birthday hai tera aaj special day, tu hai meri life mein sabse best, yaar! 🎂",
  "Tere smile se roshan hota hai sara jahaan, Happy Birthday meri jaan! 💫",
  "Cake kaato, wish maango, khushiyan baanto, aur hamesha muskurate raho! 🎉",
  "Tumhari khushi se badi koi khushi nahi, Happy Birthday meri pyaari dost! 🥳"
];

// Hardcoded shayari messages - Tier 2 (Better)
const betterShayariMessages = [
  "Zindagi ke har mod pe saath nibhane ke liye, thank you! Birthday pe tight wala hug! 🤗",
  "Tum ho toh life hai beautiful, tum na ho toh life hai impossible! Happy Birthday! 💕",
  "Janamdin pe ek promise, hamesha rahenge saath, chahe jo bhi ho halaat! 🌟",
  "Candles blow karo, cake khao, aur life ko full enjoy karo! Happy Birthday! 🎂",
  "Tum ho sabse special, kyunki tumhari smile hai magical! Happy Birthday! ✨"
];

// Hardcoded shayari messages - Tier 3 (Best)
const bestShayariMessages = [
  "Tumhari aankhein jaise deep ocean, tumhari smile jaise sunshine, tumhara dil jaise pure gold - Happy Birthday to the most precious person! 💎",
  "Har pal tumhare saath bitana hai, har khushi tumhare saath manana hai, life mein bas tumhe hi chahna hai - Happy Birthday my everything! 💫",
  "Tum ho woh khushboo jo hawa mein rehti hai, tum ho woh roshni jo andheron mein dikhti hai, tum ho woh khushi jo dil ko sukoon deti hai! 🌹",
  "Tumhare bina life incomplete hai, tumhare saath har moment sweet hai, you're the one I always want to meet - Happy Birthday! 🎀",
  "Sitaron se bhi zyada chamakti ho tum, phoolon se bhi zyada khilti ho tum, mere dil mein hamesha rehti ho tum - Happy Birthday! 🌟"
];

// Hardcoded win messages - Tier 1 (Normal)
const winMessages = [
  "Waah! Kya game kheli hai! Tum toh champion ho! 🏆",
  "Jeet gaye! Ab toh party banti hai! 🎉",
  "Kamaal kar diya yaar! Aaj toh full champion mode on hai! 💪",
  "Winner winner chicken dinner! Aaj ka din tumhara hai! 🌟",
  "Kya baat hai! Itna talent! Koi tumhe rok nahi sakta! 🔥"
];

// Hardcoded win messages - Tier 2 (Better)
const betterWinMessages = [
  "Game mein bhi jeet, life mein bhi jeet! You're on fire today! 🎮",
  "Haar maan'na tumhare dictionary mein hai hi nahi! Great win! 👑",
  "Aaj toh full pro player wali feeling aa rahi hai! Congrats! 🎯",
  "Ek aur jeet! Ab toh log bolenge 'stop winning so much'! 😎",
  "Jeet ke baad ka swag hi alag hai! Keep winning! 🥇"
];

// Hardcoded win messages - Tier 3 (Best)
const bestWinMessages = [
  "Tumhari jeet dekh ke toh champions bhi jealous ho jayenge! Kya style hai boss! 🏅",
  "Game jeetna toh tumhare liye normal hai, kyunki tum life mein bhi winner ho! Unstoppable! 🚀",
  "Aaj toh history create kar di! Aise kheloge toh world record ban jayega! Legendary win! 🌠",
  "Tumhari strategy, tumhari skills, tumhara focus - sab next level! Ab toh trophy tumhari hi hai! 🏆✨",
  "Champion of champions! Tumhare jaisa player maine aaj tak nahi dekha! Absolutely brilliant! 👑🔥"
];

// Hardcoded mood responses - Tier 1 (Normal)
const moodResponses = {
  happy: [
    "Kya baat hai! Aaj toh mood ekdum mast hai! Aise hi khush raho hamesha! 😊",
    "Good mood mein ho toh life bhi good lagti hai! Enjoy karo aaj ka din! 🌞",
    "Khushi ka din hai aaj! Chalo celebrate karte hain! 🎉"
  ],
  angry: [
    "Arrey gussa thook do, life enjoy karo! Sab theek ho jayega! 😌",
    "Gussa sirf tumhe hi hurt karta hai. Deep breath lo aur relax karo! 🧘‍♀️",
    "Thoda sa chocolate khao, mood instantly better ho jayega! 🍫"
  ],
  sad: [
    "Arrey sad kyun ho? Tumhari smile se toh chaand bhi sharma jaye! 🌙",
    "Tension not! Jo bhi problem hai, mil ke solve karenge! 💪",
    "Sad hona allowed nahi hai aaj! Special ho tum, special feel karo! ✨"
  ]
};

// Hardcoded mood responses - Tier 2 (Better)
const betterMoodResponses = {
  happy: [
    "Jab tum khush hoti ho toh duniya bhi khush ho jaati hai! 💫",
    "Tumhari smile se din ban jata hai! Keep smiling! ✨",
    "Khushi tumhe suit karti hai! Aaj ka din special banao! 🌈"
  ],
  angry: [
    "Gussa is temporary, but smile is permanent! Chalo smile karo! 😊",
    "Koi baat nahi, kabhi kabhi gussa aana normal hai. Par ab smile karo! 🌈",
    "Gussa door, khushi paas! Ab mood change karo aur enjoy karo! 🎭"
  ],
  sad: [
    "Tumhari aankhon mein aansu ache nahi lagte. Chalo smile karo! 💕",
    "Life mein ups and downs aate rehte hain, but tum strong ho! 🌟",
    "Sad mood ko bye bye karo, happy mood ko hello bolo! 👋😊"
  ]
};

// Hardcoded mood responses - Tier 3 (Best)
const bestMoodResponses = {
  happy: [
    "Tumhari khushi se puri duniya roshan ho jati hai! Tum ho toh life hai beautiful! 🌞✨",
    "Jab tum khush hoti ho, toh angels bhi tumhari smile dekh ke jealous ho jate hain! Keep glowing! 👼💖",
    "Tumhari happiness is like magic - it spreads everywhere! Aaj ka din tumhara hai, full enjoy karo! 🎭🌈"
  ],
  angry: [
    "Gussa karne se tumhare cute cheeks red ho jate hain! Waise smile karo toh dimples better lagte hain! 😊💕",
    "Angry young woman! Par gussa karogi toh main extra pyaar se manaunga, so choice is yours! 🤗❤️",
    "Gussa karne wali Arushi cute, smile karne wali Arushi cutest! Ab batao, kaun wali Arushi dekhni hai? 😉🌹"
  ],
  sad: [
    "Tumhari ek smile ke liye main chand taare tod ke la sakta hoon! Please sad mat raho, tumhari khushi hi meri khushi hai! 🌙⭐",
    "Sad Arushi is temporary, happy Arushi is permanent! Aur happy Arushi is the most beautiful girl in the world! 👸💫",
    "Tumhari aankhon mein aansu nahi, sirf dreams hone chahiye! Let me turn that frown upside down with lots of love! 💘🌈"
  ]
};

// Hardcoded flirty messages - Tier 1 (Normal)
const flirtyMessages = [
  "Kya tumne kabhi modeling ki hai? Kyunki tum toh model jaisi dikhti ho! 😍",
  "Tumhari smile dekh ke toh dil garden garden ho jata hai! 💓",
  "Kya karoon, tumhe dekh ke control kho deta hoon! 💘",
  "Tum itni cute ho ki dictionary mein tumhari photo honi chahiye cute word ke saamne! 🥰",
  "Tumhari aankhein itni magical hain, main toh kho gaya! ✨"
];

// Hardcoded flirty messages - Tier 2 (Better)
const betterFlirtyMessages = [
  "Agar tum night sky ho, toh main shooting star - tumhari ore hi aata hoon! 🌠",
  "Tumhare saath time ruksa jata hai, kyunki har pal special ban jata hai! ⏰",
  "Kya tumhe pata hai tum kitni amazing ho? Main toh fan ho gaya! 🌟",
  "Tumhari baatein sunne ke liye main poori duniya chhod sakta hoon! 👂",
  "Tum smile karti ho toh butterflies dance karti hain mere stomach mein! 🦋"
];

// Hardcoded flirty messages - Tier 3 (Best)
const bestFlirtyMessages = [
  "Tumhari aankhon mein dekha toh aise laga jaise time ruk gaya ho, duniya tham gayi ho, aur bas tum hi tum ho! 💫",
  "Agar beauty queen contest hota, toh judges tumhe dekh ke competition hi cancel kar dete! You're that gorgeous! 👑",
  "Tumhare bina meri story incomplete hai, tumhare saath meri life complete hai! Will you be my happily ever after? 📖❤️",
  "Kya main tumhe apni girlfriend bana sakta hoon? Kyunki mere dil ne tumhe already apna bana liya hai! 💘",
  "Tumhari ek smile ke liye main stars ko rearrange kar sakta hoon! You're worth every effort in this universe! 🌌"
];

// Track message tiers for each type
let shayariTier = 1;
let winMessageTier = 1;
let moodResponseTier = 1;
let flirtTier = 1;

/**
 * Get random item from array
 */
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate content using hardcoded messages with tiered quality
 * @param type Type of content to generate
 * @param context Additional context for generation
 * @returns Generated content
 */
export async function generateContent(type: ContentType, context?: string): Promise<string> {
  let result = "";
  
  switch (type) {
    case 'shayari':
      // Cycle through tiers for better messages each time
      if (shayariTier === 1) {
        result = getRandomItem(shayariMessages);
        shayariTier = 2;
      } else if (shayariTier === 2) {
        result = getRandomItem(betterShayariMessages);
        shayariTier = 3;
      } else {
        result = getRandomItem(bestShayariMessages);
        shayariTier = 1; // Reset to tier 1
      }
      return result;
      
    case 'win-message':
      // Cycle through tiers for better messages each time
      if (winMessageTier === 1) {
        result = getRandomItem(winMessages);
        winMessageTier = 2;
      } else if (winMessageTier === 2) {
        result = getRandomItem(betterWinMessages);
        winMessageTier = 3;
      } else {
        result = getRandomItem(bestWinMessages);
        winMessageTier = 1; // Reset to tier 1
      }
      return result;
      
    case 'mood-response':
      // Get the appropriate mood category
      let moodCategory = 'happy';
      if (context === 'happy' || context === 'good') {
        moodCategory = 'happy';
      } else if (context === 'angry') {
        moodCategory = 'angry';
      } else if (context === 'sad') {
        moodCategory = 'sad';
      }
      
      // Cycle through tiers for better messages each time
      if (moodResponseTier === 1) {
        result = getRandomItem(moodResponses[moodCategory as keyof typeof moodResponses]);
        moodResponseTier = 2;
      } else if (moodResponseTier === 2) {
        result = getRandomItem(betterMoodResponses[moodCategory as keyof typeof betterMoodResponses]);
        moodResponseTier = 3;
      } else {
        result = getRandomItem(bestMoodResponses[moodCategory as keyof typeof bestMoodResponses]);
        moodResponseTier = 1; // Reset to tier 1
      }
      return result;
      
    case 'flirt':
      // Cycle through tiers for better messages each time
      if (flirtTier === 1) {
        result = getRandomItem(flirtyMessages);
        flirtTier = 2;
      } else if (flirtTier === 2) {
        result = getRandomItem(betterFlirtyMessages);
        flirtTier = 3;
      } else {
        result = getRandomItem(bestFlirtyMessages);
        flirtTier = 1; // Reset to tier 1
      }
      return result;
      
    default:
      return "Kya baat hai! Aaj toh mood ekdum mast hai!";
  }
}

/**
 * Generate a random shayari
 * @returns A romantic shayari in Hinglish
 */
export async function generateShayari(): Promise<string> {
  return generateContent('shayari');
}

/**
 * Generate a win message for games
 * @param game Optional game context
 * @returns A congratulatory message in Hinglish
 */
export async function generateWinMessage(game?: string): Promise<string> {
  return generateContent('win-message', game);
}

/**
 * Generate a response based on mood
 * @param mood The current mood
 * @returns A personalized message based on the mood
 */
export async function generateMoodResponse(mood: string): Promise<string> {
  return generateContent('mood-response', mood);
}

/**
 * Generate a flirty message
 * @returns A flirty message in Hinglish
 */
export async function generateFlirtMessage(): Promise<string> {
  return generateContent('flirt');
}