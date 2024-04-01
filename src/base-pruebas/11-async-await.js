
const getImagen = async () => {

  try {

    const apiKey = 'L6CMfioFb42tFlY6gOWP0ZATbWu2P2Ar';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    //console.error(error);
    return 'No se encontro la imagen';
  }
}

export {
  getImagen,
}
