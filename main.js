let art;
let seeArtDetails;

const _getArtDetails = async () => {
    const result = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        }
    });

    const data = await result.json();
}

/**
 * @param img_index
 * @param item_index
 */

async function clickedEvent(img_index, item_index) {
    let picture = document.getElementById('img')[img_index].attributes[1].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method : 'GET',
        headers : headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response);
    
    let art = response.all_picture_info.items[item_index].preview_url
}




/**
 * @param id
 * @param event
 */


function artDetails(id, event) {
    switch(id) {
        case '15563': { // The Night is Stirring
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case '15401': { // At Mouquin'a
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case '84076': { // Cafe Singer
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case '4884': { // Figure with Meat
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case '109780': { // Love of Winter
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case '191183': { // Madame Paul Escudier
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
        case '28067': { // The Old Guitarist
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
        case '87088': { // Water Lily Pond
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
    }
}


/**
 * @param url
 * url = Details Preview_url
 */

function detailSnippet(url){
    seeArtDetails = new detailSnippet(url);
    return seeArtDetails.play()
}

function stopArtDetails(){
    return seeArtDetails.pause()
}
