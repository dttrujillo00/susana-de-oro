import { Article } from "../interfaces";


export const getArticles = async (): Promise<Article[]> => {
    
    const response = await fetch('https://server-susana-de-oro.onrender.com/news')
    const { body } = await response.json()
    return body.response;

}