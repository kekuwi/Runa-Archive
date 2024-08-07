function createList(uri){
    fetch(uri)
    .then((response) => {
        return response.json();
    }).then(function(obj) {
        console.log(obj);
        for (let i of obj.data ) {
            //container
            let container = document.createElement("a"); 
                container.href = (i.Url);
                container.target = ("_blank");
                container.classList.add("card-container", "flex", "flex-column", normalizeString(i.Tags));
        
            //image container
            let imgContainer = document.createElement("div");
                imgContainer.classList.add("image-container");
                container.appendChild(imgContainer)
        
            //img image
            let image = document.createElement("img");
                image.setAttribute("loading", "lazy");
                image.setAttribute("src", i.Image);
                image.classList.add("card-image");
                imgContainer.appendChild(image);
        
            //text container
            let cardText = document.createElement("div");
                cardText.classList.add("card-text");
                container.appendChild(cardText);
        
            //Title
            let name = document.createElement("h3");
                name.innerText = i.Title.toUpperCase();
                cardText.appendChild(name);
        
            //Description
            let description = document.createElement("p");
                description.classList.add("description");
                description.innerText = i.Description;
                cardText.appendChild(description);
            
            document.getElementById("list").appendChild(container);
        };

        //Filter
        let tags = obj.data.filter((item, index) => { //remove duplicated tag
            return index === obj.data.findIndex((obj) => {
                return item.Tags === obj.Tags;
            })
        });

        for (let i of tags) {
            let tag = document.createElement("button");
                tag.innerText = i.Tags;
                tag.classList.add("filter-button")
                tag.setAttribute("id", normalizeString(i.Tags));
                tag.setAttribute("onclick", ("filter(" + normalizeString(i.Tags) + ")"));
                document.getElementById("filter-list").appendChild(tag)
        };

    }).catch(function(error) {
        console.error('something went wrong with the JSON');
        console.error(error);
    })
}

