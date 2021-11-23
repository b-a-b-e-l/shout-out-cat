import { useState, useEffect } from 'react'
import ImageComponent from './components/ImageComponent'
import TextBubble from './components/TextBubble'
import cat100 from './images/gati-100.gif'
import catAwe from './images/gati-awe.gif'
import catGreat from './images/gati-great.gif'
import catWin from './images/gati-win.gif'
import catWow from './images/gati-wow.gif'
import catYass from './images/gati-yass.gif'
import getRandomItem from './core/functions'
import fetchData from './core/api'

const catImagesArray = [
  cat100,
  catAwe,
  catGreat,
  catWin,
  catWow,
  catYass,
];

function App() {
  const [randomCat, setRandomCat] = useState(null);
  const [shoutOut, setShoutOut] = useState(null);

  useEffect(() => {
    setRandomCat(getRandomItem(catImagesArray))
    getShoutOut();
  }, [])

  const getShoutOut = () => {
    return fetchData()
      .then(shoutOutList => {
        const random = getRandomItem(shoutOutList)
        setShoutOut(random)
      });
  }

  return (
    <div className="App">
      <TextBubble
        text={shoutOut?.text}
        textColor={shoutOut?.color}
        backgroundColor={shoutOut?.backgroundcolor}
      />
      <ImageComponent image={randomCat}/>
    </div>
  );
}

export default App;
