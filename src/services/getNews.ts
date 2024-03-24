import { Article } from "../interfaces/article";


export const getNews = async () => {
    
    const response = await fetch('https://server-susana-de-oro.onrender.com/news')
    const { body } = await response.json()
    return body.response;

}