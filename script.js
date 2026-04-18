// ===== DARKX OFFICIAL PRO SCRIPT =====

// ===== VIDEO DATABASE =====
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

// ===== SETTINGS =====
const blockedImg = "media/blocked.jpg";

// ===== LOAD VIDEOS =====
function loadVideos(list = videoData) {
    const grid = document.getElementById("videoGrid");
    if (!grid) return;

    if (list.length === 0) {
        grid.innerHTML = `
        <div class="empty-box">
            <h3>No Videos Found</h3>
        </div>`;
        return;
    }

    grid.innerHTML = list.map((video, index) => `
        <div class="video-card fade-in">

            <div class="thumbnail"
                 onclick="openVideo('${video.url}')"
                 style="background-image:url('${blockedImg}')">

                <div class="overlay-dark"></div>

                <span class="play-icon">▶</span>

                <span class="video-number">#${index + 1}</span>

                <span class="badge18">18+</span>
            </div>

            <div class="card-body">

                <div class="video-title">${video.title}</div>

                <div class="btn-group">
                    <a href="${video.url}" target="_blank" class="btn btn-watch">
                        WATCH
                    </a>

                    <a href="${video.url}" target="_blank" class="btn btn-open">
                        OPEN
                    </a>
                </div>

            </div>

        </div>
    `).join("");
}

// ===== OPEN VIDEO =====
function openVideo(url) {
    window.open(url, "_blank", "noopener,noreferrer");
}

// ===== SEARCH VIDEOS =====
function searchVideos(keyword) {
    const q = keyword.toLowerCase().trim();

    const filtered = videoData.filter(v =>
        v.title.toLowerCase().includes(q)
    );

    loadVideos(filtered);
}

// ===== LOGIN =====
async function loginUser() {
    const input = document.getElementById("username");
    if (!input) return;

    const username = input.value.trim();

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
    } catch (e) {}

    startSite();
}

// ===== START =====
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

// ===== USERS =====
async function loadUsers() {
    try {
        const res = await fetch("/users");
        const data = await res.json();

        const users = document.getElementById("usersCount");

        if (users) {
            users.innerText = "Users: " + data.count;
        }

    } catch (e) {}
}

// ===== LOGOUT =====
function logoutUser() {
    localStorage.removeItem("darkx_user");
    location.reload();
}

// ===== AUTO START =====
window.onload = () => {
    const user = localStorage.getItem("darkx_user");

    if (user) {
        startSite();
    } else {
        loadUsers();
    }
};
