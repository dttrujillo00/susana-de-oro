import { Article } from "../interfaces";

export const getArticleById = async (id: string): Promise<Article> => {
    
    const response = await fetch(`https://server-susana-de-oro.onrender.com/news/${id}`)
    const { body } = await response.json()
    return body.response[0];

}