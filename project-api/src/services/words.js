const BASE_URL = 'https://random-word-api.herokuapp.com'
export const getRandomWords = async (number = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/word?number=${number}`);
        const json = await response.json();
        return json
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}