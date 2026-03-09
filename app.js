// ===== Questions Database (15 questions) =====
const ALL_QUESTIONS = [
    {
        id: 1,
        type: 'map',
        question: 'סמנו על המפה: איפה נמצא נחל חבר?',
        correctRegion: 'deadsea',
        explanation: 'נחל חבר נמצא במדבר יהודה, ליד ים המלח. במערות הנחל נמצאו ממצאים ארכיאולוגיים מתקופת בר כוכבא.',
        link: 'https://he.wikipedia.org/wiki/%D7%A0%D7%97%D7%9C_%D7%97%D7%91%D7%A8',
    },
    {
        id: 2,
        type: 'choice',
        question: 'מהו הנהר הארוך ביותר בישראל?',
        options: ['הירדן', 'הירקון', 'הקישון', 'נחל שורק'],
        correctIndex: 0,
        explanation: 'נהר הירדן הוא הנהר הארוך ביותר בישראל באורך של כ-251 ק"מ. הוא זורם מהחרמון ועד ים המלח.',
        link: 'https://he.wikipedia.org/wiki/%D7%A0%D7%94%D7%A8_%D7%94%D7%99%D7%A8%D7%93%D7%9F',
    },
    {
        id: 3,
        type: 'choice',
        question: 'מתי נבנה בית הכנסת העתיק ביותר שנמצא בישראל (בגמלא)?',
        options: ['המאה ה-1 לפנה"ס', 'המאה ה-3 לספירה', 'המאה ה-6 לספירה', 'המאה ה-10 לספירה'],
        correctIndex: 0,
        explanation: 'בית הכנסת בגמלא נבנה במאה ה-1 לפנה"ס והוא נחשב לבית הכנסת העתיק ביותר שנמצא בארץ ישראל.',
        link: 'https://he.wikipedia.org/wiki/%D7%92%D7%9E%D7%9C%D7%90',
    },
    {
        id: 4,
        type: 'map',
        question: 'סמנו על המפה: איפה נמצא מכתש רמון?',
        correctRegion: 'negev',
        explanation: 'מכתש רמון הוא המכתש הגדול בעולם, ונמצא בלב מדבר הנגב. אורכו כ-40 ק"מ ורוחבו כ-10 ק"מ.',
        link: 'https://he.wikipedia.org/wiki/%D7%9E%D7%9B%D7%AA%D7%A9_%D7%A8%D7%9E%D7%95%D7%9F',
    },
    {
        id: 5,
        type: 'choice',
        question: 'מהו ההר הגבוה ביותר מבין הבאים?',
        options: ['הר מירון', 'הר תבור', 'הר הכרמל', 'הר גלבוע'],
        correctIndex: 0,
        explanation: 'הר מירון הוא הגבוה מבין ההרים ברשימה (1,208 מ\'). אבל שימו לב - ההר הגבוה ביותר בישראל הוא דווקא הר חרמון, עם פסגה בגובה 2,236 מטרים!',
        link: 'https://he.wikipedia.org/wiki/%D7%94%D7%A8_%D7%9E%D7%99%D7%A8%D7%95%D7%9F',
    },
    {
        id: 6,
        type: 'map',
        question: 'סמנו על המפה: איפה נמצאת קיסריה?',
        correctRegion: 'coast',
        explanation: 'קיסריה נמצאת במישור החוף. היא נבנתה על ידי הורדוס והייתה עיר נמל חשובה בתקופה הרומית.',
        link: 'https://he.wikipedia.org/wiki/%D7%A7%D7%99%D7%A1%D7%A8%D7%99%D7%94',
    },
    {
        id: 7,
        type: 'choice',
        question: 'מי בנה את מצדה?',
        options: ['הורדוס', 'שלמה המלך', 'החשמונאים', 'בר כוכבא'],
        correctIndex: 0,
        explanation: 'מצדה נבנתה כמבצר על ידי הורדוס המלך במאה ה-1 לפנה"ס. היא הפכה לסמל של גבורה יהודית.',
        link: 'https://he.wikipedia.org/wiki/%D7%9E%D7%A6%D7%93%D7%94',
    },
    {
        id: 8,
        type: 'map',
        question: 'סמנו על המפה: איפה נמצאת שמורת עין גדי?',
        correctRegion: 'deadsea',
        explanation: 'עין גדי היא נווה מדבר ושמורת טבע על חוף ים המלח. היא ידועה ביעלי הנובים והמפלים שלה.',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%9F_%D7%92%D7%93%D7%99',
    },
    {
        id: 9,
        type: 'choice',
        question: 'מהי הנקודה הנמוכה ביותר בישראל?',
        options: ['ים המלח', 'ים כנרת', 'עמק בית שאן', 'ים סוף'],
        correctIndex: 0,
        explanation: 'ים המלח נמצא בגובה של כ-430 מטר מתחת לפני הים - והוא לא רק הנקודה הנמוכה ביותר בישראל, אלא גם הנקודה הנמוכה ביותר ביבשה בכל העולם!',
        link: 'https://he.wikipedia.org/wiki/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97',
    },
    {
        id: 10,
        type: 'choice',
        question: 'כמה קילומטרים אורכו של שביל ישראל?',
        options: ['כ-1,100 ק"מ', 'כ-700 ק"מ', 'כ-500 ק"מ', 'כ-300 ק"מ'],
        correctIndex: 0,
        explanation: 'שביל ישראל הוא שביל הליכה לאורך הארץ מדן בצפון ועד אילת בדרום, באורך של כ-1,100 קילומטרים.',
        link: 'https://he.wikipedia.org/wiki/%D7%A9%D7%91%D7%99%D7%9C_%D7%99%D7%A9%D7%A8%D7%90%D7%9C',
    },
    {
        id: 11,
        type: 'map',
        question: 'סמנו על המפה: איפה נמצא פארק תמנע?',
        correctRegion: 'arava',
        explanation: 'פארק תמנע נמצא בערבה, כ-25 ק"מ צפונית לאילת. הוא ידוע בעמודי שלמה ובמכרות הנחושת העתיקים.',
        link: 'https://he.wikipedia.org/wiki/%D7%A4%D7%90%D7%A8%D7%A7_%D7%AA%D7%9E%D7%A0%D7%A2',
    },
    {
        id: 12,
        type: 'choice',
        question: 'איזו ציפור נודדת דרך ישראל במספרים הגדולים ביותר?',
        options: ['חסידה לבנה', 'סנונית', 'נחליאלי', 'עגור'],
        correctIndex: 0,
        explanation: 'כחצי מיליארד ציפורים נודדות מעל ישראל בכל שנה, והחסידה הלבנה היא מהבולטות שבהן. ישראל נמצאת על ציר נדידה מרכזי.',
        link: 'https://he.wikipedia.org/wiki/%D7%97%D7%A1%D7%99%D7%93%D7%94_%D7%9C%D7%91%D7%A0%D7%94',
    },
    {
        id: 14,
        type: 'choice',
        question: 'היכן התגלו מגילות ים המלח?',
        options: ['קומראן', 'מצדה', 'עין גדי', 'ירושלים'],
        correctIndex: 0,
        explanation: 'מגילות ים המלח התגלו במערות קומראן שבמדבר יהודה בשנת 1947, והן מהממצאים הארכיאולוגיים החשובים ביותר בעולם.',
        link: 'https://he.wikipedia.org/wiki/%D7%9E%D7%92%D7%99%D7%9C%D7%95%D7%AA_%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97',
    },
    {
        id: 15,
        type: 'choice',
        question: 'מהי שמורת הטבע הגדולה ביותר בישראל?',
        options: ['שמורת הר הנגב', 'שמורת עין גדי', 'שמורת החולה', 'שמורת הכרמל'],
        correctIndex: 0,
        explanation: 'שמורת הר הנגב היא שמורת הטבע הגדולה ביותר בישראל, בשטח של כ-40,000 דונם.',
        link: 'https://he.wikipedia.org/wiki/%D7%A9%D7%9E%D7%95%D7%A8%D7%AA_%D7%98%D7%91%D7%A2_%D7%94%D7%A8_%D7%94%D7%A0%D7%92%D7%91',
    },
];

// ===== Quiz State =====
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// ===== Quiz Logic =====
function startQuiz() {
    // Randomly pick 10 questions from 15 and shuffle
    currentQuestions = shuffleArray([...ALL_QUESTIONS]).slice(0, 10);
    // Shuffle options for each choice question (keeping track of correct answer)
    currentQuestions.forEach(q => {
        if (q.type === 'choice') {
            const correctAnswer = q.options[q.correctIndex];
            const shuffled = shuffleArray([...q.options]);
            q._shuffledOptions = shuffled;
            q._shuffledCorrectIndex = shuffled.indexOf(correctAnswer);
        }
    });
    currentIndex = 0;
    score = 0;
    answered = false;
    showScreen('question-screen');
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    answered = false;

    // Update header
    document.getElementById('current-q').textContent = currentIndex + 1;
    document.getElementById('live-score').textContent = score;
    document.getElementById('progress-fill').style.width = ((currentIndex) / 10 * 100) + '%';

    // Set question text
    document.getElementById('question-text').textContent = q.question;

    // Hide feedback
    document.getElementById('feedback-container').style.display = 'none';

    // Show map or options
    const mapContainer = document.getElementById('map-container');
    const optionsContainer = document.getElementById('options-container');

    if (q.type === 'map') {
        mapContainer.style.display = 'block';
        optionsContainer.style.display = 'none';
        resetMap();
    } else {
        mapContainer.style.display = 'none';
        optionsContainer.style.display = 'flex';
        renderOptions(q);
    }

    // Animate question
    document.querySelector('.question-body').style.animation = 'none';
    requestAnimationFrame(() => {
        document.querySelector('.question-body').style.animation = 'fadeIn 0.3s ease';
    });
}

function renderOptions(q) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const options = q._shuffledOptions;

    options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => handleChoiceAnswer(index, q._shuffledCorrectIndex, q);
        container.appendChild(btn);
    });
}

function handleChoiceAnswer(selectedIndex, correctIndex, q) {
    if (answered) return;
    answered = true;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === correctIndex) btn.classList.add('correct');
        if (i === selectedIndex && i !== correctIndex) btn.classList.add('wrong');
    });

    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) score += 10;

    showFeedback(isCorrect, q);
}

function handleMapAnswer(regionId) {
    if (answered) return;
    answered = true;

    const q = currentQuestions[currentIndex];
    const isCorrect = regionId === q.correctRegion;

    // Disable all regions
    document.querySelectorAll('.map-region').forEach(r => r.classList.add('disabled'));

    // Highlight correct region
    document.querySelector(`[data-region="${q.correctRegion}"]`).classList.add('correct');

    // Highlight wrong if needed
    if (!isCorrect) {
        document.querySelector(`[data-region="${regionId}"]`).classList.add('wrong');
    }

    if (isCorrect) score += 10;
    showFeedback(isCorrect, q);
}

function showFeedback(isCorrect, q) {
    document.getElementById('live-score').textContent = score;
    document.getElementById('live-score').style.animation = 'scoreCount 0.3s ease';
    setTimeout(() => {
        document.getElementById('live-score').style.animation = '';
    }, 300);

    const container = document.getElementById('feedback-container');
    document.getElementById('feedback-icon').textContent = isCorrect ? '🎉' : '😅';
    document.getElementById('feedback-text').textContent = q.explanation;
    document.getElementById('feedback-link').href = q.link;
    document.getElementById('next-btn').textContent = currentIndex < 9 ? 'לשאלה הבאה' : 'לתוצאות!';

    container.style.display = 'block';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= 10) {
        showResults();
    } else {
        renderQuestion();
    }
}

function resetMap() {
    document.querySelectorAll('.map-region').forEach(r => {
        r.classList.remove('correct', 'wrong', 'disabled');
    });
}

// ===== Map Click Handler =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.map-region').forEach(region => {
        region.addEventListener('click', () => {
            handleMapAnswer(region.dataset.region);
        });
    });
});

// ===== Results =====
function showResults() {
    showScreen('results-screen');
    document.getElementById('progress-fill').style.width = '100%';

    // Animate score
    const scoreEl = document.getElementById('final-score');
    const ring = document.getElementById('score-ring');
    const circumference = 339.292;
    const offset = circumference - (score / 100) * circumference;

    scoreEl.textContent = '0';
    ring.style.strokeDashoffset = circumference;

    setTimeout(() => {
        ring.style.strokeDashoffset = offset;
        animateScore(0, score, scoreEl, 1500);
    }, 200);

    // Set result message and CTA
    const result = getResultMessage(score);
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-message').textContent = result.message;
    document.getElementById('cta-text').textContent = result.ctaText;
}

function getResultMessage(score) {
    if (score <= 20) {
        return {
            title: 'אתה רק בתחילת הדרך!',
            message: 'ארץ ישראל מלאה בהפתעות שמחכות לך. הדרך הכי טובה להכיר אותה - לצאת לטייל בה!',
            ctaText: 'רוצה לגלות מקומות שלא הכרת?',
        };
    } else if (score <= 40) {
        return {
            title: 'יש לך ידע בסיסי!',
            message: 'אתה מכיר קצת את ישראל, אבל יש עוד כל כך הרבה לגלות. בוא תראה את מה שפיספסת!',
            ctaText: 'רוצה לגלות מקומות נוספים שלא הכרת?',
        };
    } else if (score <= 60) {
        return {
            title: 'לא רע בכלל!',
            message: 'אתה מכיר חלקים מישראל, אבל עדיין יש עוד מה לחקור.',
            ctaText: 'רוצה לגלות עוד מקומות מיוחדים בארץ?',
        };
    } else if (score <= 80) {
        return {
            title: 'כל הכבוד!',
            message: 'אתה מכיר את ישראל ממש טוב! אבל תמיד יש עוד פינות נסתרות לגלות.',
            ctaText: 'רוצה לגלות פינות נסתרות שעוד לא הגעת אליהן?',
        };
    } else {
        return {
            title: 'מדהים! מומחה אמיתי!',
            message: 'אתה יודע על ישראל יותר מרוב האנשים! בוא לשים את הידע למבחן בשטח.',
            ctaText: 'מחפש מסלולים מאתגרים למטיבי לכת?',
        };
    }
}

function animateScore(from, to, element, duration) {
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.round(from + (to - from) * eased);
        element.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ===== Sharing =====
function shareWhatsApp() {
    const url = window.location.href;
    const text = `קיבלתי ${score} מתוך 100 בחידון "כמה אתה מכיר את ישראל?" 🇮🇱\nכמה אתה/את תקבל/י? נסו עכשיו:\n${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
}

// ===== Screen Navigation =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// ===== Utility =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
