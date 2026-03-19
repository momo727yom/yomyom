document.addEventListener('DOMContentLoaded', () => {
    const getFortuneButton = document.getElementById('get-fortune');
    const fortuneResultDiv = document.getElementById('fortune-result');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = 'Dark Mode';
    }

    // Theme Toggle Logic
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        
        if (isLightMode) {
            themeToggle.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });

    const fortunes = [
        "오늘은 행운이 가득한 날입니다.",
        "새로운 인연을 만날 수 있는 좋은 날입니다.",
        "뜻밖의 재물을 얻게 될 수 있습니다.",
        "건강에 유의해야 하는 날입니다.",
        "노력의 결실을 맺는 날입니다.",
        "여행을 떠나기 좋은 날입니다.",
        "오늘은 조금 쉬어가는 것이 좋은 날입니다.",
        "새로운 도전을 하기에 좋은 날입니다.",
        "주변 사람들과의 관계가 더욱 돈독해지는 날입니다.",
        "예상치 못한 좋은 소식을 듣게 될 수 있습니다."
    ];

    getFortuneButton.addEventListener('click', () => {
        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;

        if (!year || !month || !day) {
            fortuneResultDiv.textContent = "생년월일을 모두 입력해주세요.";
            return;
        }

        // Simple pseudo-random logic based on date
        const dateStr = `${year}${month}${day}`;
        let hash = 0;
        for (let i = 0; i < dateStr.length; i++) {
            hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
            hash |= 0;
        }
        
        const randomIndex = Math.abs(hash) % fortunes.length;
        fortuneResultDiv.textContent = fortunes[randomIndex];
    });
});
