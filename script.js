/* DarkX Official - Video Loader Script
   Developed by: MrX Dev
*/

// Orodha ya video (Ongeza ID mpya hapa juu kila siku)
const videoList = [
    { id: "otpotbv6420", title: "DarkX Update Video 1" },
    { id: "icfuouk4993", title: "DarkX Update Video 2" },
    { id: "ifubvohecdd", title: "DarkX Update Video 3" },
    { id: "upefikb2fd0", title: "DarkX Update Video 4" },
    { id: "uupeehe974a", title: "DarkX Update Video 5" },
    { id: "keflavma797", title: "DarkX Update Video 6" },
    { id: "kfokfko9ea3", title: "DarkX Update Video 7" }
];

const container = document.getElementById('video-container');
const searchInput = document.getElementById('searchInput');

// Function ya kuonyesha video kwenye kioo
function displayVideos(videos) {
    // Futa video zilizopo kwanza kabla ya kuweka mpya (muhimu kwa search)
    container.innerHTML = "";

    videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        card.innerHTML = `
            <iframe 
                src="https://www.txnhh.com/embedframe/${video.id}" 
                frameborder="0" 
                allowfullscreen="true" 
                scrolling="no"
                loading="lazy"
                referrerpolicy="no-referrer"
                sandbox="allow-forms allow-scripts allow-same-origin allow-presentation">
            </iframe>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p style="color: #ff0000; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                   <i class="fa fa-circle" style="font-size: 8px;"></i> Live Now
                </p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Logic ya kutafuta video (Search Function)
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filteredVideos = videoList.filter(video => 
            video.title.toLowerCase().includes(term)
        );
        displayVideos(filteredVideos);
    });
}

// Anzisha kwa kuonyesha video zote mara tu web inafunguka
displayVideos(videoList);

console.log("DarkX Video Engine Loaded Successfully | Developer: MrX Dev");
