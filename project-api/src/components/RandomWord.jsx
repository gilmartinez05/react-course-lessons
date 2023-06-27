import { useEffect, useState } from 'react';
import { getRandomWords } from '../services/words';

const RandomWord = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch API data on component mount
    console.log('Componente montado')
    getRandomWords().then(data => setData(data))

    //otroData = 3
  }, [])

  useEffect(() => {
    if(data.length > 0)
      console.log('La data cambio')
  },[data])



  // useEffect(() => {
  //   console.log('Componente creado')
  //   //Mi componente se acaba de crear

  //   console.log('Componente actualizado')
  //   return () => {
  //     //Mi componete se destruye
  //     console.log('Componente destruido')
  //   }
  // }, [data])



  return (
    <div>
      <h1>Random Word</h1>
      {/* Display the fetched data */}
      {data[0]}
    </div>
  );
};
export default RandomWord