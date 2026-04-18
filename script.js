// Video ID ulizozituma kama test
const videoList = [
    { id: "otpotbv6420", title: "Video Update #1" },
    { id: "icfuouk4993", title: "Video Update #2" },
    { id: "ifubvohecdd", title: "Video Update #3" },
    { id: "upefikb2fd0", title: "Video Update #4" },
    { id: "uupeehe974a", title: "Video Update #5" },
    { id: "keflavma797", title: "Video Update #6" },
    { id: "kfokfko9ea3", title: "Video Update #7" }
];

const container = document.getElementById('video-container');

// Kuzisukuma video kwenye website
videoList.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    card.innerHTML = `
        <iframe 
            src="https://www.txnhh.com/embedframe/${video.id}" 
            frameborder="0" 
            allowfullscreen 
            loading="lazy">
        </iframe>
        <div class="video-info">
            <h3>${video.title}</h3>
            <p style="color: #888; font-size: 12px;">DarkX Official • Live Now</p>
        </div>
    `;
    
    container.appendChild(card);
});
