// Types for different content types
export type ContentType = 'shayari' | 'win-message' | 'mood-response' | 'flirt';

// Hardcoded shayari messages - Tier 1 (Romantic & Emotional)
const shayariMessages = [
  "Tumhari muskaan dekh ke lagta hai jaise khuda ne sabse khoobsurat cheez banai hai 😍",
  "Tere bina din adhura, tere saath raat haseen, tu hai meri zindagi ka sabse pyaara hissa 💕",
  "Aankhon mein tera chehra, dil mein tera pyaar, tum ho meri duniya ka sabse khoobsurat intezaar ✨",
  "Jab se dekha hai tumhe, dil kehta hai bas tumhe hi chahiye, tum ho meri mohabbat ka sabse haseen silsila 💖",
  "Tumhari baatein sunke dil garden garden ho jata hai, tum ho woh khushi jo har gham ko bhula deti hai 🌹"
];

// Hardcoded shayari messages - Tier 2 (Deep Emotions)
const betterShayariMessages = [
  "Ishq mein tumhare, dil ne seekha hai jeena, tumhare bina lagta hai jaise saans lena bhi mushkil hai 💫",
  "Tumhari aankhon mein jo nasha hai, woh kisi aur mein nahi, tum ho meri mohabbat ki sabse khoobsurat shuruaat 💘",
  "Dil kehta hai tumse, ki tum ho meri manzil, tumhare bina main hoon adhura, tum ho meri zindagi ka sabse haseen haqeeqat 🌟",
  "Tumhare ishq mein pagal hoon main, tumhare bina incomplete hoon main, tum ho woh raah jo mujhe meri manzil tak le jaati hai 💕",
  "Mohabbat ka matlab samjha tumne, dil ki duniya dikhayi tumne, tum ho woh khwaabon ka raaja jo haqeeqat ban gaya 👑"
];

// Hardcoded shayari messages - Tier 3 (Soul-touching)
const bestShayariMessages = [
  "Tumhare ishq mein dooba hoon itna ki khud ko bhool gaya hoon, tumhari mohabbat mein paya hai jo kabhi socha nahi tha 💫✨",
  "Dil ki har dhadak mein tumhara naam hai, rooh ki har saans mein tumhara ehsaas hai, tum ho meri zindagi ka sabse khoobsurat jazbaat 💖",
  "Tumhare bina main sirf ek kahani hoon, tumhare saath main ek mukammal kitaab hoon, tum ho meri mohabbat ka sabse haseen bayan 📖💕",
  "Ishq tumse kiya toh paya hai jannat, tumhari mohabbat mein mila hai sukoon-e-qalb, tum ho meri rooh ka sabse pyaara hissa 🌹",
  "Tumhari ek nazar mein chhupe hain hazaaron khwaab, tumhare ek smile mein basi hai meri puri duniya, tum ho meri mohabbat ki sabse khoobsurat misaal 💎"
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

// Hardcoded mood responses - Tier 1 (Caring & Supportive)
const moodResponses = {
  happy: [
    "Tumhari khushi dekh ke mera dil bhi khush ho gaya! Aise hi muskurate raho hamesha! 😊💕",
    "Jab tum happy hoti ho toh puri duniya beautiful lag jaati hai! Keep shining! ✨🌟",
    "Tumhari smile is like sunshine on a cloudy day! Aaj ka din celebrate karo! 🌞🎉"
  ],
  angry: [
    "Gussa karne se tumhare cute cheeks red ho jate hain! But smile better lagti hai! 😊💕",
    "Main hoon na tumhare saath! Jo bhi problem hai, together solve karenge! 🤗💪",
    "Tumhara gussa bhi cute lagta hai, but tumhari smile sabse precious hai! 😌🌹"
  ],
  sad: [
    "Tumhari aankhon mein aansu ache nahi lagte, please smile karo mere liye! 🥺💕",
    "Sad mat ho, main hoon na tumhare saath! Sab theek ho jayega, trust me! 🤗✨",
    "Tumhari ek smile ke liye main kuch bhi kar sakta hoon! Please khush ho jao! 😊💖"
  ]
};

// Hardcoded mood responses - Tier 2 (Deeply Caring)
const betterMoodResponses = {
  happy: [
    "Tumhari khushi meri sabse badi khushi hai! Aise hi glowing raho hamesha! 💫✨",
    "Jab tum smile karti ho toh angels bhi jealous ho jate hain! You're glowing! 😇💖",
    "Tumhari happiness is contagious! Aaj ka din magical banao! 🌈🎭"
  ],
  angry: [
    "Tumhara gussa bhi cute hai, but tumhari smile meri weakness hai! Please? 🥺💕",
    "Main tumhare saath hoon har situation mein! Gussa thook do, let's make it better! 🤗💪",
    "Tumhare liye main kuch bhi kar sakta hoon! Bas ek smile de do! 😊🌹"
  ],
  sad: [
    "Tumhare aansu dekh ke mera dil toot jata hai! Please khush ho jao mere liye! 💔💕",
    "Tum strong ho, brave ho, amazing ho! Ye tough time bhi nikal jayega! 💪✨",
    "Main tumhara support system hoon! Sad mat raho, everything will be okay! 🤗🌟"
  ]
};

// Hardcoded mood responses - Tier 3 (Soul-touching)
const bestMoodResponses = {
  happy: [
    "Tumhari khushi dekh ke lagta hai jaise jannat mil gayi ho! Tum ho toh sab kuch perfect hai! 🌞💫✨",
    "Jab tum smile karti ho toh pure universe mein positive energy spread ho jaati hai! You're magical! 🌟💖👼",
    "Tumhari happiness meri life ka sabse beautiful moment hai! Aise hi radiant raho hamesha! 🎭🌈💕"
  ],
  angry: [
    "Tumhara gussa bhi itna cute hai ki main tumse aur bhi pyaar karne lag jata hoon! You're adorable even when angry! 😊💕🥰",
    "Main tumhare har mood mein tumse mohabbat karta hoon! Gussa ho ya khush, tum ho toh sab perfect hai! 🤗❤️💫",
    "Tumhare gusse mein bhi itna pyaar hai ki main melt ho jata hoon! Ab smile karo, please? 😉🌹💖"
  ],
  sad: [
    "Tumhare ek aansu ke liye main apni puri khushi de sakta hoon! Please sad mat raho, you mean everything to me! 💔💕🌙",
    "Tumhari sadness meri sadness hai, tumhari khushi meri khushi! Main hoon na tumhare saath, always and forever! 👸💫🤗",
    "Tumhari aankhon mein sirf khwaabon ka nasha hona chahiye, aansu nahi! Let me fill your world with love and happiness! 💘🌈✨"
  ]
};

// Hardcoded flirty messages - Tier 1 (Charming & Sweet)
const flirtyMessages = [
  "Tumhe dekh ke lagta hai jaise koi angel earth pe aa gaya ho, seriously tum itni beautiful ho! 😇💕",
  "Kya tumne magic sikha hai? Kyunki jab tum smile karti ho toh mera dil gayab ho jata hai! ✨💖",
  "Tumhari aankhein itni deep hain ki main swimming pool samajh ke doob gaya! 😍🏊‍♂️",
  "Agar cute hona crime hota, toh tum life sentence deserve karti! Guilty as charged! 🥰⚖️",
  "Tumhare paas GPS hai kya? Kyunki main tumhare pyaar mein completely lost ho gaya hoon! 🗺️💘"
];

// Hardcoded flirty messages - Tier 2 (Romantic & Playful)
const betterFlirtyMessages = [
  "Tumhare saath coffee peene ka mann kar raha hai, but tumhare saamne coffee bhi fade lag jaayegi! ☕💫",
  "Kya tum WiFi ho? Kyunki main tumse strong connection feel kar raha hoon! 📶💕",
  "Tumhari smile dekh ke toh mera heart rate monitor beep karne lag jaata hai! 💓📈",
  "Agar main photographer hota, toh tumhe focus karne mein poori zindagi nikal jaati! 📸✨",
  "Tumhare saath time spend karna is like living in a fairytale, bas happy ending ka intezaar hai! 🏰💖"
];

// Hardcoded flirty messages - Tier 3 (Deeply Romantic)
const bestFlirtyMessages = [
  "Tumhari ek nazar mein itna pyaar hai ki main tumhare liye duniya bhar ke gham sah sakta hoon, you're my everything! 💫❤️",
  "Agar main tumhare dil mein jagah maang sakoon, toh promise karta hoon ki kabhi disappoint nahi karoonga! 🏠💕",
  "Tumhare bina meri subah adhuri, tumhare saath meri raat haseen, will you be my forever and always? 🌅🌙",
  "Kya main tumhara hand hold kar sakta hoon? Kyunki main tumhare saath life ki har journey share karna chahta hoon! 🤝💖",
  "Tumhari mohabbat mein main itna kho gaya hoon ki wapas aane ka mann hi nahi karta, you're my beautiful addiction! 💘🌹"
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