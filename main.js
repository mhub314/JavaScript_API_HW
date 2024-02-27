// let art;
// let seeArtDetails;

async function _getArt() {
    const result = await fetch(`https://api.artic.edu/api/v1/artworks`);
    const fields = 'id,title,artist_display,date_display,image_id';

    try{
        const response = await fetch(`${result}?fields=${fields}`);
        return await response.json();
    } catch(error){
        console.error(error)
        return [];
    }
    }

 function displayArt() {
    const art = document.getElementById('gallery');
    _getArt().then(paintingsData => {
        paintingsData.data.forEach(painting => {
            const imageElement = document.createElement('img')
            const imageURL = `https://www.artic.edu/iiif/2/${painting.image_id}/full/200,/0/default.jpg`;
            imageElement.src = imageURL
            imageElement.alt = painting.title
            imageElement.addEventListener('click', () => {
                alert(painting.title, painting.artist_display, painting.date_display)
            });
            art.appendChild(imageElement)
        })
    })
}

if (typeof window !== 'undefined') {
    // Call the function to display paintings when the page loads
    window.onload = displayArt;
  }




// /**
//  * @param id
//  * @param event
//  */


// function artDetails(id, event) {
//     switch(id) {
//         case 'fig1': { // The Night is Stirring
//             event.stopPropagation();
//             clickedEvent(0,0)
//             break;
//         }
//         case 'fig2': { // At Mouquin'a
//             event.stopPropagation();
//             clickedEvent(1,0)
//             break;
//         }
//         case 'fig3': { // Cafe Singer
//             event.stopPropagation();
//             clickedEvent(2,0)
//             break;
//         }
//         case 'fig4': { // Figure with Meat
//             event.stopPropagation();
//             clickedEvent(3,0)
//             break;
//         }
//         case 'fig5': { // Love of Winter
//             event.stopPropagation();
//             clickedEvent(4,0)
//             break;
//         }
//         case 'fig6': { // Madame Paul Escudier
//             event.stopPropagation();
//             clickedEvent(5,0)
//             break;
//         }
//         case 'fig7': { // The Old Guitarist
//             event.stopPropagation();
//             clickedEvent(6,0)
//             break;
//         }
//         case 'fig8': { // Water Lily Pond
//             event.stopPropagation();
//             clickedEvent(7,0)
//             break;
//         }
//     }
// }


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
