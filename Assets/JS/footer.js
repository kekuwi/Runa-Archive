// devider
let leftSide = document.createElement("div");
    leftSide.classList.add("ft-social-media", "flex", "flex-row");
    
let rightSide = document.createElement("div");
    rightSide.classList.add("flex", "flex-collumn", "flex-center");
    
// left Side
let nameContainer = document.createElement("div");
    nameContainer.classList.add("flex", "flex-column", "flex-right");
    
let kekuwiName = document.createElement("h2");
    kekuwiName.classList.add("social-name")
    kekuwiName.innerText = "kekuwi";

let runaName = document.createElement("h2");
    runaName.innerText = "Runabun";


    // Socials
    let socials = {
        data:[
            {
                user: "kekuwi",
                socialMedia: "Github",
                link: "https://github.com/kekuwi",
                icon: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
            },
            {
                user: "kekuwi",
                socialMedia: "youtube",
                link: "https://youtube.com/kekuwi",
                icon: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
            },
            {
                user: "kekuwi",
                socialMedia: "X",
                link: "https://x.com/Kekuw1",
                icon: "https://i.pinimg.com/736x/49/62/83/496283054ad108e8b4d4b43688336bb5.jpg"
            },
            {
                user: "runa",
                socialMedia: "Twitch",
                link: "https://github.com/kekuwi",
                icon: "https://static-00.iconduck.com/assets.00/twitch-icon-2048x2048-tipdihgh.png"
            },
            {
                user: "runa",
                socialMedia: "youtube",
                link: "https://www.youtube.com/@RunaBun",
                icon: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
            },
            {
                user: "runa",
                socialMedia: "X",
                link: "https://x.com/runabun_",
                icon: "https://i.pinimg.com/736x/49/62/83/496283054ad108e8b4d4b43688336bb5.jpg"
            }
        ]
    };

    let socialContainer = document.createElement("div");
        socialContainer.classList.add("flex", "flex-column");
    let kekuwiSocialContainer = document.createElement("div");
        kekuwiSocialContainer.classList.add("flex", "flex-row");  
    let runaSocialContainer = document.createElement("div");
        runaSocialContainer.classList.add("flex", "flex-row");
    for (let i of socials.data) {
        if (i.user === "kekuwi") {
            let socialMedia = document.createElement("a");
                socialMedia.href = (i.link);
                socialMedia.classList.add("social-icon-container", i.socialMedia)
                kekuwiSocialContainer.appendChild(socialMedia);

            let socialIcon = document.createElement("img");
                socialIcon.setAttribute("src", i.icon);
                socialIcon.classList.add("social-icon");
                socialMedia.appendChild(socialIcon);
        };

        if (i.user === "runa") {
            let socialMedia = document.createElement("a");
                socialMedia.href = (i.link);
                socialMedia.classList.add("social-icon-container", i.socialMedia)
                runaSocialContainer.appendChild(socialMedia);

                let socialIcon = document.createElement("img");
                socialIcon.setAttribute("src", i.icon);
                socialIcon.classList.add("social-icon");
                socialMedia.appendChild(socialIcon);
        };
    };


// Assign
document.getElementById("footer").appendChild(leftSide);
document.getElementById("footer").appendChild(rightSide);

leftSide.appendChild(nameContainer);
leftSide.appendChild(socialContainer);
nameContainer.appendChild(kekuwiName);
nameContainer.appendChild(runaName);
socialContainer.appendChild(kekuwiSocialContainer);
socialContainer.appendChild(runaSocialContainer);

