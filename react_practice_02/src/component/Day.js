import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

export default function Day(){
    //dummy.words

    const {day} =useParams()
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    // const wordList = dummy.words.filter(word => (word.day===Number(day)))
    // const [words, setWords] = useState([])
    // useEffect(()=>{ //1. 랜더링 후 호출, 상태 변화에 따라 호출, 컴포넌트가 죽기 전 
    //     fetch(`http://localhost:3001/words?day=${day}`) // 비동기 
    //     .then(res=> res.json())
    //     .then(data => {
    //         setWords(data)})
    //   },[day])
    return (
        <>
        <h2>Day {day}</h2>
        <table className='list_words'>
            <tbody>
            {words.map(word=>(
                <Word word={word} key = {word.id}/>
            ))}
            </tbody>
    
    
            </table>
        </>
     

    );
      
}