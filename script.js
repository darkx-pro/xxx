// ===== DARKX OFFICIAL UPDATED =====

const videoData = [
    { title: "Pilau_01", url: "https://www.txnhh.com/embedframe/otpotbv6420" },
    { title: "Pilau_02", url: "https://www.txnhh.com/embedframe/icfuouk4993" },
    { title: "Pilau_03", url: "https://www.xnxx.com/embedframe/uoclukd982a" },
    { title: "Pilau_04", url: "https://www.xnxx.com/embedframe/uooiaaf5471" },
    { title: "Pilau_05", url: "https://www.xnxx.com/embedframe/uudibutd9ef" },
    { title: "Pilau_06", url: "https://www.xnxx.com/embedframe/uooictba693" },
    { title: "Pilau_07", url: "https://www.xnxx.com/embedframe/uteucph48c9" },
    { title: "Pilau_08", url: "https://www.xnxx.com/embedframe/uivmatmf6a6" },
    { title: "Pilau_09", url: "https://www.xnxx.com/embedframe/ukipftv02da" }
];

const blockedImg = "media/blocked.jpg";
const logoImg = "media/logo.png";

function loadVideos(list = videoData) {
    const grid = document.getElementById("videoGrid");
    if (!grid) return;

    grid.innerHTML = list.map((video, index) => `
        <div class="video-card fade-in">

            <div class="thumbnail"
                 onclick="openVideo('${video.url}')"
                 style="background-image:url('${blockedImg}')">

                <div class="overlay-dark"></div>

                <img src="${logoImg}" class="thumb-logo">

                <span class="play-icon">▶</span>

                <span class="video-number">#${index + 1}</span>

                <span class="badge18">18+</span>
            </div>

            <div class="card-body">
                <div class="video-title">${video.title}</div>

                <div class="btn-group">
                    <a href="${video.url}" target="_blank" class="btn btn-watch">WATCH</a>
                    <a href="${video.url}" target="_blank" class="btn btn-open">OPEN</a>
                </div>
            </div>

        </div>
    `).join("");
}

function openVideo(url){
    window.open(url,"_blank","noopener,noreferrer");
}

window.onload = () => {
    loadVideos();
};
