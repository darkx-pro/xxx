// ===== VIDEO DATABASE =====
const videoData = [
    { title: "Karatuni 01", url: "https://www.txnhh.com/embedframe/otpotbv6420" },
    { title: "Karatuni 02", url: "https://www.txnhh.com/embedframe/icfuouk4993" },
    { title: "Premium 03", url: "https://www.xnxx.com/embedframe/uoclukd982a" },
    { title: "Premium 04", url: "https://www.xnxx.com/embedframe/uooiaaf5471" },
    { title: "Premium 05", url: "https://www.xnxx.com/embedframe/uudibutd9ef" },
    // VIDEO MPYA ULIZOONGEZA
    { title: "Premium 06", url: "https://www.xnxx.com/embedframe/uooictba693" },
    { title: "Premium 07", url: "https://www.xnxx.com/embedframe/uteucph48c9" },
    { title: "Premium 08", url: "https://www.xnxx.com/embedframe/uivmatmf6a6" },
    { title: "Premium 09", url: "https://www.xnxx.com/embedframe/ukipftv02da" }
];

// Picha ya kuzuia (Placeholder Image)
const blockedImg = "https://img.freepik.com/free-vector/no-entry-hand-sign-isolated-white_1284-41869.jpg";

// ===== LOAD VIDEOS =====
function loadVideos() {
    const grid = document.getElementById("videoGrid");
    if (!grid) return;

    grid.innerHTML = videoData.map((video, index) => `
        <div class="video-card fade-in">
            
            <div class="thumbnail" onclick="openVideo('${video.url}')" 
                 style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${blockedImg}'); background-size: cover; background-position: center;">
                <span class="play-icon">▶</span>
                <span class="video-number">#${index + 1}</span>
                <div class="age-badge">18+</div>
            </div>

            <div class="card-body">
                <div class="video-title">${video.title}</div>
                <div class="btn-group">
                    <a href="${video.url}" target="_blank" class="btn btn-watch">WATCH</a>
                    <a href="${video.url}" target="_blank" class="btn btn-download">OPEN</a>
                </div>
            </div>
        </div>
    `).join("");
}

// ... (Msimbo mwingine wa loginUser, startSite n.k. unabaki vile vile)
