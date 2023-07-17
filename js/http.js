export const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'


export const getData = async (path) => {
    console.log(BASE_URL);
    try {
        const res = await fetch(BASE_URL )
        const data = await res.json()
        return data
    } catch (error) {
        return []
    }
}