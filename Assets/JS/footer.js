let kekuwiContainer = document.createElement("div");
    kekuwiContainer.classList.add("flex", "flex-column", "footer-container");
let kekuwiName = document.createElement("h5");
    kekuwiName.innerText = ("kekuwi");


let runaContainer = document.createElement("div");
    runaContainer.classList.add("flex", "flex-column", "footer-container");
let runaName = document.createElement("h5");
    runaName.innerText = ("Runabun");

let archiveContainer = document.createElement("div");
    archiveContainer.classList.add("flex", "flex-column", "footer-container");
let archiveName = document.createElement("h5");
    archiveName.innerText = ("Runa's Archive");

let archiveLink = document.createElement("div");
    archiveLink.classList.add("flex", "footer-link");

    // Socials
    let socials = {
        data:[
            {
                user: "kekuwi",
                socialMedia: "Github",
                link: "https://github.com/kekuwi",
            },
            {
                user: "kekuwi",
                socialMedia: "youtube",
                link: "https://youtube.com/kekuwi",
            },
            {
                user: "kekuwi",
                socialMedia: "X",
                link: "https://x.com/Kekuw1",
            },
            {
                user: "runa",
                socialMedia: "Twitch",
                link: "https://www.twitch.tv/runapenumbra",
            },
            {
                user: "runa",
                socialMedia: "youtube",
                link: "https://www.youtube.com/@RunaBun",
            },
            {
                user: "runa",
                socialMedia: "X",
                link: "https://x.com/runabun_",
            }
        ]
    };

    let kekuwiSocialContainer = document.createElement("div");
        kekuwiSocialContainer.classList.add("flex", "footer-link");  
    let runaSocialContainer = document.createElement("div");
        runaSocialContainer.classList.add("flex", "footer-link");
    for (let i of socials.data) {
        if (i.user === "kekuwi") {
            let socialMedia = document.createElement("a");
                socialMedia.href = (i.link);
                socialMedia.innerText = i.socialMedia;
                socialMedia.classList.add("social-icon-container", i.socialMedia)
                kekuwiSocialContainer.appendChild(socialMedia);
        };

        if (i.user === "runa") {
            let socialMedia = document.createElement("a");
                socialMedia.href = (i.link);
                socialMedia.innerText = i.socialMedia;
                socialMedia.classList.add("social-icon-container", i.socialMedia)
                runaSocialContainer.appendChild(socialMedia);
        };
    };




let feedbackLink = document.createElement("a");
    feedbackLink.innerText = ("Feedback");
    feedbackLink.href = ("https://github.com/kekuwi/Runa-Archive/issues/new");

let projectLink = document.createElement("a");
    projectLink.innerText = ("Repository");
    projectLink.href = ("https://github.com/kekuwi/Runa-Archive");

let listLink = document.createElement("a");
    listLink.innerText = ("Edit");
    listLink.href = ("https://github.com/kekuwi/RA-Edit");

let footerDiscordLink = document.createElement("a");
    footerDiscordLink.innerText = ("Discord");
    footerDiscordLink.href = ("https://discord.gg/GdfHVZ6Z33")

    

// Assign
document.getElementById("footer").appendChild(kekuwiContainer);
document.getElementById("footer").appendChild(runaContainer);
document.getElementById("footer").appendChild(archiveContainer);


kekuwiContainer.appendChild(kekuwiName);
runaContainer.appendChild(runaName);
kekuwiContainer.appendChild(kekuwiSocialContainer);
runaContainer.appendChild(runaSocialContainer);

archiveContainer.appendChild(archiveName);
archiveContainer.appendChild(archiveLink);

archiveLink.appendChild(feedbackLink);
archiveLink.appendChild(projectLink);
archiveLink.appendChild(listLink);
archiveLink.appendChild(footerDiscordLink);


