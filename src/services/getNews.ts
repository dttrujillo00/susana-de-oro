

export const getNews = async () => {
    
    const response = await fetch('https://server-susana-de-oro.onrender.com/news')
    const resp = await response.json()
    return resp;

}