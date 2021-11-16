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

function App() {

  const catImagesArray = [
    cat100,
    catAwe,
    catGreat,
    catWin,
    catWow,
    catYass,
  ];

  const randomCat = getRandomItem(catImagesArray)
  fetchData()
    .then(shoutOutList => {
      const random = getRandomItem(shoutOutList)
      console.log(random)
    })

  return (
    <div className="App">
      <TextBubble
        text='AAAAAAAAAAAAAAA'
        textColor='#ffffff'
        backgroundColor='#000000'
      />
      <ImageComponent image={randomCat}/>
    </div>
  );
}

export default App;
