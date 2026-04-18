// ===== VIDEO DATABASE =====
const videoData = [
    { title: "Karatuni 01", url: "https://www.txnhh.com/embedframe/otpotbv6420" },
    { title: "Karatuni 02", url: "https://www.txnhh.com/embedframe/icfuouk4993" },
    { title: "Premium 03", url: "https://www.xnxx.com/embedframe/uoclukd982a" },
    { title: "Premium 04", url: "https://www.xnxx.com/embedframe/uooiaaf5471" },
    { title: "Premium 05", url: "https://www.xnxx.com/embedframe/uudibutd9ef" }
];

// ===== LOAD VIDEOS =====
function loadVideos() {
    const grid = document.getElementById("videoGrid");

    if (!grid) return;

    grid.innerHTML = videoData.map((video, index) => `
        <div class="video-card fade-in">
            
            <div class="thumbnail" onclick="openVideo('${video.url}')">
                <span class="play-icon">▶</span>
                <span class="video-number">#${index + 1}</span>
            </div>

            <div class="card-body">
                <div class="video-title">${video.title}</div>

                <div class="btn-group">
                    <a href="${video.url}" target="_blank" class="btn btn-watch">
                        WATCH
                    </a>

                    <a href="${video.url}" target="_blank" class="btn btn-download">
                        OPEN
                    </a>
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

    try {
        await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username })
        });
    } catch (err) {}

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

// ===== USERS COUNT =====
async function loadUsers() {
    try {
        const res = await fetch("/users");
        const data = await res.json();

        const usersCount = document.getElementById("usersCount");

        if (usersCount) {
            usersCount.innerText = "Users: " + data.count;
        }

    } catch (err) {}
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
        loadUsers();
    }
};
