import { useEffect, useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        // Validate input field on state change
        const isValidInput = inputValue.length > 5;
        setIsValid(isValidInput);

    }, [inputValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };

    return (
        <div>
            <h1>Form</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            {isValid ? <p>Input is valid</p> : <p>Input is invalid</p>}
        </div>
    );
};
export default Form;