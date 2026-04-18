// 1. Orodha ya Video zako (Hapa ndipo pa kuongeza video kirahisi)
const videoData = [
    { title: "Karatuni 01", url: "https://www.txnhh.com/embedframe/otpotbv6420" },
    { title: "Karatuni 02", url: "https://www.txnhh.com/embedframe/icfuouk4993" },
    { title: "Premium 03", url: "https://www.xnxx.com/embedframe/uoclukd982a" },
    { title: "Premium 04", url: "https://www.xnxx.com/embedframe/uooiaaf5471" },
    { title: "Premium 05", url: "https://www.xnxx.com/embedframe/uudibutd9ef" }
];

// 2. Kazi ya kuweka video kwenye kioo (Display)
function loadVideos() {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = videoData.map(video => `
        <div class="video-card">
            <div class="thumbnail" onclick="window.open('${video.url}', '_blank')">▶</div>
            <div class="card-body">
                <div class="video-title">${video.title}</div>
                <div class="btn-group">
                    <a href="${video.url}" target="_blank" class="btn btn-watch">WATCH</a>
                    <a href="${video.url}" target="_blank" class="btn btn-download">DOWNLOAD</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 3. Kazi ya Login
function unlockSite() {
    const isAgeValid = document.getElementById('ageCheck').checked;
    if (isAgeValid) {
        document.getElementById('login-overlay').style.display = 'none';
        loadVideos(); // Inapakia video baada ya login
    } else {
        alert("Lazima uthibitishe umri wako!");
    }
}
