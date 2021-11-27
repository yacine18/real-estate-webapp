import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async(url) => {
    const {data} = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e16da1756amsh86491ac819c5e4ap107915jsnce30bb6731c2'
          }
    })

    return data
}