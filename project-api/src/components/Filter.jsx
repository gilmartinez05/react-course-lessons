import { useEffect, useState } from 'react';
import { getRandomWords } from '../services/words';

const Filter = ({ isSearching, setIsSearching }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (isSearching) {
            getRandomWords().then(data => {
                setData(data)
                setIsSearching(false)
            })
        }
        //otroData = 3
    }, [isSearching])

    return (
        <div>
            <h1>Random Word</h1>
            {/* Display the fetched data */}
            {data[0]}
        </div>
    );
};
export default Filter