let art;
let seeArtDetails;

const _getArt = async () => {
    const result = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'AIC-User-Agent': 'aic-bash (mhubert314@gmail.com)'
        }
    });

    const data = await result.json();
    return data
}

/**
 * @param img_index
 * @param item_index
 */

async function clickedEvent(img_index, item_index) {
    let art = document.getElementsByTagName('img')[img_index].attributes[1].value;
    console.log(info)

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
        ['Access-Control-Allow-Origin', '*']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${info}`, {
        method : 'GET',
        headers : headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response);

    // display info
    // title
    // artist_display
    // place_of_origin
    // alt_text
    // id
    // api_link
    
    // let art = response.all_picture_info.items[item_index].preview_url

    // function displayInfo(data) {
    //     const art_ = data.data[0]
    //     const art_element = document.getElementsByTagName('img');
    //     const art_title = art_.title;
    //     const art_artist_display = data.artist_display;
    //     const art_origin = data.place_of_origin;
    //     const art_alt_text = art_.thumbnail.alt_text;
    //     const art_id = art_.id;
    // }
}




/**
 * @param id
 * @param event
 */


function artDetails(id, event) {
    switch(id) {
        case 'fig1': { // The Night is Stirring
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': { // At Mouquin'a
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': { // Cafe Singer
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': { // Figure with Meat
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': { // Love of Winter
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': { // Madame Paul Escudier
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
        case 'fig7': { // The Old Guitarist
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
        case 'fig8': { // Water Lily Pond
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
    }
}


// /**
//  * @param url
//  * url = Details Preview_url
//  */

// function detailSnippet(url){
//     seeArtDetails = new detailSnippet(url);
//     return seeArtDetails.play()
// }

// function stopArtDetails(){
//     return seeArtDetails.pause()
// }
