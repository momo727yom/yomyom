
document.addEventListener('DOMContentLoaded', () => {
    const getFortuneButton = document.getElementById('get-fortune');
    const fortuneResultDiv = document.getElementById('fortune-result');

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

        const seed = parseInt(year) + parseInt(month) + parseInt(day);
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        
        fortuneResultDiv.textContent = fortunes[randomIndex];
    });
});
