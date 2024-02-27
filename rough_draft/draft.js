

/**
 * @param id
 * @param event 
 * 
 * id = image if for gallery image
 * event = Mouse event given by the action from our user
 * 
 * Function produces songs from the clickedEvent based
 * on index of image.
 */

const getData = async () => {
    let response = await axios.get(`"https://api.artic.edu/api/v1/artworks/${id}`)
    console.log(response.data)
    return response.data
}