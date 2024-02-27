async function _getArt() {
    const fields = 'id,title,artist_display,date_display,image_id';
    const url = `https://api.artic.edu/api/v1/artworks?fields=${fields}`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
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
                alert(`${painting.title}, ${painting.artist_display}, ${painting.date_display}`);
            });
            art.appendChild(imageElement)
        })
    })
}

if (typeof window !== 'undefined') {
    // Call the function to display paintings when the page loads
    window.onload = displayArt;
  }

