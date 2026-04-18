// ===== VIDEO DATABASE (Ongeza Video Hapa) =====
const videoData = [
    { title: "Karatuni 01", url: "https://www.txnhh.com/embedframe/otpotbv6420" },
    { title: "Karatuni 02", url: "https://www.txnhh.com/embedframe/icfuouk4993" },
    { title: "Premium 03", url: "https://www.xnxx.com/embedframe/uoclukd982a" },
    { title: "Premium 04", url: "https://www.xnxx.com/embedframe/uooiaaf5471" },
    { title: "Premium 05", url: "https://www.xnxx.com/embedframe/uudibutd9ef" },
    { title: "Premium 06", url: "https://www.xnxx.com/embedframe/uooictba693" },
    { title: "Premium 07", url: "https://www.xnxx.com/embedframe/uteucph48c9" },
    { title: "Premium 08", url: "https://www.xnxx.com/embedframe/uivmatmf6a6" },
    { title: "Premium 09", url: "https://www.xnxx.com/embedframe/ukipftv02da" }
];

// Picha ya "Adult Content Blocked" (Unaweza kubadili link ya picha hapa)
const blockedImg = "https://img.freepik.com/free-vector/no-entry-hand-sign-isolated-white_1284-41869.jpg";

// ===== LOAD VIDEOS =====
function loadVideos() {
    const grid = document.getElementById("videoGrid");
    if (!grid) return;

    grid.innerHTML = videoData.map((video, index) => `
        <div class="video-card fade-in">
            <div class="thumbnail" onclick="openVideo('${video.url}')" 
                 style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${blockedImg}'); background-size: cover; background-position: center; height: 180px; position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                <span class="play-icon" style="font-size: 40px; color: white;">▶</span>
                <span class="video-number" style="position: absolute; bottom: 10px; left: 10px; font-size: 12px; color: #ccc;">#${index + 1}</span>
                <span style="position: absolute; top: 10px; right: 10px; background: red; color: white; padding: 2px 5px; font-size: 10px; font-weight: bold; border-radius: 3px;">18+</span>
            </div>
            <div class="card-body" style="padding: 15px;">
                <div class="video-title" style="font-weight: bold; margin-bottom: 10px;">${video.title}</div>
                <div class="btn-group" style="display: flex; gap: 5px;">
                    <a href="${video.url}" target="_blank" class="btn btn-watch" style="flex: 1; text-align: center; background: white; color: black; padding: 8px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 12px;">WATCH</a>
                    <a href="${video.url}" target="_blank" class="btn btn-download" style="flex: 1; text-align: center; background: #333; color: white; padding: 8px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 12px;">OPEN</a>
                </div>
            </div>
        </div>
    `).join("");
}

// ===== OPEN VIDEO =====
function openVideo(url) {
    window.open(url, "_blank");
}

// ===== LOGIN SYSTEM =====
async function loginUser() {
    const usernameInput = document.getElementById("username");
    if (!usernameInput) return;

    const username = usernameInput.value.trim();

    if (!username) {
        alert("Weka username kwanza");
        return;
    }

    localStorage.setItem("darkx_user", username);

    // Kujaribu kutuma data server-side (kama ipo) bila kuzuia site kufunguka
    try {
        await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username })
        });
    } catch (err) {
        console.log("Server not reachable, but logging in locally...");
    }

    startSite();
}

// ===== START SITE =====
function startSite() {
    const overlay = document.getElementById("login-overlay");
    if (overlay) overlay.style.display = "none";

    const user = localStorage.getItem("darkx_user");
    const welcome = document.getElementById("welcomeUser");

    if (welcome && user) {
        welcome.innerText = "Hi, " + user;
    }

    loadVideos();
    loadUsers();
}

// ===== USERS COUNT (Optional) =====
async function loadUsers() {
    try {
        const res = await fetch("/users");
        const data = await res.json();
        const usersCount = document.getElementById("usersCount");
        if (usersCount) {
            usersCount.innerText = "Users: " + data.count;
        }
    } catch (err) {
        console.log("Stats unavailable");
    }
}

// ===== LOGOUT =====
function logoutUser() {
    localStorage.removeItem("darkx_user");
    location.reload();
}

// ===== AUTO LOAD =====
window.onload = () => {
    const user = localStorage.getItem("darkx_user");
    if (user) {
        startSite();
    } else {
        // Hakikisha gridi ipo wazi kulingana na muundo wako
        loadUsers();
    }
};
