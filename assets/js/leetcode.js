async function fetchLeetCodeStats(username) {
    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/vucongthanh92`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        return null;
    }
}

async function updateLeetCodeStats() {
    const username = "vucongthanh92"; // Thay bằng username của bạn
    const data = await fetchLeetCodeStats(username);

    if (!data) return;

            document.getElementById("username").textContent = "vucongthanh92";
            document.getElementById("totalSolved").textContent = data.totalSolved;
            document.getElementById("totalQuestions").textContent = data.totalQuestions;
            document.getElementById("easySolved").textContent = data.easySolved;
            document.getElementById("totalEasy").textContent = data.totalEasy;
            document.getElementById("mediumSolved").textContent = data.mediumSolved;
            document.getElementById("totalMedium").textContent = data.totalMedium;
            document.getElementById("hardSolved").textContent = data.hardSolved;
            document.getElementById("totalHard").textContent = data.totalHard;
            document.getElementById("ranking").textContent = data.ranking;
            document.getElementById("contributionPoints").textContent = data.contributionPoints;
            document.getElementById("reputation").textContent = data.reputation;
            document.getElementById("acceptanceRate").textContent = data.acceptanceRate + "%";
}

updateLeetCodeStats();
